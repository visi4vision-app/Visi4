import OpenAI from "openai";
import { publishLiveEvent } from "../realtime/publish.js";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function mediateConflict({ liveId, text, lang }) {
  const supported = ["fr", "en", "ar"];
  if (!supported.includes(lang)) {
    // langue locale non comprise => commentaire neutre
    publishLiveEvent(liveId, {
      type: "TEXT_COMMENT",
      message: "⚖️ Merci de rester respectueux — modération automatique."
    });
    return;
  }

  const prompt = `
Tu es Visi4, une IA médiatrice calme, polie et bienveillante.
Tu dois apaiser les tensions dans un chat ou un live.
Ne prends pas parti, ne fais aucune morale.
Langue: ${lang}.
Message à calmer: "${text}"
Réponds avec un court message (1 phrase) pour apaiser.`;

  const result = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7
  });

  const message = result.choices[0].message.content.trim();

  publishLiveEvent(liveId, {
    type: "MEDIATION",
    message
  });
}
