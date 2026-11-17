import fs from 'node:fs';
import path from 'node:path';

const cataloguePath = 'src/data/products.json';
const catalogue = JSON.parse(fs.readFileSync(cataloguePath, 'utf8'));
const guides = catalogue.guides ?? [];
const records = [];
const errors = [];

for (const guide of guides) {
  for (const product of guide.products ?? []) {
    const image = product.image ?? null;
    const sourceHost = (() => {
      try { return new URL(product.source).hostname; } catch { return 'invalid-or-missing'; }
    })();
    const imageUrlValid = Boolean(image?.url && /^https:\/\//i.test(image.url));
    const sourcePageValid = Boolean(image?.sourcePage && /^https:\/\//i.test(image.sourcePage));
    const hasAlt = Boolean(image?.alt?.trim());
    const hasLicense = Boolean(image?.license?.trim());
    const hasAttribution = Boolean(image?.attribution?.trim());
    const verified = imageUrlValid && sourcePageValid && hasAlt && hasLicense && hasAttribution;

    if (image && !verified) {
      errors.push(guide.slug + ' / ' + product.name + ': incomplete image provenance metadata.');
    }
    records.push({
      guide: guide.slug,
      category: guide.category,
      product: product.name,
      manufacturerSourceHost: sourceHost,
      usUkSearchPhraseSame: product.us_identifier === product.uk_identifier,
      imageStatus: verified ? 'metadata-complete-review-required' : image ? 'incomplete-metadata' : 'not-sourced',
      imageUrl: image?.url ?? null,
      imageSourcePage: image?.sourcePage ?? null,
      licence: image?.license ?? null,
      attribution: image?.attribution ?? null
    });
  }
}

const summary = {
  status: errors.length ? 'failed' : 'passed',
  generatedAt: new Date().toISOString(),
  guideCount: guides.length,
  productCount: records.length,
  imagesWithCompleteProvenanceMetadata: records.filter(record => record.imageStatus === 'metadata-complete-review-required').length,
  productsWithoutImages: records.filter(record => record.imageStatus === 'not-sourced').length,
  productsWithIncompleteImageMetadata: records.filter(record => record.imageStatus === 'incomplete-metadata').length,
  identicalUsUkSearchPhrasesForManualReview: records.filter(record => record.usUkSearchPhraseSame).length,
  note: 'Metadata completeness is not legal clearance. A human must verify the image depicts the exact model and that the stated licence/permission permits this use.',
  records,
  errors
};

fs.mkdirSync('test-reports', { recursive: true });
fs.writeFileSync(path.join('test-reports', 'product-image-readiness.json'), JSON.stringify(summary, null, 2));
console.log('Image readiness audit: ' + summary.imagesWithCompleteProvenanceMetadata + ' records have complete image provenance metadata; ' + summary.productsWithoutImages + ' have no sourced image; ' + summary.identicalUsUkSearchPhrasesForManualReview + ' identical US/UK search phrases require regional review.');
if (errors.length) {
  for (const error of errors) console.error('- ' + error);
  process.exit(1);
}
