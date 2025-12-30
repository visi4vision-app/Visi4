import OpenAI from "openai";
import fs from "fs";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function speakLive(text, lang="fr") {
  const voiceMap = {
    fr: "alloy",
    en: "verse",
    ar: "nash"
  };

  const speech = await openai.audio.speech.create({
    model: "gpt-4o-mini-tts",
    voice: voiceMap[lang] || "alloy",
    input: text
  });

  const buffer = Buffer.from(await speech.arrayBuffer());
  fs.writeFileSync("live_voice.wav", buffer);

  console.log("🎙️ IA VOICE GENERATED");
}
