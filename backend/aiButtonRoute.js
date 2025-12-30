import express from "express";
import { canAskAI } from "./aiQuota.js";
import { aiReply } from "./aiChatCore.js";

const router = express.Router();

router.post("/ai/chat", async (req, res) => {
  const { uid, lang, question } = req.body;

  const quota = canAskAI(uid);

  if (!quota.allowed) {
    return res.json({
      status: "PAYWALL",
      message: "100 questions gratuites utilisées.",
      offer: {
        price: 2900,
        currency: "VisiCoin",
        plan: "IA Premium Annuel",
        benefits: [
          "Questions IA illimitées",
          "Aide écriture & vidéos",
          "Accès IA créateur",
          "Priorité nouveautés"
        ]
      }
    });
  }

  const answer = await aiReply(lang, question);

  res.json({
    status: quota.warning ? "WARNING" : "OK",
    answer,
    remaining: quota.remaining,
    warningMessage: quota.warning
      ? "Plus que quelques questions gratuites. Passe en IA Premium pour continuer sans limite."
      : undefined
  });
});

export default router;
