import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function aiCentral({ role, message }) {
  const r = await openai.responses.create({
    model: "gpt-4.1",
    input: [
      { role: "system", content: "Tu es l'IA centrale de Visi4. Tu ne parles pas directement aux utilisateurs. Tu délègues aux IA locales." },
      { role: role, content: message }
    ]
  });
  return r.output_text;
}
