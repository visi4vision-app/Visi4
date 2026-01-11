import express from "express";
import brain from "../ai/brain.js";

const router = express.Router();

router.post("/chat", async (req, res) => {
  try {
    const { uid, text, lang } = req.body;

    if (!uid || !text) {
      return res.status(400).json({ error: "uid and text required" });
    }

    // ✅ APPEL CORRECT (OBJET)
    const result = await brain({ uid, text, lang });

    res.json(result);
  } catch (e) {
    console.error("AI ERROR:", e);
    res.status(500).json({ error: "AI failure" });
  }
});

export default router;
