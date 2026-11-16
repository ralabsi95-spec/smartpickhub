import fs from 'node:fs';
import path from 'node:path';

const root = 'dist';
const errors = [];
const warnings = [];
if (!fs.existsSync(root)) {
  console.error('Build output dist does not exist.');
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

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const label = path.relative(root, file).split(path.sep).join('/');
  const metaTags = [...html.matchAll(/<meta\b[^>]*>/gi)].map(match => match[0].toLowerCase());
  const linkTags = [...html.matchAll(/<link\b[^>]*>/gi)].map(match => match[0].toLowerCase());

  if (!/<html\b[^>]*lang=/i.test(html)) errors.push(label + ': missing HTML language attribute.');
  if (!/<title>[^<]{3,}<\/title>/i.test(html)) errors.push(label + ': missing or empty title.');
  if (!metaTags.some(tag => /name=["']description["']/.test(tag))) warnings.push(label + ': meta description missing.');

  // The standalone 404 page is intentionally excluded from canonical checks.
  if (label !== '404.html') {
    if (!metaTags.some(tag => /name=["']robots["']/.test(tag) && /noindex/.test(tag))) {
      errors.push(label + ': preview page missing noindex.');
    }
    if (!linkTags.some(tag => /rel=["']canonical["']/.test(tag) && /href=["']https:\/\//.test(tag))) {
      errors.push(label + ': missing HTTPS canonical URL.');
    }
  }

  for (const match of html.matchAll(/href=["']([^"'#]+)["']/g)) {
    const href = match[1].trim();
    if (/^(https?:|mailto:|tel:|javascript:|data:)/i.test(href) || !href.startsWith('/')) continue;
    const target = path.join(root, href.split(/[?#]/)[0].slice(1));
    if (![target, target + '.html', path.join(target, 'index.html')].some(fs.existsSync)) {
      errors.push(label + ': broken internal link ' + href);
    }
  }

  for (const match of html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(match[1]); }
    catch { errors.push(label + ': invalid JSON-LD.'); }
  }
}

console.log('Smoke test scanned ' + htmlFiles.length + ' HTML pages.');
for (const warning of warnings) console.warn('WARNING: ' + warning);
if (errors.length) {
  console.error('Smoke test failed:');
  for (const error of errors) console.error('- ' + error);
  process.exit(1);
}
console.log('Smoke test passed: metadata, noindex, canonical, internal links and JSON-LD.');
