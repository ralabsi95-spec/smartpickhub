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
    const hasAlt = typeof image?.alt === 'string' && Boolean(image.alt.trim());
    const hasLicense = typeof image?.license === 'string' && Boolean(image.license.trim());
    const hasAttribution = typeof image?.attribution === 'string' && Boolean(image.attribution.trim());
    const hasRightsBasis = typeof image?.rightsBasis === 'string' && Boolean(image.rightsBasis.trim());
    const hasReviewStatus = ['pending', 'approved'].includes(image?.reviewStatus);
    const hasVerificationDate = typeof image?.verifiedAt === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(image.verifiedAt);
    const metadataComplete = imageUrlValid && sourcePageValid && hasAlt && hasLicense && hasAttribution && hasRightsBasis && hasReviewStatus && (image?.reviewStatus !== 'approved' || hasVerificationDate);
    const approved = metadataComplete && image?.reviewStatus === 'approved';

    if (image && !metadataComplete) {
      errors.push(guide.slug + ' / ' + product.name + ': incomplete image provenance metadata.');
    }
    records.push({
      guide: guide.slug,
      category: guide.category,
      product: product.name,
      manufacturerSourceHost: sourceHost,
      usUkSearchPhraseSame: product.us_identifier === product.uk_identifier,
      imageStatus: approved ? 'approved' : metadataComplete ? 'pending-human-review' : image ? 'incomplete-metadata' : 'not-sourced',
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
  approvedProductImages: records.filter(record => record.imageStatus === 'approved').length,
  completeCandidatesPendingHumanReview: records.filter(record => record.imageStatus === 'pending-human-review').length,
  productsWithoutImages: records.filter(record => record.imageStatus === 'not-sourced').length,
  productsWithIncompleteImageMetadata: records.filter(record => record.imageStatus === 'incomplete-metadata').length,
  identicalUsUkSearchPhrasesForManualReview: records.filter(record => record.usUkSearchPhraseSame).length,
  note: 'Only records explicitly marked approved after human verification may render. Metadata completeness is not legal clearance; verify exact model identity and commercial reuse rights.',
  records,
  errors
};

fs.mkdirSync('test-reports', { recursive: true });
fs.writeFileSync(path.join('test-reports', 'product-image-readiness.json'), JSON.stringify(summary, null, 2));
console.log('Image readiness audit: ' + summary.approvedProductImages + ' approved images; ' + summary.completeCandidatesPendingHumanReview + ' candidates awaiting review; ' + summary.productsWithoutImages + ' products without images; ' + summary.identicalUsUkSearchPhrasesForManualReview + ' identical US/UK search phrases flagged for regional review.');
if (errors.length) {
  for (const error of errors) console.error('- ' + error);
  process.exit(1);
}
