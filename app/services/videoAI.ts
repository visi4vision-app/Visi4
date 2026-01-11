export async function analyzeVideo(videoUrl: string) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.EXPO_PUBLIC_OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      messages: [
        { role: "system", content: "Analyse vidéo TikTok avancée : émotions, viralité, score, hashtags." },
        { role: "user", content: `Analyse cette vidéo : ${videoUrl}` }
      ]
    })
  });
  const json = await res.json();
  return json.choices[0].message.content;
}
