import OpenAI from "openai";
import fs from "fs";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function speechToText(audioFile) {
  const result = await openai.audio.transcriptions.create({
    file: fs.createReadStream(audioFile),
    model: "gpt-4o-transcribe"
  });
  return result.text;
}
