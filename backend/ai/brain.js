import OpenAI from "openai";
import { getMemory, saveMemory } from "./memory/userMemory.js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function brain({ uid, text, lang = "fr" }) {
  const memory = getMemory(uid) || [];

  const messages = [
    {
      role: "system",
      content:
        "Tu es Visi4, l'intelligence centrale d'une plateforme sociale mondiale. Tu réponds de manière intelligente, naturelle et utile."
    },
    ...memory,
    { role: "user", content: text }
  ];

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages
  });

  const answer = completion.choices[0].message.content;

  saveMemory(uid, [
    ...memory,
    { role: "user", content: text },
    { role: "assistant", content: answer }
  ]);

  return {
    answer,
    memory: { size: memory.length + 1 }
  };
}
