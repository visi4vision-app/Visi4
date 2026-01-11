export async function moderateLiveContent(text: string) {
  const r = await fetch("https://api.openai.com/v1/moderations", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.EXPO_PUBLIC_OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "omni-moderation-latest",
      input: text
    })
  });
  return await r.json();
}
