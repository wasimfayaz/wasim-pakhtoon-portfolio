// Generates the favicon set and the Open Graph share image into /public.
import sharp from 'sharp';
import { promises as fs } from 'node:fs';
import path from 'node:path';

const PUB = path.resolve('public');
const EMERALD = '#047857';
const EMERALD_DEEP = '#065f46';
const INK = '#0b1a14';
const MUTED = '#6b7a73';

/* A clean geometric "W" drawn as a vector path so it never depends on a
   font being installed in the render environment. viewBox 0 0 100 100. */
function wMark(color, stroke = 12) {
  return `<path d="M20 28 L34 72 L50 40 L66 72 L80 28"
    fill="none" stroke="${color}" stroke-width="${stroke}"
    stroke-linejoin="round" stroke-linecap="round"/>`;
}

/* Rounded-square app icon: emerald tile + white W */
function iconSvg(size) {
  const r = Math.round(size * 0.22);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" rx="${(r / size) * 100}" fill="${EMERALD}"/>
    ${wMark('#ffffff', 11)}
  </svg>`;
}

/* Favicon that reads well at tiny sizes: transparent bg, emerald W */
function faviconSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
    <rect x="2" y="2" width="96" height="96" rx="22" fill="${EMERALD}"/>
    ${wMark('#ffffff', 12)}
  </svg>`;
}

/* 1200x630 Open Graph / Twitter share card */
function ogSvg() {
  const dots = [];
  for (let y = 40; y < 630; y += 40) {
    for (let x = 40; x < 1200; x += 40) {
      dots.push(`<circle cx="${x}" cy="${y}" r="1.5" fill="${EMERALD}" opacity="0.06"/>`);
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#ffffff"/>
    ${dots.join('')}
    <circle cx="1140" cy="70" r="240" fill="${EMERALD}" opacity="0.06"/>
    <!-- logo mark -->
    <g transform="translate(90,86)">
      <rect width="96" height="96" rx="22" fill="${EMERALD}"/>
      <g transform="translate(-2,-2) scale(1)">
        <path d="M22 30 L34 68 L48 42 L62 68 L74 30" fill="none" stroke="#ffffff" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"/>
      </g>
    </g>
    <text x="204" y="150" font-family="Segoe UI, Arial, sans-serif" font-size="34" font-weight="700" fill="${INK}">Wasim Pakhtoon</text>
    <text x="204" y="190" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="600" fill="${EMERALD}" letter-spacing="1">WEB DEVELOPER &amp; DESIGNER</text>

    <text x="90" y="330" font-family="Segoe UI, Arial, sans-serif" font-size="76" font-weight="800" fill="${INK}">Web developer in</text>
    <text x="90" y="420" font-family="Segoe UI, Arial, sans-serif" font-size="76" font-weight="800" fill="${EMERALD_DEEP}">Srinagar &amp; Kashmir</text>

    <text x="90" y="492" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="500" fill="${MUTED}">Fast, SEO-friendly websites for hotels, travel &amp; business.</text>

    <rect x="90" y="536" width="1020" height="2" fill="${EMERALD}" opacity="0.15"/>
    <text x="90" y="586" font-family="Segoe UI, Arial, sans-serif" font-size="26" font-weight="700" fill="${EMERALD}">wasimpakhtoon.com</text>
    <text x="1110" y="586" text-anchor="end" font-family="Segoe UI, Arial, sans-serif" font-size="24" font-weight="500" fill="${MUTED}">Custom-coded &#183; Mobile-first &#183; Premium</text>
  </svg>`;
}

async function run() {
  // Favicons
  await fs.writeFile(path.join(PUB, 'favicon.svg'), faviconSvg(), 'utf8');
  await sharp(Buffer.from(faviconSvg())).resize(32, 32).png().toFile(path.join(PUB, 'favicon-32x32.png'));
  await sharp(Buffer.from(faviconSvg())).resize(16, 16).png().toFile(path.join(PUB, 'favicon-16x16.png'));
  await sharp(Buffer.from(iconSvg(180))).resize(180, 180).png().toFile(path.join(PUB, 'apple-touch-icon.png'));
  await sharp(Buffer.from(iconSvg(512))).resize(512, 512).png().toFile(path.join(PUB, 'icon-512.png'));
  await sharp(Buffer.from(iconSvg(192))).resize(192, 192).png().toFile(path.join(PUB, 'icon-192.png'));

  // OG image (JPG for broad social compatibility)
  await sharp(Buffer.from(ogSvg())).resize(1200, 630).jpeg({ quality: 90 }).toFile(path.join(PUB, 'og-image.jpg'));

  console.log('[gen-images] wrote favicon set + og-image.jpg into public/');
}

run().catch((e) => { console.error(e); process.exit(1); });
