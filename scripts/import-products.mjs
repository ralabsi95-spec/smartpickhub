#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const MAX_BYTES = 20 * 1024 * 1024;
const MAX_ROWS = 100000;
const REQUIRED = ['brand', 'model', 'market', 'source_url'];
const ALLOWED_MARKETS = new Set(['uk', 'us']);

function normalize(value) {
  return String(value ?? '').normalize('NFKC').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim().replace(/\s+/g, ' ');
}

function parseCsv(input) {
  const rows = [];
  let row = [], field = '', quoted = false;
  for (let i = 0; i < input.length; i++) {
    const ch = input[i];
    if (quoted) {
      if (ch === '"' && input[i + 1] === '"') { field += '"'; i++; }
      else if (ch === '"') quoted = false;
      else field += ch;
    } else if (ch === '"' && field.length === 0) quoted = true;
    else if (ch === ',') { row.push(field); field = ''; }
    else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && input[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.some(v => v.trim() !== '')) rows.push(row);
      row = [];
    } else field += ch;
  }
  if (quoted) throw new Error('CSV contains an unclosed quoted field.');
  row.push(field);
  if (row.some(v => v.trim() !== '')) rows.push(row);
  if (!rows.length) throw new Error('Input CSV is empty.');
  const headers = rows.shift().map(v => v.trim().replace(/^\uFEFF/, '').toLowerCase());
  if (new Set(headers).size !== headers.length) throw new Error('CSV contains duplicate column headers.');
  return rows.map((values, index) => {
    const record = { _row: index + 2 };
    headers.forEach((header, i) => { record[header] = values[i] ?? ''; });
    return record;
  });
}

function parseInput(filePath) {
  const stat = fs.statSync(filePath);
  if (!stat.isFile()) throw new Error('Input path must be a regular file.');
  if (stat.size > MAX_BYTES) throw new Error('Input exceeds the 20 MB safety limit.');
  const raw = fs.readFileSync(filePath, 'utf8');
  const ext = path.extname(filePath).toLowerCase();
  let rows;
  if (ext === '.csv') rows = parseCsv(raw);
  else if (ext === '.json') {
    const parsed = JSON.parse(raw);
    rows = Array.isArray(parsed) ? parsed : parsed.products;
    if (!Array.isArray(rows)) throw new Error('JSON input must be an array or an object with a products array.');
    rows = rows.map((r, i) => ({ ...r, _row: i + 1 }));
  } else throw new Error('Only .csv and .json input files are supported.');
  if (rows.length > MAX_ROWS) throw new Error('Input exceeds the 100,000-row safety limit.');
  return rows;
}

function checkRow(row, rowNumber) {
  const errors = [];
  const brand = String(row.brand ?? '').trim();
  const model = String(row.model ?? '').trim();
  const market = String(row.market ?? '').trim().toLowerCase();
  const sourceUrl = String(row.source_url ?? '').trim();
  if (!brand) errors.push('brand is required');
  if (!model) errors.push('model is required');
  if (!ALLOWED_MARKETS.has(market)) errors.push('market must be uk or us');
  try {
    const url = new URL(sourceUrl);
    if (url.protocol !== 'https:') errors.push('source_url must use HTTPS');
  } catch { errors.push('source_url must be a valid HTTPS URL'); }
  const candidateAsin = String(row.amazon_asin_candidate ?? '').trim();
  if (candidateAsin && !/^[A-Z0-9]{10}$/.test(candidateAsin)) errors.push('amazon_asin_candidate must be exactly 10 uppercase letters/digits when supplied');
  const identity = [market, normalize(brand), normalize(model), normalize(row.variant)].join('|');
  const id = crypto.createHash('sha256').update(identity).digest('hex').slice(0, 20);
  return {
    row: rowNumber,
    product_id_candidate: 'sp_' + id,
    brand, model, variant: String(row.variant ?? '').trim(),
    market, source_url: sourceUrl,
    source_type: String(row.source_type ?? 'manufacturer').trim(),
    manufacturer_part_number: String(row.manufacturer_part_number ?? '').trim(),
    gtin_ean_upc: String(row.gtin_ean_upc ?? '').trim(),
    amazon_asin_candidate: candidateAsin || null,
    submitted_notes: String(row.submitted_notes ?? '').trim(),
    status: errors.length ? 'invalid' : 'candidate',
    errors
  };
}

