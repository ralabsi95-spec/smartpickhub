import fs from 'node:fs/promises';
import path from 'node:path';
import data from '../src/data/products.json';

const productionSite = 'https://smartpickhub.pages.dev';
const previewSite = 'https://smartpickhub-preview.pages.dev';
const isPreviewBuild =
  process.env.DEPLOYMENT_ENV === 'preview' ||
  (Boolean(process.env.CF_PAGES_BRANCH) && process.env.CF_PAGES_BRANCH !== 'main');
const site = new URL(process.env.PUBLIC_SITE_URL ?? (isPreviewBuild ? previewSite : productionSite));
const eligible = (data.guides ?? []).filter((guide) =>
  guide.publicationStatus === 'published' &&
  guide.editorialStatus === 'Approved for publication'
);

function trimTo(value, limit) {
  const text = String(value ?? '').replace(/\s+/g, ' ').trim();
  if (text.length <= limit) return text;
  return text.slice(0, limit - 1).replace(/\s+\S*$/, '') + '…';
}

const items = eligible.map((guide) => {
  const url = new URL(`/guides/${guide.slug}/`, site).href;
  const xText = trimTo(`${guide.title}. ${guide.summary} Read the guide: ${url}`, 259);
  const productNames = [...new Set((guide.products ?? []).map((p) => p.name).filter(Boolean))].slice(0, 5);
  const productSection = productNames.length
    ? `\n\n## Products covered\n\n${productNames.map((name) => `- ${name}`).join('\n')}\n`
    : '';
  const markdown = [
    `# ${guide.title}`,
    '',
    guide.introduction || guide.summary || '',
    '',
    '## What this guide helps you compare',
    '',
    guide.summary || '',
    productSection,
    '## Read the complete buying guide',
    '',
    `The full guide, regional notes, sources and current retailer-check reminders are available on SmartPickHub: ${url}`,
    '',
    `Canonical source: ${url}`,
  ].join('\n').replace(/\n{3,}/g, '\n\n');

  return {
    slug: guide.slug,
    title: guide.title,
    canonicalUrl: url,
    publicationStatus: guide.publicationStatus,
    publishedAt: guide.publishedAt ?? null,
    pinterest: {
      imageUrl: new URL(`/images/pinterest/${guide.slug}.png`, site).href,
      description: trimTo(`${guide.summary} Compare key features, compatibility and buying considerations before choosing.`, 500),
    },
    x: { text: xText, characterCount: xText.length },
    mediumSubstack: { format: 'markdown', canonicalUrl: url, content: markdown },
  };
});

const output = {
  schemaVersion: 1,
  generatedAt: new Date().toISOString(),
  site: site.origin,
  policy: 'Only explicitly published and editorially approved guides are included. Drafts are never distributed.',
  guideCount: items.length,
  items,
};

const outputDir = path.resolve('dist');
await fs.mkdir(outputDir, { recursive: true });
await fs.writeFile(path.join(outputDir, 'social-snippets.json'), JSON.stringify(output, null, 2) + '\n');
console.log(`Generated dist/social-snippets.json with ${items.length} approved guide(s).`);
