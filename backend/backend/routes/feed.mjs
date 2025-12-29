import express from "express";
import { rankFeed } from "../ai/feed.mjs";
import { db } from "../firebaseAdmin.mjs";

const router = express.Router();

router.get("/feed/:uid", async (req, res) => {
  const { uid } = req.params;

  const snap = await db.collection("videos").get();
  const videos = snap.docs.map(d => ({ id: d.id, ...d.data() }));

  const ranked = await rankFeed(uid, videos);
  res.json(ranked);
});

export default router;
