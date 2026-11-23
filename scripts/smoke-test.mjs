import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = 'dist';
const errors = [];
const warnings = [];
const routeResults = [];
const catalogue = JSON.parse(fs.readFileSync('src/data/products.json', 'utf8'));
const guides = catalogue.guides ?? [];
const expectedGuideMap = new Map(guides.map(guide => [guide.slug, guide]));
const htmlFiles = [];
let robotsTxtDisallowAll = false;

function attr(tag, name) {
  const pattern = new RegExp('\\b' + name + '\\s*=\\s*(?:"([^"]*)"|\\x27([^\\x27]*)\\x27|([^\\s>]+))', 'i');
  const match = tag.match(pattern);
  return match?.[1] ?? match?.[2] ?? match?.[3] ?? '';
}
function hasToken(value, token) {
  return value.toLowerCase().split(/\s+/).includes(token);
}
function matchesIdentifier(url, identifier) {
  if (/^[A-Z0-9]{10}$/.test(identifier)) return url.pathname === '/dp/' + identifier;
  return url.pathname === '/s' && url.searchParams.get('k') === identifier;
}
function writeReport(status) {
  fs.mkdirSync('test-reports', { recursive: true });
  fs.writeFileSync('test-reports/smoke-test.json', JSON.stringify({
    status, generatedAt: new Date().toISOString(),
    scannedHtmlPages: htmlFiles.length, guideCount: guides.length,
    routes: routeResults, robotsTxtDisallowAll, errors, warnings
  }, null, 2));
}

if (!fs.existsSync(root)) {
  errors.push('Build output dist does not exist.');
  writeReport('failed');
  console.error(errors.join('\n'));
  process.exit(1);
}
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && entry.name.endsWith('.html')) htmlFiles.push(full);
  }
}
walk(root);
if (!htmlFiles.length) errors.push('No HTML pages were generated.');

const robotsPath = path.join(root, 'robots.txt');
const robotsText = fs.existsSync(robotsPath) ? fs.readFileSync(robotsPath, 'utf8') : '';
robotsTxtDisallowAll = /User-agent:\s*\*/i.test(robotsText) && /Disallow:\s*\//i.test(robotsText);

if (!robotsTxtDisallowAll) errors.push('Preview robots.txt must disallow crawling (User-agent: * / Disallow: /).');

