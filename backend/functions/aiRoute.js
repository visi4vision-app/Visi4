import express from "express";
import { callIA } from "./aiProxy.js";

const router = express.Router();

router.post("/chat", async (req, res) => {
  const { text } = req.body;
  const token = req.headers.authorization?.replace("Bearer ", "");
  const r = await callIA(text, token);
  res.json(r);
});

export default router;
