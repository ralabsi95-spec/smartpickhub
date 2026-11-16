import fs from 'node:fs';
import path from 'node:path';

const root = 'dist';
const errors = [];
const warnings = [];
const routeResults = [];
const catalogue = JSON.parse(fs.readFileSync('src/data/products.json', 'utf8'));
const guides = catalogue.guides ?? [];
const expectedGuideMap = new Map(guides.map(guide => [guide.slug, guide]));

function attr(tag, name) {
  const pattern = new RegExp('\\\\b' + name + '\\\\s*=\\\\s*(?:"([^"]*)"|\\\\x27([^\\\\x27]*)\\\\x27|([^\\\\s>]+))', 'i');
  const match = tag.match(pattern);
  return match?.[1] ?? match?.[2] ?? match?.[3] ?? '';
}
function hasToken(value, token) {
  return value.toLowerCase().split(/\\s+/).includes(token);
}
function writeReport(status) {
  fs.mkdirSync('test-reports', { recursive: true });
  fs.writeFileSync('test-reports/smoke-test.json', JSON.stringify({
    status,
    generatedAt: new Date().toISOString(),
    scannedHtmlPages: htmlFiles.length,
    guideCount: guides.length,
    routes: routeResults,
    robotsTxtDisallowAll: robotsTxtDisallowAll,
    errors,
    warnings
  }, null, 2));
}

if (!fs.existsSync(root)) {
  errors.push('Build output dist does not exist.');
  const htmlFiles = [];
  const robotsTxtDisallowAll = false;
  writeReport('failed');
  console.error(errors.join('\\n'));
  process.exit(1);
}

const htmlFiles = [];
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
const robotsTxtDisallowAll = /User-agent:\\s*\\*/i.test(robotsText) && /Disallow:\\s*\\//i.test(robotsText);
if (!robotsTxtDisallowAll) errors.push('Preview robots.txt must disallow crawling (User-agent: * / Disallow: /).');

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const label = path.relative(root, file).split(path.sep).join('/');
  const metaTags = [...html.matchAll(/<meta\\b[^>]*>/gi)].map(match => match[0]);
  const linkTags = [...html.matchAll(/<link\\b[^>]*>/gi)].map(match => match[0]);
  const is404 = label === '404.html';
  const guideMatch = label.match(/^guides\\/([^/]+)\\/index\\.html$/);
  const guide = guideMatch ? expectedGuideMap.get(guideMatch[1]) : null;
  const routeErrors = [];

  if (!/<html\\b[^>]*lang=/i.test(html)) routeErrors.push('missing HTML language attribute');
  if (!/<title>[^<]{3,}<\\/title>/i.test(html)) routeErrors.push('missing or empty title');

  const description = metaTags.find(tag => attr(tag, 'name').toLowerCase() === 'description');
  if (!is404 && (!description || !attr(description, 'content').trim())) warnings.push(label + ': meta description missing or empty.');

  if (!is404) {
    const robots = metaTags.find(tag => attr(tag, 'name').toLowerCase() === 'robots');
    if (!robots || !attr(robots, 'content').toLowerCase().includes('noindex')) routeErrors.push('preview page missing noindex');
    const canonical = linkTags.find(tag => hasToken(attr(tag, 'rel'), 'canonical'));
    if (!canonical || !/^https:\\/\\//i.test(attr(canonical, 'href'))) routeErrors.push('missing HTTPS canonical URL');
  }

  const jsonLdScripts = [...html.matchAll(/<script\\b[^>]*>([\\s\\S]*?)<\\/script>/gi)]
    .filter(match => attr(match[0].split('>')[0] + '>', 'type').toLowerCase().includes('application/ld+json'));
  const parsedJsonLd = [];
  for (const match of jsonLdScripts) {
    try { parsedJsonLd.push(JSON.parse(match[1])); }
    catch { routeErrors.push('invalid JSON-LD syntax'); }
  }
  if (guide) {
    if (!parsedJsonLd.length) routeErrors.push('guide page missing JSON-LD structured data');
    const graph = parsedJsonLd.flatMap(item => Array.isArray(item['@graph']) ? item['@graph'] : [item]);
    const article = graph.find(item => item['@type'] === 'Article');
    const itemList = graph.find(item => item['@type'] === 'ItemList');
    if (!article) routeErrors.push('guide JSON-LD missing Article type');
    if (!itemList) routeErrors.push('guide JSON-LD missing ItemList type');
    if (itemList) {
      const entries = itemList.itemListElement ?? [];
      if (entries.length !== guide.products.length) routeErrors.push('JSON-LD ItemList count does not match catalogue products');
      if (entries.some(entry => entry.item?.['@type'] !== 'Product')) routeErrors.push('JSON-LD ItemList contains an entry without Product type');
    }

    const amazonLinks = [];
    const anchors = [...html.matchAll(/<a\\b[^>]*>/gi)].map(match => match[0]);
    for (const anchor of anchors) {
      const href = attr(anchor, 'href');
      if (!href) continue;
      let url;
      try { url = new URL(href); } catch { continue; }
      const host = url.hostname.toLowerCase();
      if (host === 'www.amazon.com' || host === 'amazon.com' || host.endsWith('.amazon.com')) {
        amazonLinks.push({ market: 'us', url, rel: attr(anchor, 'rel') });
      } else if (host === 'www.amazon.co.uk' || host === 'amazon.co.uk' || host.endsWith('.amazon.co.uk')) {
        amazonLinks.push({ market: 'uk', url, rel: attr(anchor, 'rel') });
      }
    }
    const usLinks = amazonLinks.filter(link => link.market === 'us');
    const ukLinks = amazonLinks.filter(link => link.market === 'uk');
    if (usLinks.length !== guide.products.length) routeErrors.push('expected ' + guide.products.length + ' Amazon US links; found ' + usLinks.length);
    if (ukLinks.length !== guide.products.length) routeErrors.push('expected ' + guide.products.length + ' Amazon UK links; found ' + ukLinks.length);
    for (const link of usLinks) {
      if (link.url.searchParams.get('tag') !== 'smartpickh0bc-20') routeErrors.push('Amazon US tracking ID mismatch');
      if (!hasToken(link.rel, 'sponsored') || !hasToken(link.rel, 'nofollow')) routeErrors.push('Amazon US affiliate link missing sponsored/nofollow rel attributes');
      if (!(link.url.pathname.startsWith('/s') && link.url.searchParams.has('k')) && !/^\\/dp\\/[A-Z0-9]{10}$/.test(link.url.pathname)) routeErrors.push('Amazon US link is neither a search URL nor a verified ASIN URL');
    }
    for (const link of ukLinks) {
      if (link.url.searchParams.get('tag') !== 'smartpickhubu-21') routeErrors.push('Amazon UK tracking ID mismatch');
      if (!hasToken(link.rel, 'sponsored') || !hasToken(link.rel, 'nofollow')) routeErrors.push('Amazon UK affiliate link missing sponsored/nofollow rel attributes');
      if (!(link.url.pathname.startsWith('/s') && link.url.searchParams.has('k')) && !/^\\/dp\\/[A-Z0-9]{10}$/.test(link.url.pathname)) routeErrors.push('Amazon UK link is neither a search URL nor a verified ASIN URL');
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
  routeResults.push({ route: '/' + label.replace(/index\\.html$/, ''), isGuide: Boolean(guide), jsonLdBlocks: parsedJsonLd.length, amazonUsLinks: guide ? guide.products.length : undefined, amazonUkLinks: guide ? guide.products.length : undefined, status: routeErrors.length ? 'failed' : 'passed', errors: routeErrors });
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