// Pinterest must receive a parseable RSS 2.0 feed, never Atom-only or unapproved drafts.
const rssPath = path.join(root, 'rss.xml');
if (!fs.existsSync(rssPath)) {
  errors.push('Pinterest RSS feed dist/rss.xml is missing.');
} else {
  const rss = fs.readFileSync(rssPath, 'utf8');
  if (!/<rss\b[^>]*version=["']2\.0["']/i.test(rss)) errors.push('Pinterest feed must use RSS 2.0.');
  if (!rss.includes('xmlns:media="http://search.yahoo.com/mrss/"')) errors.push('Pinterest feed is missing the Media RSS namespace.');
  if (!rss.includes('xmlns:atom="http://www.w3.org/2005/Atom"')) errors.push('Pinterest feed is missing the Atom self-link namespace.');
  if (!/<atom:link\b[^>]*rel=["']self["'][^>]*\/>/i.test(rss)) errors.push('Pinterest feed is missing its RSS self link.');
  const rssItems = [...rss.matchAll(/<item>([\s\S]*?)<\/item>/gi)].map(match => match[1]);
  const approvedGuides = guides.filter(guide => guide.editorialStatus === 'Approved for publication');
  if (rssItems.length !== approvedGuides.length) errors.push('Pinterest RSS item count does not match approved guide count.');
  for (const item of rssItems) {
    if (!/<title>[^<]+<\/title>/i.test(item) || !/<link>https:\/\//i.test(item)) errors.push('Pinterest RSS item is missing a title or absolute HTTPS guide link.');
    if (!/<enclosure\b[^>]*type=["']image\/png["'][^>]*\/>/i.test(item)) errors.push('Pinterest RSS item is missing its PNG enclosure.');
    if (!/<media:content\b[^>]*medium=["']image["'][^>]*\/>/i.test(item)) errors.push('Pinterest RSS item is missing Media RSS image content.');
    if (!/<description>[^<]+<\/description>/i.test(item)) errors.push('Pinterest RSS item is missing its description.');
    if (/Research draft|requires human review/i.test(item)) errors.push('Unapproved research draft was included in Pinterest RSS.');
  }
}


for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const label = path.relative(root, file).split(path.sep).join('/');
  const metaTags = [...html.matchAll(/<meta\b[^>]*>/gi)].map(match => match[0]);
  const linkTags = [...html.matchAll(/<link\b[^>]*>/gi)].map(match => match[0]);
  const parts = label.split('/');
  const is404 = label === '404.html';
  const guide = parts.length === 3 && parts[0] === 'guides' && parts[2] === 'index.html' ? expectedGuideMap.get(parts[1]) : null;
  const routeErrors = [];
  const webpImageTags = [...html.matchAll(/<img\b[^>]*src=["'][^"']*\/images\/webp\/[^"']+["'][^>]*>/gi)].map(match => match[0]);
  for (const imageTag of webpImageTags) {
    if (attr(imageTag, 'width') !== '720' || attr(imageTag, 'height') !== '1080') {
      routeErrors.push('WebP cover HTML dimensions must match the generated 720×1080 asset');
    }
  }
  let amazonUsLinks = 0;
  let amazonUkLinks = 0;

  if (label === 'guides/index.html') {
    if (!/class=["']guide-filters["'][^>]*role=["']group["']/i.test(html)) routeErrors.push('guide filter controls must expose a labelled group role');
    if (!html.includes('/images/webp/')) routeErrors.push('guide index does not use optimized WebP card covers');
  }
  if (label === 'index.html' && guides.length > 0 && !html.includes('/images/webp/')) {
    routeErrors.push('homepage featured guides do not use optimized WebP covers');
  }

  const htmlTag = html.match(/<html\b[^>]*>/i)?.[0] ?? '';
  if (!attr(htmlTag, 'lang')) routeErrors.push('missing HTML language attribute');
  if (!/<title>[^<]{3,}<\/title>/i.test(html)) routeErrors.push('missing or empty title');

  const description = metaTags.find(tag => attr(tag, 'name').toLowerCase() === 'description');
  if (!is404 && (!description || !attr(description, 'content').trim())) warnings.push(label + ': meta description missing or empty.');

  if (!is404) {
    const robots = metaTags.find(tag => attr(tag, 'name').toLowerCase() === 'robots');
    if (!robots || !attr(robots, 'content').toLowerCase().includes('noindex')) routeErrors.push('preview page missing noindex');
    const canonical = linkTags.find(tag => hasToken(attr(tag, 'rel'), 'canonical'));
    if (!canonical || !attr(canonical, 'href').startsWith('https://')) routeErrors.push('missing HTTPS canonical URL');
  }

  const scriptTags = [...html.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/gi)].map(match => match[0]);
  const parsedJsonLd = [];
  for (const script of scriptTags) {
    const openEnd = script.indexOf('>') + 1;
    const openTag = script.slice(0, openEnd);
    if (!attr(openTag, 'type').toLowerCase().includes('application/ld+json')) continue;
    try { parsedJsonLd.push(JSON.parse(script.slice(openEnd, -9))); }
    catch { routeErrors.push('invalid JSON-LD syntax'); }
  }

  if (guide) {
    const coverPath = path.join(root, 'images', 'pinterest', guide.slug + '.png');
    if (!fs.existsSync(coverPath)) routeErrors.push('missing generated Pinterest PNG ' + coverPath);
    else {
      const png = fs.readFileSync(coverPath);
      if (png.length < 24 || png.toString('hex', 0, 8) !== '89504e470d0a1a0a' || png.readUInt32BE(16) !== 1000 || png.readUInt32BE(20) !== 1500) routeErrors.push('Pinterest image must be a valid 1000×1500 PNG');
    }
    if (!html.includes('/images/pinterest/' + guide.slug + '.png')) routeErrors.push('guide page does not reference its generated Pinterest cover in social metadata');
    const webpPath = path.join(root, 'images', 'webp', guide.slug + '.webp');
    if (!fs.existsSync(webpPath)) routeErrors.push('missing optimized WebP cover ' + webpPath);
    else {
      const webpMetadata = await sharp(webpPath).metadata();
      if (webpMetadata.format !== 'webp' || webpMetadata.width !== 720 || webpMetadata.height !== 1080) routeErrors.push('optimized guide cover must be a valid 720×1080 WebP');
    }
    if (!html.includes('/images/webp/' + guide.slug + '.webp')) routeErrors.push('guide page does not use its optimized WebP cover');
    if (!html.includes('og:image')) routeErrors.push('guide page missing Open Graph image metadata');
    if (!parsedJsonLd.length) routeErrors.push('guide page missing JSON-LD structured data');
    const graph = parsedJsonLd.flatMap(item => Array.isArray(item['@graph']) ? item['@graph'] : [item]);
    const article = graph.find(item => item['@type'] === 'Article');
    const itemLists = graph.filter(item => item['@type'] === 'ItemList');
    const itemList = itemLists[0];
    if (!article) routeErrors.push('guide JSON-LD missing Article type');
    if (itemLists.length !== 1) routeErrors.push('guide JSON-LD must expose exactly one ItemList node (avoid duplicate comparison lists)');
    if (!itemList) routeErrors.push('guide JSON-LD missing ItemList type');
    if (itemList) {
      const entries = itemList.itemListElement ?? [];
      if (entries.length !== guide.products.length) routeErrors.push('JSON-LD ItemList count does not match catalogue products');
      if (entries.some(entry => entry.item?.['@type'] !== 'Thing')) routeErrors.push('JSON-LD comparison entries must use descriptive Thing items, not Product rich-result entities');
      if (entries.some(entry => !entry.item?.name)) routeErrors.push('JSON-LD comparison item is missing its product name');
      if (graph.some(item => item['@type'] === 'Product')) routeErrors.push('Editorial comparison guide must not emit Product rich-result entities without verified offer/review data');
      if (article?.mainEntity?.['@id'] !== itemList['@id']) routeErrors.push('Article mainEntity must reference the single ItemList node by @id');
    }

    const amazonLinks = [];
    const anchors = [...html.matchAll(/<a\b[^>]*>/gi)].map(match => match[0]);
    for (const anchor of anchors) {
      const href = attr(anchor, 'href');
      if (!href) continue;
      let url;
      try { url = new URL(href.replace(/&amp;/g, '&').replace(/&#38;/g, '&')); } catch { continue; }
      const host = url.hostname.toLowerCase();
      if (host === 'www.amazon.com' || host === 'amazon.com') {
        amazonLinks.push({ market: 'us', url, rel: attr(anchor, 'rel') });
      } else if (host === 'www.amazon.co.uk' || host === 'amazon.co.uk') {
        amazonLinks.push({ market: 'uk', url, rel: attr(anchor, 'rel') });
      }
    }
    const usLinks = amazonLinks.filter(link => link.market === 'us');
    const ukLinks = amazonLinks.filter(link => link.market === 'uk');
    amazonUsLinks = usLinks.length;
    amazonUkLinks = ukLinks.length;
    if (usLinks.length !== guide.products.length * 2) routeErrors.push('expected early and lower Amazon US links (' + (guide.products.length * 2) + '); found ' + usLinks.length);
    if (ukLinks.length !== guide.products.length * 2) routeErrors.push('expected early and lower Amazon UK links (' + (guide.products.length * 2) + '); found ' + ukLinks.length);
    for (const link of usLinks) {
      if (link.url.searchParams.get('tag') !== 'smartpickh0bc-20') routeErrors.push('Amazon US tracking ID mismatch; expected smartpickh0bc-20, received ' + String(link.url.searchParams.get('tag')));
      if (!hasToken(link.rel, 'sponsored') || !hasToken(link.rel, 'nofollow')) routeErrors.push('Amazon US affiliate link missing sponsored/nofollow rel attributes');
      if (!(link.url.pathname.startsWith('/s') && link.url.searchParams.has('k')) && !/^\/dp\/[A-Z0-9]{10}$/.test(link.url.pathname)) routeErrors.push('Amazon US link is neither a search URL nor a verified ASIN URL');
    }
    for (const link of ukLinks) {
      if (link.url.searchParams.get('tag') !== 'smartpickhubu-21') routeErrors.push('Amazon UK tracking ID mismatch; expected smartpickhubu-21, received ' + String(link.url.searchParams.get('tag')));
      if (!hasToken(link.rel, 'sponsored') || !hasToken(link.rel, 'nofollow')) routeErrors.push('Amazon UK affiliate link missing sponsored/nofollow rel attributes');
      if (!(link.url.pathname.startsWith('/s') && link.url.searchParams.has('k')) && !/^\/dp\/[A-Z0-9]{10}$/.test(link.url.pathname)) routeErrors.push('Amazon UK link is neither a search URL nor a verified ASIN URL');
    }
    for (const product of guide.products) {
      if (!usLinks.some(link => matchesIdentifier(link.url, product.us_identifier))) routeErrors.push('Amazon US URL does not match catalogue identifier for ' + product.name);
      if (!ukLinks.some(link => matchesIdentifier(link.url, product.uk_identifier))) routeErrors.push('Amazon UK URL does not match catalogue identifier for ' + product.name);
      const productSectionId = 'id="product-' + product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '"';
      const productSectionStart = html.indexOf(productSectionId);
      const productSectionEnd = productSectionStart >= 0 ? html.indexOf('</section>', productSectionStart) : -1;
      const productSection = productSectionStart >= 0 && productSectionEnd >= 0 ? html.slice(productSectionStart, productSectionEnd) : '';
      if (!productSection) {
        routeErrors.push('missing product detail section for ' + product.name);
      } else {
        const earlyActionsStart = productSection.indexOf('class="early-product-actions"');
        const earlyActionsEnd = productSection.indexOf('class="product-verdict"', earlyActionsStart);
        const earlyActions = earlyActionsStart >= 0
          ? productSection.slice(earlyActionsStart, earlyActionsEnd >= 0 ? earlyActionsEnd : undefined)
          : '';
        if (!earlyActions.includes('Search Amazon US') || !earlyActions.includes('Search Amazon UK')) {
          routeErrors.push('early Amazon US/UK buttons are missing before the product verdict for ' + product.name);
        }
        const lowerActionsStart = productSection.indexOf('class="affiliate-context"');
        const lowerActions = lowerActionsStart >= 0 ? productSection.slice(lowerActionsStart) : '';
        if (!lowerActions.includes('Search Amazon US') || !lowerActions.includes('Search Amazon UK')) {
          routeErrors.push('original lower Amazon US/UK buttons are missing for ' + product.name);
        }
      }
      if (productSection && product.image?.reviewStatus === 'approved' && product.image?.url) {
        if (!productSection.includes(product.image.url)) routeErrors.push('verified product image is not rendered for ' + product.name);
        if (!productSection.includes(product.image.alt || product.name)) routeErrors.push('verified product image alt text is missing for ' + product.name);
      } else if (productSection.includes('Product photo under verification')) {
        routeErrors.push('unverified product-image placeholder should not displace the existing product information card for ' + product.name);
      }
    }
  }

  for (const match of html.matchAll(/href=["']([^"'#]+)["']/g)) {
    const href = match[1].trim();
    if (/^(https?:|mailto:|tel:|javascript:|data:)/i.test(href) || !href.startsWith('/')) continue;
    const target = path.join(root, href.split(/[?#]/)[0].slice(1));
    if (![target, target + '.html', path.join(target, 'index.html')].some(fs.existsSync)) {
      routeErrors.push('broken internal link ' + href);
    }
  }

  for (const error of routeErrors) errors.push(label + ': ' + error + '.');
  routeResults.push({
    route: '/' + label.replace(/index\.html$/, ''),
    isGuide: Boolean(guide), jsonLdBlocks: parsedJsonLd.length,
    amazonUsLinks, amazonUkLinks,
    status: routeErrors.length ? 'failed' : 'passed', errors: routeErrors
  });
}

writeReport(errors.length ? 'failed' : 'passed');
console.log('Smoke test scanned ' + htmlFiles.length + ' HTML pages, including ' + guides.length + ' catalogue guide routes.');
for (const warning of warnings) console.warn('WARNING: ' + warning);
if (errors.length) {
  console.error('Smoke test failed:');
  for (const error of errors) console.error('- ' + error);
  process.exit(1);
}
console.log('Smoke test passed: noindex, robots.txt, canonicals, internal links, required guide JSON-LD, and Amazon US/UK destinations.');
