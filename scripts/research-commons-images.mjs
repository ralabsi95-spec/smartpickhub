import fs from 'node:fs';
import path from 'node:path';

const API = 'https://commons.wikimedia.org/w/api.php';
const catalogue = JSON.parse(fs.readFileSync('src/data/products.json', 'utf8'));
const products = (catalogue.guides ?? []).flatMap(guide =>
  (guide.products ?? []).map(product => ({ guide: guide.slug, category: guide.category, ...product }))
);
const results = [];
const failures = [];
const concurrency = 3;
let cursor = 0;

function readMeta(imageInfo, key) {
  const value = imageInfo?.extmetadata?.[key]?.value;
  return typeof value === 'string' ? value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim() : '';
}

function classifyLicense(license) {
  const value = String(license ?? '').trim().toUpperCase();
  if (/^CC0(?:\s|$)/.test(value) || /^PUBLIC DOMAIN/.test(value)) return 'commercial-reuse-candidate';
  if (/^CC BY-SA(?:\s|$)/.test(value)) return 'share-alike-manual-review';
  if (/^CC BY(?:\s|$)/.test(value)) return 'attribution-license-manual-review';
  return 'not-preapproved';
}

async function searchProduct(product) {
  const params = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: product.name,
    gsrnamespace: '6',
    gsrlimit: '5',
    prop: 'imageinfo',
    iiprop: 'url|extmetadata|size|mime',
    iiurlwidth: '640',
    iiextmetadatafilter: 'LicenseShortName|LicenseUrl|Artist|Credit|UsageTerms|Restrictions',
    format: 'json',
    formatversion: '2'
  });
  const response = await fetch(API + '?' + params.toString(), {
    headers: { 'User-Agent': 'SmartPickHub product-image research bot (manual review required)' }
  });
  if (!response.ok) throw new Error('Wikimedia API HTTP ' + response.status);
  const payload = await response.json();
  return (payload.query?.pages ?? []).map(page => {
    const info = page.imageinfo?.[0] ?? {};
    const license = readMeta(info, 'LicenseShortName');
    return {
      guide: product.guide,
      product: product.name,
      category: product.category,
      fileTitle: page.title,
      imageUrl: info.thumburl ?? info.url ?? '',
      originalUrl: info.url ?? '',
      sourcePage: info.descriptionurl ?? '',
      width: info.width ?? null,
      height: info.height ?? null,
      mime: info.mime ?? '',
      license,
      licenseUrl: readMeta(info, 'LicenseUrl'),
      artist: readMeta(info, 'Artist'),
      credit: readMeta(info, 'Credit'),
      usageTerms: readMeta(info, 'UsageTerms'),
      restrictions: readMeta(info, 'Restrictions'),
      candidateClass: classifyLicense(license),
      status: 'candidate-only-human-model-and-rights-review-required'
    };
  });
}

async function worker() {
  while (cursor < products.length) {
    const index = cursor++;
    const product = products[index];
    try {
      const candidates = await searchProduct(product);
      results.push(...candidates);
    } catch (error) {
      failures.push({ product: product.name, error: String(error) });
    }
    // Be courteous to the public API and keep concurrency low.
    await new Promise(resolve => setTimeout(resolve, 180));
  }
}

await Promise.all(Array.from({ length: Math.min(concurrency, products.length) }, worker));
results.sort((a, b) => a.guide.localeCompare(b.guide) || a.product.localeCompare(b.product));
const report = {
  generatedAt: new Date().toISOString(),
  source: 'Wikimedia Commons MediaWiki Action API',
  queryCount: products.length,
  candidateCount: results.length,
  commercialReuseCandidates: results.filter(item => item.candidateClass === 'commercial-reuse-candidate').length,
  attributionLicenseCandidates: results.filter(item => item.candidateClass === 'attribution-license-manual-review').length,
  shareAlikeCandidates: results.filter(item => item.candidateClass === 'share-alike-manual-review').length,
  otherOrUnclearLicenses: results.filter(item => item.candidateClass === 'not-preapproved').length,
  failedQueries: failures.length,
  warning: 'Search results are leads only. Never auto-publish or auto-approve. Open each source page, verify exact model/variant and the complete licence plus trademark/privacy restrictions. A public-domain or Creative Commons copyright licence does not automatically clear all non-copyright rights.',
  candidates: results,
  failures
};
fs.mkdirSync('test-reports', { recursive: true });
fs.writeFileSync(path.join('test-reports', 'wikimedia-image-candidates.json'), JSON.stringify(report, null, 2));
console.log('Wikimedia image research completed: ' + report.candidateCount + ' candidate files for ' + products.length + ' products; ' + report.failedQueries + ' queries failed. No image was approved or published.');
