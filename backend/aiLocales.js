import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const LANGS = {
  FR: "français",
  EN: "anglais",
  AR: "arabe"
};

export async function aiLocale({ lang, country, content }) {
  if (!LANGS[lang]) {
    return { decision: "BLOCK", reason: "Langue non supportée" };
  }

  const r = await openai.responses.create({
    model: "gpt-4.1",
    input: [
      {
        role: "system",
        content: `
Tu es une IA de modération pour ${country}.
Tu parles UNIQUEMENT ${LANGS[lang]}.
Respecte la culture et les lois locales.
Réponds strictement en JSON :
{ "decision": "ALLOW|WARNING|BLOCK", "reason": "texte court" }
`
      },
      { role: "user", content }
    ]
  });

  return JSON.parse(r.output_text);
}
