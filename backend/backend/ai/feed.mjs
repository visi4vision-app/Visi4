import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function rankFeed(uid, videos) {
  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content: `
Tu es un moteur de recommandation IA.
Réponds STRICTEMENT avec ce format JSON :

{
  "videos": [ ... ]
}
`
      },
      {
        role: "user",
        content: JSON.stringify({
          uid,
          instruction: "Classe les vidéos du plus pertinent au moins pertinent",
          videos
        })
      }
    ]
  });

  const json = JSON.parse(res.choices[0].message.content);
  return json.videos;
}
