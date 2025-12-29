import { db } from "../firebaseAdmin.mjs";

export async function loadMemory(uid) {
  const snap = await db.collection("memory").doc(uid).get();
  if (!snap.exists) return "";
  return snap.data().summary || "";
}

export async function saveMessage(uid, role, content) {
  await db.collection("messages").add({
    uid,
    role,
    content,
    createdAt: Date.now()
  });
}

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function summarizeMemory(uid) {
  const snap = await db.collection("messages")
    .where("uid", "==", uid)
    .orderBy("createdAt", "desc")
    .limit(20)
    .get();

  if (snap.empty) return;

  const text = snap.docs
    .reverse()
    .map(d => d.data().role + ": " + d.data().content)
    .join("\n");

  const res = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "system",
        content: "Résume de manière concise ce que tu sais de cet utilisateur."
      },
      { role: "user", content: text }
    ]
  });

  const summary = res.choices[0].message.content;

  await db.collection("memory").doc(uid).set({
    summary,
    updatedAt: Date.now()
  });
}
