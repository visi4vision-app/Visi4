export async function chat(req, res) {
  try {
    const { text } = req.body;

    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        messages: [{ role: "user", content: text }]
      })
    });

    const data = await r.json();

    if (!data.choices) {
      console.error("❌ OpenAI error:", data);
      return res.status(500).json({
        error: "OpenAI response invalid",
        raw: data
      });
    }

    res.json(data.choices[0].message);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}
