import express from "express";
import { brainWithMemory } from "../memory/brainWithMemory.js";

const router = express.Router();

router.post("/ai/chat", async (req, res) => {
  try {
    const result = await brainWithMemory(req.body);
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: "IA error", detail: e.message });
  }
});

export default router;
