import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// Canonical, indexable paths that get prerendered to static HTML.
// Keep in sync with SITEMAP_PATHS in src/routes.tsx.
const INCLUDED_ROUTES = [
  '/',
  '/about',
  '/contact',
  '/work',
  '/services',
  '/services/web-development',
  '/services/web-design',
  '/services/ecommerce-development',
  '/services/seo',
  '/services/website-redesign',
  '/web-development-kashmir',
  '/web-development-srinagar',
  '/blog',
  '/blog/website-cost-kashmir',
  '/blog/choose-web-developer-srinagar',
  '/404',
];

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(__dirname, '.') },
  },
  // Consumed by vite-react-ssg at build time
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    includedRoutes: () => INCLUDED_ROUTES,
  },
} as any);
