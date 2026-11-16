import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const outputDirectory = 'public/images/pinterest';
const width = 1000;
const height = 1500;
const palettes = [
  { background: '#101b35', accent: '#74d4ff', secondary: '#7c8cff', glow: '#1c4670' },
  { background: '#172a2a', accent: '#8ce0c2', secondary: '#f4c77b', glow: '#245d54' },
  { background: '#271b38', accent: '#d5a6ff', secondary: '#ffb4a2', glow: '#593d76' },
  { background: '#20263b', accent: '#ffcf70', secondary: '#8dd8f0', glow: '#47547f' },
  { background: '#24243a', accent: '#a8e6a1', secondary: '#e6b6ff', glow: '#48527b' }
];
function hash(value) {
  let result = 0;
  for (const char of value) result = (result * 31 + char.charCodeAt(0)) >>> 0;
  return result;
}
function escapeXml(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;'
  })[char]);
}
function wrap(value, maxChars, maxLines) {
  const words = String(value ?? '').trim().split(/\s+/).filter(Boolean);
  const lines = [];
  let line = '';
  for (const word of words) {
    const next = line ? line + ' ' + word : word;
    if (next.length > maxChars && line) { lines.push(line); line = word; }
    else line = next;
  }
  if (line) lines.push(line);
  if (lines.length > maxLines) {
    const clipped = lines.slice(0, maxLines);
    clipped[maxLines - 1] = clipped[maxLines - 1].replace(/[.,;:!?]?$/, '') + '…';
    return clipped;
  }
  return lines;
}
function textLines(lines, x, y, size, lineHeight, color, weight = 600) {
  return lines.map((line, index) =>
    '<text x="' + x + '" y="' + (y + index * lineHeight) + '" fill="' + color +
    '" font-family="Arial, Helvetica, sans-serif" font-size="' + size +
    '" font-weight="' + weight + '">' + escapeXml(line) + '</text>'
  ).join('');
}
function makeSvg(guide, palette) {
  const titleLines = wrap(guide.title, 20, 6);
  const titleSize = titleLines.length >= 6 ? 54 : titleLines.length === 5 ? 61 : titleLines.length === 4 ? 68 : 76;
  const titleStart = 485, titleHeight = 82;
  const summaryLines = wrap(guide.summary, 42, 3);
  const summaryStart = Math.min(1080, titleStart + titleLines.length * titleHeight + 52);
  const title = textLines(titleLines, 82, titleStart, titleSize, titleHeight, '#ffffff', 800);
  const summary = textLines(summaryLines, 86, summaryStart, 34, 52, '#d9e4f4', 450);
  return [
    '<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1500" viewBox="0 0 1000 1500">',
    '<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + palette.background + '"/><stop offset="1" stop-color="#0a1224"/></linearGradient>',
    '<radialGradient id="glow"><stop offset="0" stop-color="' + palette.glow + '" stop-opacity=".9"/><stop offset="1" stop-color="' + palette.glow + '" stop-opacity="0"/></radialGradient>',
    '<linearGradient id="accent" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="' + palette.accent + '"/><stop offset="1" stop-color="' + palette.secondary + '"/></linearGradient></defs>',
    '<rect width="1000" height="1500" fill="url(#bg)"/><circle cx="920" cy="190" r="430" fill="url(#glow)"/><circle cx="70" cy="1210" r="360" fill="url(#glow)" opacity=".75"/>',
    '<g fill="none" stroke="#ffffff" stroke-opacity=".09"><path d="M-40 340 C240 80 520 80 1040 300" stroke-width="2"/><path d="M-70 390 C250 130 600 140 1080 360" stroke-width="2"/><path d="M-90 440 C260 190 640 200 1100 420" stroke-width="2"/><circle cx="850" cy="1180" r="245" stroke-width="2"/><circle cx="850" cy="1180" r="190" stroke-width="2"/><circle cx="850" cy="1180" r="135" stroke-width="2"/></g>',
    '<rect x="76" y="88" width="848" height="4" rx="2" fill="url(#accent)"/>',
    '<text x="82" y="160" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="800" letter-spacing="5">SMARTPICKHUB</text>',
    '<text x="84" y="216" fill="' + palette.accent + '" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700" letter-spacing="3">US + UK BUYING GUIDE</text>',
    '<rect x="82" y="285" width="840" height="58" rx="29" fill="#ffffff" fill-opacity=".10" stroke="#ffffff" stroke-opacity=".20"/>',
    '<text x="110" y="323" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" letter-spacing="1.2">' + escapeXml(String(guide.category ?? 'Buying guide').toUpperCase()) + '</text>',
    '<rect x="82" y="390" width="115" height="8" rx="4" fill="url(#accent)"/>',
    title,
    '<rect x="86" y="' + (summaryStart - 48) + '" width="5" height="' + Math.max(78, summaryLines.length * 52) + '" rx="2" fill="url(#accent)"/>',
    summary,
    '<g transform="translate(86 1255)"><rect width="828" height="112" rx="24" fill="#ffffff" fill-opacity=".08" stroke="#ffffff" stroke-opacity=".16"/>',
    '<text x="34" y="45" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700">COMPARE THE DETAILS</text>',
    '<text x="34" y="80" fill="#c6d5e8" font-family="Arial, Helvetica, sans-serif" font-size="18">Features  •  Compatibility  •  Buying considerations</text></g>',
    '<text x="84" y="1435" fill="#9fb2cc" font-family="Arial, Helvetica, sans-serif" font-size="16" letter-spacing="1.5">SMARTPICKHUB  ·  RESEARCH-LED, REGION-AWARE GUIDANCE</text>',
    '<title>' + escapeXml(guide.title) + '</title><desc>Original, programmatically generated SmartPickHub editorial cover. No product photograph or third-party artwork is used.</desc></svg>'
  ].join('');
}
const catalogue = JSON.parse(await fs.readFile('src/data/products.json', 'utf8'));
const guides = catalogue.guides ?? [];
if (!guides.length) throw new Error('No guides found; cannot generate Pinterest images.');
await fs.mkdir(outputDirectory, { recursive: true });
for (const guide of guides) {
  if (!guide.slug || !guide.title || !guide.summary) throw new Error('Guide is missing slug, title or summary.');
  const palette = palettes[hash(guide.category ?? guide.slug) % palettes.length];
  const destination = path.join(outputDirectory, guide.slug + '.png');
  await sharp(Buffer.from(makeSvg(guide, palette))).png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(destination);
  const metadata = await sharp(destination).metadata();
  if (metadata.width !== width || metadata.height !== height || metadata.format !== 'png') throw new Error('Invalid image: ' + destination);
}
console.log('Generated ' + guides.length + ' original Pinterest cover images (1000×1500) locally. No external image service, stock image, API key or paid asset was used.');
