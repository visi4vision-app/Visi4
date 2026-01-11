import fetch from "node-fetch";

export async function callIA(text, token) {
  const r = await fetch("http://127.0.0.1:3001/ai/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({ text })
  });
  return await r.json();
}
