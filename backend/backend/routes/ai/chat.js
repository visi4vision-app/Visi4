import express from "express";
import { getMemory, saveMemory } from "../../ai/memory/userMemory.js";
import brain from "../../ai/brain.mjs";

const router = express.Router();

router.post("/chat", async (req, res) => {
  try {
    const { uid, question, lang } = req.body;

    // 1️⃣ Charger la mémoire utilisateur
    const memory = await getMemory(uid);

    // 2️⃣ Prompt IA avec mémoire persistante
    const prompt = `
Tu es l'assistant personnel de l'utilisateur.

Mémoire persistante connue :
${JSON.stringify(memory, null, 2)}

Langue: ${lang}
Question: ${question}

Si l'utilisateur donne une information personnelle importante
(préférence, habitude, goût, objectif),
retourne un JSON de ce type :

{
  "answer": "...",
  "memory_update": {
    "cle": "valeur"
  }
}

Sinon retourne seulement :
{
  "answer": "..."
}
`;

    const aiResponse = await brain(prompt);

    // 3️⃣ Sauvegarde automatique de la mémoire
    if (aiResponse.memory_update) {
      for (const [key, value] of Object.entries(aiResponse.memory_update)) {
        await saveMemory(uid, key, value);
      }
    }

    res.json({ answer: aiResponse.answer || aiResponse });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur IA" });
  }
});

export default router;
