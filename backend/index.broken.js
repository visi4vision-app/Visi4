import express from "express";
import cors from "cors";
import fs from "fs";

/* HEALTH CHECK */
app.get("/health", (req, res) => {
  const { uid, country, language, content } = req.body;

  if (!content) {
    return res.status(400).json({ error: "content missing" });
  }

  const decision = content.toLowerCase().includes("porno")
    ? "BLOCK"
    : "ALLOW";

    reason: "test moderation logic"
  });
});

/* START SERVER */
const PORT = 3000;
app.listen(PORT, () => {
  console.log("🚀 API READY on port", PORT);
});
import { moderateContent } from "./openai.js";

app.post("/moderate", async (req, res) => {
  try {
    const { uid, country, language, content } = req.body;

    const result = await moderateContent({
      country,
      language,
      content
    });

    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "moderation_failed" });
  }
});
app.post("/live/check", async (req, res) => {
  const { liveId, country, language, transcript } = req.body;

  const result = await moderateContent({
    country,
    language,
    content: transcript
  });

    console.log("🚫 LIVE COUPÉ:", liveId);
  }

  res.json(result);
});
app.post("/live/start", async (req, res) => {
  const { userId } = req.body;

  console.log("🔴 LIVE START:", userId);
  console.log("📣 Notifier abonnés");

  const logs = fs.readFileSync("moderation.log", "utf8");
  res.type("text").send(logs);
});
function stopLive(liveId) {
  console.log("🚫 LIVE STOPPED:", liveId);
}
