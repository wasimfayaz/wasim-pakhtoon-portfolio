import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv, type Plugin } from 'vite';

const NOTION_DB_ID = '3438385d067d8087a335dc8d6999fcaf';

/** Secure Notion API middleware — runs in Node.js only, never bundled into the client */
function notionApiPlugin(notionApiKey: string): Plugin {
  return {
    name: 'notion-api',
    configureServer(server) {
      // POST /api/notion — proxies to Notion, keeping the API key server-side
      server.middlewares.use('/api/notion', (req, res, next) => {
        if (req.method !== 'POST') return next();
        if (!notionApiKey) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'NOTION_API_KEY not configured in .env.local' }));
          return;
        }
        let body = '';
        req.on('data', (chunk: Buffer) => { body += chunk.toString(); });
        req.on('end', async () => {
          try {
            const filterBody = body ? JSON.parse(body) : {};
            const response = await fetch(
              `https://api.notion.com/v1/databases/${NOTION_DB_ID}/query`,
              {
                method: 'POST',
                headers: {
                  Authorization: `Bearer ${notionApiKey}`,
                  'Notion-Version': '2022-06-28',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(filterBody),
              }
            );
            const data = await response.json();
            res.writeHead(response.status, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
          } catch (err) {
            console.error('[notion-api]', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Failed to reach Notion API' }));
          }
        });
      });

      // GET /api/health — check configuration status
      server.middlewares.use('/api/health', (_req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, notion_configured: !!notionApiKey }));
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), notionApiPlugin(env.NOTION_API_KEY || '')],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
