import OpenAI from "openai";
const ai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function speak(text) {
  const r = await ai.audio.speech.create({
    model: "gpt-4o-mini-tts",
    voice: "alloy",
    input: text
  });
  return Buffer.from(await r.arrayBuffer());
}
