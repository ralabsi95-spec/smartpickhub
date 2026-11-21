import fs from 'node:fs';

const file = 'src/styles/accessibility-contrast.css';
const css = fs.readFileSync(file, 'utf8');
const errors = [];
const lightBackgrounds = ['#f2fbf8', '#f5f8fb', '#fff8f3', '#ffdecf', '#caefe6'];

function luminance(hex) {
  const rgb = [1, 3, 5].map((offset) => parseInt(hex.slice(offset, offset + 2), 16) / 255);
  const linear = rgb.map((channel) => channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4);
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
}
function contrastRatio(a, b) {
  const values = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (values[0] + 0.05) / (values[1] + 0.05);
}
function ruleFor(selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');
  const matches = [...css.matchAll(new RegExp(escaped + String.raw\`\\s*\\{([^}]*)\\}\`, 'g'))];
  return matches.at(-1)?.[1] ?? '';
}
function gradientStops(selector) {
  const rule = ruleFor(selector);
  const gradient = rule.match(/background\\s*:\\s*linear-gradient\\([^;]+\\)/i)?.[0] ?? '';
  return [...gradient.matchAll(/#[0-9a-f]{6}/gi)].map((match) => match[0].toLowerCase());
}
function check(selector, backgrounds, minimum, label) {
  const stops = gradientStops(selector);
  if (stops.length < 2) {
    errors.push(selector + ': expected a linear gradient with at least two explicit hex colour stops.');
    return;
  }
  for (const foreground of stops) {
    for (const background of backgrounds) {
      const ratio = contrastRatio(foreground, background);
      if (ratio + 1e-9 < minimum) errors.push(selector + ': ' + foreground + ' against ' + background + ' is ' + ratio.toFixed(2) + ':1; minimum ' + minimum + ':1 (' + label + ').');
    }
  }
  console.log(selector + ': ' + stops.length + ' stops checked; minimum ratio ' + Math.min(...stops.flatMap((foreground) => backgrounds.map((background) => contrastRatio(foreground, background)))).toFixed(2) + ':1.');
}

check('.button', ['#ffffff'], 4.5, 'normal button text');
check('.button.secondary', ['#ffffff'], 4.5, 'normal secondary-button text');
check('.brand::before', ['#ffffff'], 4.5, 'brand monogram');
check('.panel-mark', ['#ffffff'], 4.5, 'panel monogram');
check('.home-hero h1 span', lightBackgrounds, 4.5, 'large hero heading text over sampled light gradient backgrounds');

if (errors.length) {
  console.error('Gradient contrast check failed:');
  for (const error of errors) console.error('- ' + error);
  process.exit(1);
}
console.log('Gradient contrast check passed: all audited text/background combinations meet WCAG AA contrast thresholds.');
