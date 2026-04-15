export default async function handler(req, res) {
  try {
    if (!process.env.NOTION_API_KEY) {
      return res.status(500).json({ error: "NOTION_API_KEY is missing" });
    }

    // Pass through the filter/sort body from the frontend if provided
    // This allows targeted queries (e.g. login for one user) making it MUCH faster.
    const body = req.body || {};

    const response = await fetch(
      "https://api.notion.com/v1/databases/3218b4cee1dd41f9888556c8a3c3f9bd/query",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    return res.status(response.status).json({
      status: response.status,
      data: data,
    });

  } catch (error) {
    return res.status(500).json({
      error: "Failed to fetch Notion data",
      details: error.message,
    });
  }
}