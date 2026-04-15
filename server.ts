/**
 * Production server — serves the Vite build + secure Notion API proxy.
 * Run with: npx tsx server.ts
 * Or add to package.json: "start": "npx tsx server.ts"
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load .env.local first, then .env
dotenv.config({ path: '.env.local' });
dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const NOTION_DB_ID = '3438385d067d8087a335dc8d6999fcaf';

const app = express();
app.use(express.json());

// ─── POST /api/notion ─────────────────────────────────────────────────────────
app.post('/api/notion', async (req, res) => {
  const apiKey = process.env.NOTION_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'NOTION_API_KEY not configured' });
  }
  try {
    const response = await fetch(
      `https://api.notion.com/v1/databases/${NOTION_DB_ID}/query`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body || {}),
      }
    );
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    console.error('[notion-api]', err);
    res.status(500).json({ error: 'Failed to reach Notion API' });
  }
});

// ─── GET /api/health ──────────────────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, notion_configured: !!process.env.NOTION_API_KEY });
});

// ─── Serve Vite build ─────────────────────────────────────────────────────────
const distDir = path.join(__dirname, 'dist');
app.use(express.static(distDir));
app.get('*', (_req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Notion configured: ${!!process.env.NOTION_API_KEY}`);
});
