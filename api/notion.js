export default async function handler(req, res) {
  try {
    // 🧪 DEBUG: check if env variable is working
    if (!process.env.NOTION_API_KEY) {
      return res.status(500).json({
        error: "NOTION_API_KEY is missing",
      });
    }

    const response = await fetch(
      "https://api.notion.com/v1/databases/3438385d067d8087a335dc8d6999fcaf/query",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );

    const data = await response.json();

    // 🧪 DEBUG: return full response
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