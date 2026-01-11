import brain from "./brain.js";
import moderate from "./moderation.js";
import secure from "./aiSecurity.js";
import auto from "./aiAuto.js";
import { getMemory, saveMemory } from "../memory/userMemory.js";

export default async function aiHub({ uid, text, lang }) {
  // 1️⃣ Sécurité
  const securityCheck = await secure({ uid, text });
  if (securityCheck.blocked) {
    return { answer: "Accès bloqué pour des raisons de sécurité." };
  }

  // 2️⃣ Modération
  const moderation = await moderate(text);
  if (moderation.danger) {
    return {
      answer: "⚠️ Contenu sensible détecté. Un avertissement a été émis.",
      alert: true
    };
  }

  // 3️⃣ Mémoire utilisateur
  const memory = await getMemory(uid);

  // 4️⃣ IA principale
  const aiResponse = await brain({
    text,
    lang,
    memory
  });

  // 5️⃣ Sauvegarde mémoire automatique
  if (aiResponse?.memory_update) {
    for (const [key, value] of Object.entries(aiResponse.memory_update)) {
      await saveMemory(uid, key, value);
    }
  }

  // 6️⃣ Triggers automatiques (like, share, watch…)
  await auto({ uid, text, aiResponse });

  return {
    answer: aiResponse.answer || aiResponse
  };
}
