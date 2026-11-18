#!/usr/bin/env node
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const importer = path.join(repoRoot, 'scripts', 'import-products.mjs');
const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'smartpickhub-import-test-'));
const workspace = path.join(tempRoot, 'workspace');
const input = path.join(tempRoot, 'candidates.csv');
const cataloguePath = path.join(workspace, 'src', 'data', 'products.json');
const reports = path.join(workspace, 'test-reports');

try {
  fs.mkdirSync(path.dirname(cataloguePath), { recursive: true });
  fs.mkdirSync(workspace, { recursive: true });
  fs.copyFileSync(importer, path.join(workspace, 'import-products.mjs'));
  fs.writeFileSync(cataloguePath, JSON.stringify({ guides: [{ products: [{ name: 'Acme Existing' }] }] }, null, 2) + '\n');

  const csv = [
    'brand,model,market,source_url,amazon_asin_candidate,submitted_notes',
    'Nova,Beam 4,uk,https://manufacturer.example/beam-4,B012345678,"new candidate, verify ASIN"',
    'Acme,Existing,uk,https://manufacturer.example/existing,,existing model',
    'Nova,Beam 4,uk,https://manufacturer.example/beam-4,,duplicate row',
    'Broken,Link,us,http://manufacturer.example/broken,,HTTP must fail'
  ].join('\n') + '\n';
  fs.writeFileSync(input, csv);

  const before = crypto.createHash('sha256').update(fs.readFileSync(cataloguePath)).digest('hex');
  const result = spawnSync(process.execPath, [path.join(workspace, 'import-products.mjs'), '--input', input], {
    cwd: workspace, encoding: 'utf8'
  });
  assert.equal(result.status, 0, `Importer exited unsuccessfully: ${result.stderr || result.stdout}`);

  const summary = JSON.parse(fs.readFileSync(path.join(reports, 'product-import-dry-run.json'), 'utf8'));
  assert.equal(summary.mode, 'dry-run-only');
  assert.equal(summary.inputRows, 4);
  assert.equal(summary.newCandidates, 1);
  assert.equal(summary.possibleExistingMatches, 1);
  assert.equal(summary.batchDuplicates, 1);
  assert.equal(summary.invalidRows, 1);
  assert.equal(summary.asinCandidatesRequiringManualVerification, 1);
  assert.equal(summary.catalogueMutated, false);
  assert.equal(summary.publicationTriggered, false);
  assert.match(summary.results[0].errors.join(' '), /ASIN candidate is unverified/);

  const rowReport = fs.readFileSync(path.join(reports, 'product-import-errors.csv'), 'utf8');
  assert.match(rowReport, /possible_existing_catalogue_match/);
  assert.match(rowReport, /duplicate_in_batch/);
  assert.match(rowReport, /source_url must use HTTPS/);

  const after = crypto.createHash('sha256').update(fs.readFileSync(cataloguePath)).digest('hex');
  assert.equal(after, before, 'Catalogue file changed during dry-run import');
  assert.equal(fs.existsSync(path.join(workspace, 'src', 'data', 'products.json')), true);

  console.log('Product importer end-to-end test passed: candidate, existing match, batch duplicate, invalid HTTPS row, unverified ASIN warning, JSON/CSV reports, and unchanged catalogue hash.');
} finally {
  fs.rmSync(tempRoot, { recursive: true, force: true });
}
