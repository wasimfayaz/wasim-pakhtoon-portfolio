// Post-build: emit a Vercel-friendly 404.html and a sitemap.xml.
import { promises as fs } from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');
const DOMAIN = 'https://wasimpakhtoon.com';

// Keep in sync with INCLUDED_ROUTES in vite.config.ts (excluding /404).
const PATHS = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/services', priority: '0.9', changefreq: 'monthly' },
  { loc: '/services/web-development', priority: '0.9', changefreq: 'monthly' },
  { loc: '/services/web-design', priority: '0.9', changefreq: 'monthly' },
  { loc: '/services/ecommerce-development', priority: '0.8', changefreq: 'monthly' },
  { loc: '/services/seo', priority: '0.8', changefreq: 'monthly' },
  { loc: '/services/website-redesign', priority: '0.8', changefreq: 'monthly' },
  { loc: '/web-development-kashmir', priority: '0.9', changefreq: 'monthly' },
  { loc: '/web-development-srinagar', priority: '0.9', changefreq: 'monthly' },
  { loc: '/work', priority: '0.7', changefreq: 'monthly' },
  { loc: '/about', priority: '0.6', changefreq: 'yearly' },
  { loc: '/blog', priority: '0.6', changefreq: 'weekly' },
  { loc: '/blog/website-cost-kashmir', priority: '0.6', changefreq: 'yearly' },
  { loc: '/blog/choose-web-developer-srinagar', priority: '0.6', changefreq: 'yearly' },
  { loc: '/contact', priority: '0.7', changefreq: 'yearly' },
];

async function writeSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = PATHS.map(
    (p) =>
      `  <url>\n    <loc>${DOMAIN}${p.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`
  ).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  await fs.writeFile(path.join(DIST, 'sitemap.xml'), xml, 'utf8');
  console.log('[postbuild] wrote sitemap.xml with', PATHS.length, 'urls');
}

async function write404() {
  // vite-react-ssg emits the /404 route as dist/404/index.html or dist/404.html.
  const candidates = [path.join(DIST, '404.html'), path.join(DIST, '404', 'index.html')];
  for (const c of candidates) {
    try {
      const html = await fs.readFile(c, 'utf8');
      await fs.writeFile(path.join(DIST, '404.html'), html, 'utf8');
      console.log('[postbuild] wrote 404.html from', path.relative(DIST, c));
      return;
    } catch {
      /* try next */
    }
  }
  console.warn('[postbuild] no 404 source found — skipped 404.html');
}

await writeSitemap();
await write404();
