import express from "express";
import cors from "cors";

import { aiLocale } from "./aiLocales.js";
import { getMemory, saveMemory } from "./memory.js";
import { logDecision } from "./logger.js";
import { startLive, stopLive } from "./liveModeration.js";

const app = express();
app.use(cors());
app.use(express.json());
import aiQuotaRoute from './aiQuotaRoute.js';
app.use(aiQuotaRoute);
import aiButtonRoute from './aiButtonRoute.js';
app.use(aiButtonRoute);

app.get("/health", (_, res) => res.json({ ok: true }));

app.post("/moderate", async (req, res) => {
  const { uid, country, language, content } = req.body;

  const result = await aiLocale({
    lang: language.toUpperCase(),
    country,
    content
  });

  saveMemory(uid, { lastDecision: result.decision });
  logDecision({ uid, country, language, content, ...result });

  res.json({ uid, country, language, ...result });
});

app.post("/live/start", (req, res) => {
  const { liveId, language, country } = req.body;

  startLive(liveId, async () => {
    console.log("🎥 analyse live", liveId);
  });

  console.log("🔴 LIVE START", liveId, language);
  res.json({ ok: true });
});

app.post("/live/stop", (req, res) => {
  stopLive(req.body.liveId);
  res.json({ ok: true });
});

app.get("/admin/logs", (_, res) => {
  res.type("text").send(require("fs").readFileSync("moderation.log"));
});

app.listen(3000, () => console.log("🚀 Visi4 IA READY"));
