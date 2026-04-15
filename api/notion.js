export default async function handler(req, res) {
  try {
    if (!process.env.NOTION_API_KEY) {
      return res.status(500).json({ error: "NOTION_API_KEY is missing" });
    }

    const response = await fetch(
      "https://api.notion.com/v1/databases/3218b4cee1dd41f9888556c8a3c3f9bd/query",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({})
      }
    );

    const data = await response.json();

    // ✅ ONLY RETURN CLIENTS ARRAY
    return res.status(200).json(data.results);

  } catch (error) {
    return res.status(500).json({
      error: "Failed to fetch Notion data",
      details: error.message,
    });
  }
}