import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import data from '../src/data/products.json' with { type: 'json' };

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
const errors = [];
const fail = (message) => errors.push(message);

const rss = await fs.readFile('dist/rss.xml', 'utf8');
if (!/^<\?xml[^>]+\?>\s*<rss version="2\.0"/i.test(rss)) fail('Pinterest feed must be a valid RSS 2.0 document.');
const itemBlocks = [...rss.matchAll(/<item>([\s\S]*?)<\/item>/gi)].map((match) => match[1]);
if (itemBlocks.length !== eligible.length) fail(`RSS has ${itemBlocks.length} items but ${eligible.length} guides pass the publication gate.`);

for (const [index, block] of itemBlocks.entries()) {
  const link = block.match(/<link>([^<]+)<\/link>/i)?.[1];
  const image = block.match(/<enclosure\s+[^>]*url="([^"]+)"/i)?.[1];
  const media = block.match(/<media:content\s+[^>]*url="([^"]+)"/i)?.[1];
  if (!link || !image || !media) { fail(`RSS item ${index + 1} is missing a guide link or image metadata.`); continue; }
  if (image !== media) fail(`RSS item ${index + 1} has inconsistent enclosure and media image URLs.`);
  try {
    const pageUrl = new URL(link);
    const imageUrl = new URL(image);
    if (pageUrl.origin !== site.origin || imageUrl.origin !== site.origin) fail(`RSS item ${index + 1} links outside the selected site origin.`);
    const imagePath = path.join('dist', imageUrl.pathname.replace(/^\//, ''));
    const meta = await sharp(imagePath).metadata();
    if (meta.format !== 'png' || meta.width !== 1000 || meta.height !== 1500) fail(`RSS item ${index + 1} image must be a 1000×1500 PNG.`);
  } catch (error) {
    fail(`RSS item ${index + 1} image could not be verified: ${error.message}`);
  }
}

const snippets = JSON.parse(await fs.readFile('dist/social-snippets.json', 'utf8'));
if (snippets.guideCount !== eligible.length || snippets.items.length !== eligible.length) fail('Social bundle does not match the explicitly approved guide count.');
for (const item of snippets.items) {
  if (item.x.characterCount > 259) fail(`X snippet exceeds the 259-character limit: ${item.slug}`);
  if (item.canonicalUrl !== item.mediumSubstack.canonicalUrl) fail(`Canonical URL mismatch in social bundle: ${item.slug}`);
  if (!item.mediumSubstack.content.includes(`Canonical source: ${item.canonicalUrl}`)) fail(`Medium/Substack draft is missing its canonical source: ${item.slug}`);
}

if (errors.length) {
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log(`Distribution checks passed: RSS 2.0, ${eligible.length} approved guides, original vertical covers, and matching social snippets.`);
