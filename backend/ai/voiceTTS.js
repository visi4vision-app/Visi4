import OpenAI from "openai";
import fs from "fs";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function speak(text, lang="fr") {
  const r = await openai.audio.speech.create({
    model: "gpt-4o-mini-tts",
    voice: lang === "ar" ? "arabic" : "alloy",
    input: text
  });

  const file = `./tmp/voice_${Date.now()}.mp3`;
  fs.writeFileSync(file, Buffer.from(await r.arrayBuffer()));
  return file;
}
