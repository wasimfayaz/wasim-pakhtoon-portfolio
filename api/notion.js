export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.notion.com/v1/databases/3438385d067d8087a335dc8d6999fcaf/query",
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
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Notion data" });
  }
}
