import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function adaptContent({ text, targetLang, country }) {
  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `Traduis et adapte culturellement ce contenu pour ${country}. Respecte les lois et coutumes locales.`
      },
      { role: "user", content: text }
    ]
  });

  return res.choices[0].message.content;
}
