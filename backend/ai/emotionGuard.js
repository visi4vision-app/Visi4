import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function detectConflict(text) {
  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "Analyse le texte et détecte s'il contient colère, haine, conflit ou agressivité. Répond seulement par LOW, MEDIUM ou HIGH."
      },
      { role: "user", content: text }
    ]
  });

  const level = res.choices[0].message.content.trim();
  return level;
}
