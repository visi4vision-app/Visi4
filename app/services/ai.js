const API_URL = process.env.EXPO_PUBLIC_API_URL;

export async function askAI(text, token) {
  const res = await fetch(`${API_URL}/api/ai/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify({
      uid: "cli-test",
      text,
      lang: "fr"
    })
  });

  if (!res.ok) throw new Error("AI_ERROR");
  return res.json();
}
