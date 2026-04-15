export default async function handler(req, res) {
  try {
    if (!process.env.NOTION_API_KEY) {
      return res.status(500).json({ error: "NOTION_API_KEY is missing" });
    }

    const headers = {
      Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    };

    // ✅ CLIENTS DATABASE
    const clientsRes = await fetch(
      "https://api.notion.com/v1/databases/3218b4cee1dd41f9888556c8a3c3f9bd/query",
      {
        method: "POST",
        headers,
        body: JSON.stringify({})
      }
    );

    // ✅ DELIVERABLES DATABASE
    const deliverablesRes = await fetch(
      "https://api.notion.com/v1/databases/c87eda0aee8644ec91294110e0e2eb78/query",
      {
        method: "POST",
        headers,
        body: JSON.stringify({})
      }
    );

    const clientsData = await clientsRes.json();
    const deliverablesData = await deliverablesRes.json();

    return res.status(200).json({
      clients: clientsData.results,
      deliverables: deliverablesData.results
    });

  } catch (error) {
    return res.status(500).json({
      error: "Failed to fetch Notion data",
      details: error.message,
    });
  }
}