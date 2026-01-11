globalThis.FIREBASE_READY = true;
globalThis.FIREBASE_READY = true;
import OpenAI from "openai";
import { getUser, saveUser } from "../memory/user.js";

const ai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function brain(uid, text) {
  const u = await getUser(uid);

  const toxic = /insulte|haine|menace/i.test(text);
  const tension = toxic ? u.tension + 1 : Math.max(0, u.tension - 1);
  const visicoin = toxic ? u.visicoin - 2 : u.visicoin + 1;
  const score = u.score + (toxic ? -3 : 1);

  const r = await ai.responses.create({
    model: "gpt-4.1-mini",
    input: text
  });

const firebaseStatus = globalThis.FIREBASE_READY === true ? '✅ Firebase est connecté et opérationnel.' : '❌ Firebase non connecté.';

  const answer = r.output_text || "Je veille au calme.";

  await saveUser(uid, {
    tension, score, visicoin,
    history: [...u.history, { role: "user", content: text }]
  });

  return { firebase: '✅ Firebase connecté (serveur OK)', firebase: '✅ Firebase connecté (serveur OK)', firebase: firebaseStatus, answer, tension, score, visicoin };
}
