import express from "express";
import aiHub from "../../ai/index.js";

const router = express.Router();

router.post("/chat", async (req, res) => {
  try {
    const { uid, question, lang } = req.body;

    const result = await aiHub({
      uid,
      text: question,
      lang
    });

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur IA centrale" });
  }
});

export default router;
