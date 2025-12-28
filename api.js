import helmet from "helmet";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";

import { brainWithMemory } from "./ai/memory/brainWithMemory.js";
import { brainGlobal } from "./ai/brainGlobal.js";
import { notifyIntl } from "./ai/notificationsIntl.js";
import { monetizeIntl } from "./ai/monetizationIntl.js";
import { rankFeed } from "./ai/algo/rankFeed.js";

dotenv.config();

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

/* FEED */
app.post("/feed", (req, res) => {
  const { user, posts } = req.body;
  res.json(rankFeed(posts, user));
});

/* AI WITH MEMORY */
app.post("/ai", async (req, res) => {
  const r = await brainWithMemory(req.body.userId, req.body.prompt);
  res.json({ result: r });
});

/* GLOBAL INTERNATIONAL */
app.post("/global", async (req, res) => {
  try {
    const { user, prompt } = req.body;
    res.json({
      ai: await brainGlobal(user, prompt),
      notification: notifyIntl(user, "new_video"),
      monetization: monetizeIntl(user)
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/* LISTEN */
app.listen(3000, "0.0.0.0", () => {
  console.log("🚀 Visi4 FULL AI ENGINE ONLINE (GLOBAL)");
});
