export default async function handler(req, res) {
  try {
    // ✅ Check if API key exists
    if (!process.env.NOTION_API_KEY) {
      return res.status(500).json({ error: "NOTION_API_KEY is missing" });
    }

    // ✅ Fetch ALL clients from your Clients database
    const response = await fetch(
      "https://api.notion.com/v1/databases/3218b4cee1dd41f9888556c8a3c3f9bd/query",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}) // no filters for now (simple & stable)
      }
    );

    const data = await response.json();

    // ✅ Return ONLY the results array (simpler for frontend)
    return res.status(200).json(data.results);

  } catch (error) {
    return res.status(500).json({
      error: "Failed to fetch Notion data",
      details: error.message,
    });
  }
}