function csvEscape(value) {
  const s = String(value ?? '');
  return /[",\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

function selfTest() {
  const assert = (condition, message) => { if (!condition) throw new Error('Self-test failed: ' + message); };
  const rows = parseCsv('brand,model,market,source_url,submitted_notes\n"Acme, Inc.","Model ""X""",uk,https://example.com/product,"line one, line two"\n');
  assert(rows.length === 1, 'CSV row count');
  assert(rows[0].brand === 'Acme, Inc.', 'CSV comma quoting');
  assert(rows[0].model === 'Model "X"', 'CSV escaped quote');
  assert(rows[0].submitted_notes === 'line one, line two', 'CSV note parsing');
  const good = checkRow(rows[0], 2);
  assert(good.status === 'candidate' && good.market === 'uk', 'valid row accepted');
  assert(good.product_id_candidate.startsWith('sp_'), 'stable candidate ID');
  const bad = checkRow({ brand: 'A', model: 'B', market: 'uk', source_url: 'http://example.com' }, 3);
  assert(bad.status === 'invalid' && bad.errors.some(e => e.includes('HTTPS')), 'HTTP source rejected');
  console.log('Product intake importer self-tests passed.');
}

function main() {
  if (process.argv.includes('--self-test')) return selfTest();
  const inputIndex = process.argv.indexOf('--input');
  if (inputIndex < 0 || !process.argv[inputIndex + 1]) {
    console.error('Usage: npm run import:dry-run -- --input ./products.csv');
    process.exit(2);
  }
  const inputPath = path.resolve(process.argv[inputIndex + 1]);
  const rows = parseInput(inputPath);
  const catalogue = JSON.parse(fs.readFileSync('src/data/products.json', 'utf8'));
  const existingNames = new Set((catalogue.guides ?? []).flatMap(g => (g.products ?? []).map(p => normalize(p.name))));
  const batchIdentities = new Set();
  const results = rows.map((row, i) => {
    const checked = checkRow(row, row._row ?? i + 1);
    if (checked.status === 'invalid') return checked;
    const exactName = normalize(checked.brand + ' ' + checked.model);
    const identity = [checked.market, normalize(checked.brand), normalize(checked.model), normalize(checked.variant)].join('|');
    if (existingNames.has(exactName) || existingNames.has(normalize(checked.model))) {
      checked.status = 'possible_existing_catalogue_match';
      checked.errors.push('Exact normalized name/model match found in current catalogue; human review required.');
    } else if (batchIdentities.has(identity)) {
      checked.status = 'duplicate_in_batch';
      checked.errors.push('Same normalized brand/model/variant/market appears earlier in this import batch.');
    } else {
      checked.status = 'new_candidate';
    }
    batchIdentities.add(identity);
    if (checked.amazon_asin_candidate) checked.errors.push('ASIN candidate is unverified; do not create a direct product link until manually verified for this marketplace.');
    return checked;
  });
  const summary = {
    generatedAt: new Date().toISOString(),
    mode: 'dry-run-only',
    inputFile: path.basename(inputPath),
    inputRows: rows.length,
    newCandidates: results.filter(r => r.status === 'new_candidate').length,
    possibleExistingMatches: results.filter(r => r.status === 'possible_existing_catalogue_match').length,
    batchDuplicates: results.filter(r => r.status === 'duplicate_in_batch').length,
    invalidRows: results.filter(r => r.status === 'invalid').length,
    asinCandidatesRequiringManualVerification: results.filter(r => r.amazon_asin_candidate).length,
    catalogueMutated: false,
    publicationTriggered: false,
    results
  };
  fs.mkdirSync('test-reports', { recursive: true });
  fs.writeFileSync('test-reports/product-import-dry-run.json', JSON.stringify(summary, null, 2));
  const headers = ['row','product_id_candidate','brand','model','variant','market','status','errors'];
  const lines = [headers.join(','), ...results.map(r => headers.map(h => csvEscape(h === 'errors' ? (r.errors ?? []).join('; ') : r[h])).join(','))];
  fs.writeFileSync('test-reports/product-import-errors.csv', lines.join('\n') + '\n');
  console.log(JSON.stringify({
    mode: summary.mode, inputRows: summary.inputRows, newCandidates: summary.newCandidates,
    possibleExistingMatches: summary.possibleExistingMatches, batchDuplicates: summary.batchDuplicates,
    invalidRows: summary.invalidRows, report: 'test-reports/product-import-dry-run.json',
    rowReport: 'test-reports/product-import-errors.csv', catalogueMutated: false
  }, null, 2));
}
try { main(); } catch (error) {
  console.error('Product intake dry-run failed safely: ' + error.message);
  process.exit(1);
}
