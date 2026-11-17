import fs from 'node:fs';
import { URL } from 'node:url';

const file = 'src/data/products.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const errors = [];
const guides = data.guides ?? [];
const forbiddenKeys = new Set(['price', 'rating', 'reviewCount', 'reviews', 'offers', 'aggregateRating', 'availability']);
const markets = [
  { key: 'us_identifier', market: 'us', host: 'www.amazon.com', tag: 'smartpickh0bc-20' },
  { key: 'uk_identifier', market: 'uk', host: 'www.amazon.co.uk', tag: 'smartpickhubu-21' }
];
const linkChecks = { us: 0, uk: 0 };
const imageAudit = { approved: 0, pending: 0, noImage: 0 };

function buildExpectedUrl(market, identifier) {
  const host = market === 'us' ? 'https://www.amazon.com' : 'https://www.amazon.co.uk';
  const tag = market === 'us' ? 'smartpickh0bc-20' : 'smartpickhubu-21';
  const isAsin = /^[A-Z0-9]{10}$/.test(identifier);
  const url = new URL(isAsin ? '/dp/' + identifier : '/s', host);
  if (!isAsin) url.searchParams.set('k', identifier);
  url.searchParams.set('tag', tag);
  return { url, isAsin, tag };
}

if (!Array.isArray(guides) || guides.length === 0) errors.push('Catalogue must contain at least one guide.');
const slugs = new Set();
let productCount = 0;
for (const guide of guides) {
  if (typeof guide.slug !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(guide.slug)) {
    errors.push('Invalid guide slug: ' + String(guide.slug));
  } else if (slugs.has(guide.slug)) {
    errors.push('Duplicate guide slug: ' + guide.slug);
  }
  slugs.add(guide.slug);
  if (guide.editorialStatus === 'Approved for publication') errors.push('Research draft is marked approved: ' + guide.slug);
  if (!Array.isArray(guide.products) || guide.products.length === 0) {
    errors.push('Guide ' + guide.slug + ' must contain at least one product.');
    continue;
  }
  const names = new Set();
  for (const product of guide.products) {
    productCount++;
    if (names.has(product.name)) errors.push('Duplicate product name within guide ' + guide.slug + ': ' + product.name);
    names.add(product.name);
    for (const key of Object.keys(product)) {
      if (forbiddenKeys.has(key)) errors.push('Forbidden commercial/review field "' + key + '" in ' + product.name + '.');
    }
    for (const key of ['name', 'bestFor', 'verdict', 'source', 'sourceNote', 'us_identifier', 'uk_identifier']) {
      if (typeof product[key] !== 'string' || !product[key].trim()) errors.push('Missing ' + key + ' in ' + (product.name ?? 'unnamed product') + '.');
    }
    if (product.source) {
      try {
        const sourceUrl = new URL(product.source);
        if (sourceUrl.protocol !== 'https:') errors.push('Non-HTTPS manufacturer source for ' + product.name + '.');
      } catch {
        errors.push('Invalid manufacturer source URL for ' + product.name + '.');
      }
    }
    if (product.image == null) {
      imageAudit.noImage++;
    } else {
      const image = product.image;
      for (const key of ['url', 'alt', 'sourcePage', 'license', 'attribution', 'rightsBasis', 'reviewStatus', 'verifiedAt']) {
        if (typeof image[key] !== 'string' || !image[key].trim()) {
          errors.push('Product image metadata requires ' + key + ' for ' + product.name + '.');
        }
      }
      for (const key of ['url', 'sourcePage']) {
        if (typeof image[key] === 'string' && image[key].trim()) {
          try {
            const imageUrl = new URL(image[key]);
            if (imageUrl.protocol !== 'https:') errors.push('Product image ' + key + ' must use HTTPS for ' + product.name + '.');
          } catch {
            errors.push('Invalid product image ' + key + ' for ' + product.name + '.');
          }
        }
      }
      if (typeof image.alt === 'string' && /^(image|photo|picture)$/i.test(image.alt.trim())) {
        errors.push('Product image alt text is too generic for ' + product.name + '.');
      }
      if (!['pending', 'approved'].includes(image.reviewStatus)) {
        errors.push('Product image reviewStatus must be pending or approved for ' + product.name + '.');
      }
      if (image.reviewStatus === 'approved' && !/^\\d{4}-\\d{2}-\\d{2}$/.test(image.verifiedAt ?? '')) {
        errors.push('Approved product image requires verifiedAt in YYYY-MM-DD format for ' + product.name + '.');
      }
      if (image.reviewStatus === 'approved') imageAudit.approved++;
      else imageAudit.pending++;
    }
    for (const spec of markets) {
      const identifier = product[spec.key];
      if (typeof identifier !== 'string' || !identifier.trim()) continue;
      if (/^[A-Z0-9]{10}$/.test(identifier)) {
        errors.push('ASIN-shaped identifier needs an explicit manual verification record before direct-link use: ' + product.name + ' (' + spec.market + ').');
      }
      const generated = buildExpectedUrl(spec.market, identifier);
      if (generated.url.hostname !== spec.host || generated.url.searchParams.get('tag') !== spec.tag) {
        errors.push('Affiliate destination or tracking tag mismatch for ' + product.name + ' (' + spec.market + ').');
      }
      if (!generated.isAsin && generated.url.searchParams.get('k') !== identifier) {
        errors.push('Amazon search phrase is not preserved for ' + product.name + ' (' + spec.market + ').');
      }
      linkChecks[spec.market]++;
    }
  }
}
if (typeof data._meta?.productCount === 'number' && data._meta.productCount !== productCount) {
  errors.push('Catalogue metadata productCount is ' + data._meta.productCount + ' but actual count is ' + productCount + '.');
}
if (linkChecks.us !== productCount || linkChecks.uk !== productCount) {
  errors.push('Every product must have one valid US and one valid UK Amazon destination.');
}

const result = {
  status: errors.length ? 'failed' : 'passed',
  generatedAt: new Date().toISOString(),
  guideCount: guides.length,
  productCount,
  marketplaceLinkChecks: linkChecks,
  productImageAudit: imageAudit,
  trackingTags: { us: 'smartpickh0bc-20', uk: 'smartpickhubu-21' },
  identifierPolicy: '10-character ASIN-shaped identifiers are treated as direct product URLs; all other identifiers are search phrases. This validates URL construction, not live listing availability.',
  errors
};
fs.mkdirSync('test-reports', { recursive: true });
fs.writeFileSync('test-reports/catalogue-validation.json', JSON.stringify(result, null, 2));
if (errors.length) {
  console.error('Catalogue validation failed:');
  for (const error of errors) console.error('- ' + error);
  process.exit(1);
}
console.log('Catalogue validation passed: ' + guides.length + ' dynamic guides, ' + productCount + ' products, ' + linkChecks.us + ' US and ' + linkChecks.uk + ' UK affiliate destination checks, ' + imageAudit.approved + ' approved product images, ' + imageAudit.pending + ' pending image candidates and ' + imageAudit.noImage + ' products without image records.');
