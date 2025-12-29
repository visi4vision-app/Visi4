import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function rankVideos(userProfile, videos) {
  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "Classe ces vidéos selon les préférences utilisateur"
      },
      {
        role: "user",
        content: JSON.stringify({ userProfile, videos })
      }
    ]
  });

  return JSON.parse(res.choices[0].message.content);
}
