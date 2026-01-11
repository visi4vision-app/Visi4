import { isBanned } from "../premium/checkBan.js";
import express from "express";
import { moderateQuestion } from "../moderation/moderator.js";
import { saveMemory, getMemory } from "../memory/userMemory.js";
import { isPremium } from "../premium/checkPremium.js";

const router = express.Router();

router.post("/ask", async (req, res) => {
  const { question, user } = req.body;

  if (!question) {
    return res.status(400).json({ error: "QUESTION_MANQUANTE" });
  }

  // 🛡️ MODÉRATION
  const moderation = moderateQuestion(question);
  if (!moderation.allowed) {
    return res.status(403).json({
      ok: false,
      blocked: true,
      reason: moderation.reason
    });
  }

  // 🧠 MÉMOIRE (PREMIUM SEULEMENT)
  let memoryContext = [];
  if (isPremium(user)) {
    memoryContext = await getMemory(user.id);
  }

  // 🤖 IA (logique actuelle)
  const answer = `Visi4 a compris ta question : "${question}"`;

  if (isPremium(user)) {
    await saveMemory(user.id, question, answer);
  }

  res.json({
    ok: true,
    premium: isPremium(user),
    memory_used: memoryContext.length > 0,
    answer
  });
});

export default router;

router.get("/memory", async (req, res) => {
  const { user } = req.query;

  if (!user) {
    return res.status(400).json({ error: "USER_MANQUANT" });
  }

  const parsedUser = JSON.parse(user);

  if (!parsedUser.id) {
    return res.status(400).json({ error: "USER_ID_MANQUANT" });
  }

  if (parsedUser.plan !== "premium") {
    return res.status(403).json({ error: "PREMIUM_REQUIS" });
  }

  const memory = await getMemory(parsedUser.id, 20);

  res.json({
    ok: true,
    count: memory.length,
    memory
  });
});
