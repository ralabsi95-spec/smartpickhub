import fs from 'node:fs';
import path from 'node:path';
const root = 'dist';
const errors = [];
const warnings = [];
if (!fs.existsSync(root)) { console.error('Build output dist does not exist.'); process.exit(1); }
const htmlFiles = [];
function walk(dir) { for (const entry of fs.readdirSync(dir, { withFileTypes: true })) { const full = path.join(dir, entry.name); if (entry.isDirectory()) walk(full); else if (entry.isFile() && entry.name.endsWith('.html')) htmlFiles.push(full); } }
walk(root);
if (!htmlFiles.length) errors.push('No HTML pages were generated.');
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const label = path.relative(root, file).split(path.sep).join('/');
  if (!/<html[^>]*lang=/i.test(html)) errors.push(label + ': missing HTML language attribute.');
  if (!/<title>[^<]{3,}<\/title>/i.test(html)) errors.push(label + ': missing or empty title.');
  if (!/<meta[^>]*name=description/i.test(html)) warnings.push(label + ': meta description missing.');
  if (!/<meta[^>]*name=robots[^>]*noindex/i.test(html)) errors.push(label + ': preview page missing noindex.');
  if (!/<link[^>]*rel=canonical[^>]*https:\/\//i.test(html)) errors.push(label + ': missing HTTPS canonical URL.');
  for (const match of html.matchAll(/href=[\"']([^\"'#]+)[\"']/g)) {
    const href = match[1].trim();
    if (/^(https?:|mailto:|tel:|javascript:|data:)/i.test(href) || !href.startsWith('/')) continue;
    const target = path.join(root, href.split(/[?#]/)[0].slice(1));
    if (![target, target + '.html', path.join(target, 'index.html')].some(fs.existsSync)) errors.push(label + ': broken internal link ' + href);
  }
  for (const match of html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)) { try { JSON.parse(match[1]); } catch { errors.push(label + ': invalid JSON-LD.'); } }
}
console.log('Smoke test scanned ' + htmlFiles.length + ' HTML pages.');
for (const warning of warnings) console.warn('WARNING: ' + warning);
if (errors.length) { console.error('Smoke test failed:'); for (const error of errors) console.error('- ' + error); process.exit(1); }
console.log('Smoke test passed: metadata, noindex, canonical, internal links and JSON-LD.');
