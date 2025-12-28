import "dotenv/config";
import OpenAI from "openai";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY manquante dans l'environnement");
}

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function brain(prompt, context = "") {
  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: `
Tu es le cerveau central de l'application Visi4.
Décide intelligemment selon le contexte.

CONTEXTE:
${context}

DEMANDE:
${prompt}
`
  });

  return response.output_text;
}
