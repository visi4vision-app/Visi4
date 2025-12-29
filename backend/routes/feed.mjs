import express from "express";
import { rankFeed } from "../ai/feed.mjs";
import { db } from "../firebaseAdmin.mjs";

const router = express.Router();

router.get("/:uid", async (req, res) => {
  try {
    const { uid } = req.params;

    const snap = await db.collection("videos").get();
    const videos = snap.docs.map(d => ({
      id: d.id,
      ...d.data()
    }));

    console.log("📦 Videos envoyées à l'IA:", videos.length);

    const ranked = await rankFeed(uid, videos);
    res.json(ranked);
  } catch (err) {
    console.error("❌❌❌ FEED IA ERROR REAL ❌❌❌");
    console.error(err);
    res.status(500).json({
      error: "Feed IA error",
      message: err?.message,
      stack: err?.stack
    });
  }
});

export default router;
