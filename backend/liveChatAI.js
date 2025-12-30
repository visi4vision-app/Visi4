import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function chatReact(lang, context, tone = "friendly") {
  const response = await client.responses.create({
    model: "gpt-4.1",
    input: `Reply in ${lang}. Tone: ${tone}. Context: ${context}`
  });

  return response.output_text;
}
