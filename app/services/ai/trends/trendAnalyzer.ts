export async function analyzeTrends(data: string[]) {
  const r = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.EXPO_PUBLIC_OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      messages: [
        { role: "system", content: "Analyse les tendances et prédis ce qui va exploser." },
        { role: "user", content: JSON.stringify(data) }
      ]
    })
  });
  const res = await r.json();
  return res.choices[0].message.content;
}
