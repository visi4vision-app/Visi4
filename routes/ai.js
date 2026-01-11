import express from "express";
import brain from "../ai/brain.js";
const r = express.Router();

r.post("/chat", async (req, res) => {
  const { uid, text } = req.body;
  if (!uid || !text) return res.sendStatus(400);
  res.json(await brain(uid, text));
});

export default r;
