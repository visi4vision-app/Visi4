export async function generateScript(topic: string) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.EXPO_PUBLIC_OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      messages: [{ role: "user", content: `Écris un script vidéo TikTok sur ${topic}` }]
    })
  });
  const data = await res.json();
  return data.choices[0].message.content;
}
