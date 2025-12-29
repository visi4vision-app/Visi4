import { db } from "../firebaseAdmin.mjs";
import OpenAI from "openai";
import { loadMemory, saveMessage } from "./memory.mjs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const SYSTEM_PROMPT = `
Tu es Visi4 AI.
Tu es le cerveau central de l'application Visi4.
Tu aides, tu analyses, tu recommandes, tu modères.
Tu te souviens des conversations.
`;

export async function streamChat(req, res) {
  const { uid, prompt } = req.body;

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const memory = await loadMemory(uid);

  await saveMessage(uid, "user", prompt);

  const stream = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    stream: true,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      ...memory,
      { role: "user", content: prompt }
    ]
  });

  let fullAnswer = "";

  for await (const chunk of stream) {
    const text = chunk.choices?.[0]?.delta?.content;
    if (text) {
      fullAnswer += text;
      res.write(`data: ${text}\n\n`);
    }
  }

  await saveMessage(uid, "assistant", fullAnswer);
  res.end();
}

import { summarizeMemory } from "./memory.mjs";

if (messageCount % 10 === 0) {
  await summarizeMemory(uid);
}


  const snap = await db.collection("memory").doc(uid).get();

const memory = await loadMemory(uid);

const messages = [
  {
    role: "system",
    content: `
Tu es Visi4, un assistant intelligent avec mémoire.
Voici ce que tu sais déjà sur l'utilisateur :
${memory || "Aucune information mémorisée pour le moment."}
`
  },
  { role: "user", content: prompt }
];

