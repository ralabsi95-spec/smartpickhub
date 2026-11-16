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

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(root, file).replaceAll(path.sep, '/');
  const label = rel || file;
  if (!/<html\\b[^>]*lang=["'][^"']+["']/i.test(html)) errors.push(`${label}: missing HTML language attribute.`);
  if (!/<title>[^<]{3,}<\\/title>/i.test(html)) errors.push(`${label}: missing or empty title.`);
  if (!/<meta\\s+name=["']description["']\\s+content=["'][^"']{20,}["']/i.test(html)) warnings.push(`${label}: meta description missing or unusually short.`);
  if (!/<meta\\s+name=["']robots["']\\s+content=["'][^"']*noindex/i.test(html)) errors.push(`${label}: preview page is missing its noindex directive.`);
  if (!/<link\\s+rel=["']canonical["']\\s+href=["']https:\\/\\//i.test(html)) errors.push(`${label}: missing absolute HTTPS canonical URL.`);

  for (const match of html.matchAll(/href=["']([^"'#]+)["']/g)) {
    const href = match[1].trim();
    if (/^(https?:|mailto:|tel:|javascript:|data:)/i.test(href)) continue;
    const pathname = href.split(/[?#]/)[0];
    if (!pathname.startsWith('/')) continue;
    const target = path.join(root, pathname.replace(/^\\//, ''));
    const candidates = [target, `${target}.html`, path.join(target, 'index.html')];
    if (!candidates.some((candidate) => fs.existsSync(candidate))) {
      errors.push(`${label}: broken internal link ${href}`);
    }
  }

  for (const match of html.matchAll(/<script\\s+type=["']application\\/ld\\+json["'][^>]*>([\\s\\S]*?)<\\/script>/gi)) {
    try { JSON.parse(match[1]); }
    catch { errors.push(`${label}: invalid JSON-LD block.`); }
  }
}
console.log(`Smoke test scanned ${htmlFiles.length} generated HTML pages.`);
for (const warning of warnings) console.warn(`WARNING: ${warning}`);
if (errors.length) {
  console.error('Smoke test failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log('Smoke test passed: page metadata, preview noindex, canonical URLs, internal links and JSON-LD syntax.');
