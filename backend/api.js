import express from "express";
import { askAI } from "./ai.js";

const app = express();
app.use(express.json());

app.post("/ai", async (req, res) => {
  const { prompt } = req.body;
  const reply = await askAI(prompt);
  res.json({ reply });
});

app.listen(3000, () => console.log("🤖 IA API LIVE"));
