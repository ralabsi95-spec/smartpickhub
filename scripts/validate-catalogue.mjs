import fs from 'node:fs';

const file = 'src/data/products.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const errors = [];
const guides = data.guides ?? [];
const expected = new Set([
  'home-office-ergonomics-us-uk',
  'portable-power-travel-tech-us-uk',
  'smart-home-security-cameras-us-uk',
  'wifi-7-home-mesh-routers-us-uk',
  'usb-c-gan-chargers-us-uk',
]);
const forbiddenKeys = new Set(['price', 'rating', 'reviewCount', 'reviews', 'offers', 'aggregateRating', 'availability']);

if (guides.length !== 5) errors.push(`Expected 5 research guides; found ${guides.length}.`);
const slugs = new Set();
let productCount = 0;
for (const guide of guides) {
  if (slugs.has(guide.slug)) errors.push(`Duplicate guide slug: ${guide.slug}`);
  slugs.add(guide.slug);
  if (!expected.has(guide.slug)) errors.push(`Unexpected guide slug: ${guide.slug}`);
  if (guide.editorialStatus === 'Approved for publication') errors.push(`Research draft is marked approved: ${guide.slug}`);
  if (!Array.isArray(guide.products) || guide.products.length !== 4) {
    errors.push(`Guide ${guide.slug} must contain exactly 4 products.`);
    continue;
  }
  for (const product of guide.products) {
    productCount++;
    for (const key of Object.keys(product)) {
      if (forbiddenKeys.has(key)) errors.push(`Forbidden commercial/review field "${key}" in ${product.name}.`);
    }
    for (const key of ['name', 'bestFor', 'verdict', 'source', 'sourceNote', 'us_identifier', 'uk_identifier']) {
      if (typeof product[key] !== 'string' || !product[key].trim()) errors.push(`Missing ${key} in ${product.name ?? 'unnamed product'}.`);
    }
    for (const key of ['pros', 'cons']) {
      if (!Array.isArray(product[key]) || product[key].length < 2) errors.push(`Expected at least 2 ${key} for ${product.name}.`);
    }
    if (!/^https:\/\//.test(product.source ?? '')) errors.push(`Non-HTTPS source for ${product.name}.`);
    if (/^[A-Z0-9]{10}$/.test(product.us_identifier) || /^[A-Z0-9]{10}$/.test(product.uk_identifier)) {
      errors.push(`ASIN-shaped identifier requires separate manual verification: ${product.name}.`);
    }
  }
}
if (productCount !== 20) errors.push(`Expected 20 products; found ${productCount}.`);
if (errors.length) {
  console.error('Catalogue validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log(`Catalogue validation passed: ${guides.length} research guides, ${productCount} products, separate US/UK search phrases, no price/rating/review schema inputs.`);
