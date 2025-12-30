import { moderateContent } from "./openai.js";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

/* =====================
   HEALTH CHECK
===================== */
app.get("/health", (req, res) => {
  res.json({ ok: true });
});

/* =====================
   MODERATION (LOGIQUE TEST)
===================== */
app.post("/moderate", async (req, res) => {
  const { uid, country, language, content } = req.body;

  const decision = content?.toLowerCase().includes("porno")
    ? "BLOCK"
    : "ALLOW";

  res.json({
    uid,
    country,
    language,
    decision,
    reason: "test moderation logic"
  });
});

/* =====================
   START SERVER
===================== */
const PORT = 3000;
  console.log("🚀 API READY on port", PORT);
});
import { startLiveModeration, stopLiveModeration } from "./liveModeration.js";

app.post("/live/start", async (req, res) => {
  const { liveId } = req.body;

  startLiveModeration(liveId, async () => {
    // 🔥 PLUS TARD : audio->text / chat / speech-to-text
    return "texte live simulé";
  });

  console.log("🔴 LIVE STARTED:", liveId);
notifyFollowers(liveId);
  res.json({ ok: true });
});

app.post("/live/stop", (req, res) => {
  const { liveId } = req.body;
  stopLiveModeration(liveId);
  console.log("⛔ LIVE STOPPED:", liveId);
  res.json({ ok: true });
});
function notifyFollowers(userId) {
  console.log("📢 Notification envoyée aux abonnés de", userId);
}

// ===== LIVE ROUTES =====
app.post("/live/start", async (req, res) => {
  const { liveId } = req.body;

  startLiveModeration(liveId, async () => {
    return "texte live simulé";
  });

  notifyFollowers(liveId);
  console.log("🔴 LIVE STARTED:", liveId);
  res.json({ ok: true });
});

app.post("/live/stop", (req, res) => {
  const { liveId } = req.body;
  stopLiveModeration(liveId);
  console.log("⛔ LIVE STOPPED:", liveId);
  res.json({ ok: true });
});

// ===== START SERVER =====
const PORT = 3000;
app.listen(PORT, () => {
  console.log("🚀 API READY on port", PORT);
});
