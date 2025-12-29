import OpenAI from "openai";
import { db } from "../firebaseAdmin.mjs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function rankFeed(uid, videos) {
  const userSnap = await db.collection("memory").doc(uid).get();
  const userContext = userSnap.exists ? userSnap.data().summary : "";

  const prompt = `
Tu es un algorithme de recommandation.
Voici le profil utilisateur :
${userContext}

Voici des vidéos (JSON).
Classe-les par pertinence décroissante.
Retourne uniquement un tableau JSON trié.
`;

  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: prompt },
      { role: "user", content: JSON.stringify(videos) }
    ]
  });

  return (res.choices[0].message.content);
}
