import fs from 'node:fs';
import path from 'node:path';

const root = 'dist';
const errors = [];
const warnings = [];
if (!fs.existsSync(root)) {
  console.error('Build output "dist" does not exist. Run npm run build first.');
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

const has = (html, pattern) => new RegExp(pattern, 'i').test(html);
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const label = path.relative(root, file).split(path.sep).join('/');
  if (!has(html, '<html[^>]*lang=["'][^"']+["']')) errors.push(label + ': missing HTML language attribute.');
  if (!has(html, '<title>[^<]{3,}</title>')) errors.push(label + ': missing or empty title.');
  if (!has(html, '<meta\\s+name=["']description["']\\s+content=["'][^"']{20,}["']')) warnings.push(label + ': meta description missing or unusually short.');
  if (!has(html, '<meta\\s+name=["']robots["']\\s+content=["'][^"']*noindex')) errors.push(label + ': preview page is missing its noindex directive.');
  if (!has(html, '<link\\s+rel=["']canonical["']\\s+href=["']https://')) errors.push(label + ': missing absolute HTTPS canonical URL.');

  const hrefs = html.matchAll(new RegExp('href="([^"#]+)"', 'g'));
  for (const match of hrefs) {
    const href = match[1].trim();
    if (/^(https?:|mailto:|tel:|javascript:|data:)/i.test(href)) continue;
    if (!href.startsWith('/')) continue;
    const pathname = href.split(/[?#]/)[0];
    const target = path.join(root, pathname.slice(1));
    const candidates = [target, target + '.html', path.join(target, 'index.html')];
    if (!candidates.some((candidate) => fs.existsSync(candidate))) errors.push(label + ': broken internal link ' + href);
  }

  const marker = '<script type="application/ld+json">';
  let remainder = html;
  while (remainder.includes(marker)) {
    remainder = remainder.slice(remainder.indexOf(marker) + marker.length);
    const end = remainder.indexOf('</script>');
    if (end < 0) { errors.push(label + ': unclosed JSON-LD script.'); break; }
    try { JSON.parse(remainder.slice(0, end)); }
    catch { errors.push(label + ': invalid JSON-LD block.'); }
    remainder = remainder.slice(end + 9);
  }
}
console.log('Smoke test scanned ' + htmlFiles.length + ' generated HTML pages.');
for (const warning of warnings) console.warn('WARNING: ' + warning);
if (errors.length) {
  console.error('Smoke test failed:');
  for (const error of errors) console.error('- ' + error);
  process.exit(1);
}
console.log('Smoke test passed: page metadata, preview noindex, canonical URLs, internal links and JSON-LD syntax.');
