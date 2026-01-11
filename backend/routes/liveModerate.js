import express from "express";
import { speak } from "../ai/voiceTTS.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { text, lang = "fr", liveId } = req.body;

    if (!text) {
      return res.json({ ok: true });
    }

    const conflict = /insulte|idiot|stupide|sale|fuck|merde/i.test(text);

    if (conflict && ["fr", "en", "ar"].includes(lang)) {
      const audio = await speak(
        "Merci de rester respectueux sur ce live.",
        lang
      );

      return res.json({
        action: "VOICE_WARNING",
        audio
      });
    }

    return res.json({ ok: true });

  } catch (e) {
    console.error("LIVE MODERATION ERROR", e);
    return res.status(500).json({ error: "moderation_failed" });
  }
});

export default router;
