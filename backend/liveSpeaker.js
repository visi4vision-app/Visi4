import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function liveSpeak(lang, message) {
  return await client.responses.create({
    model: "gpt-4.1",
    input: `Speak ONLY in ${lang}. Message: ${message}`
  });
}
