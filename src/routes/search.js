import express from "express";
import admin from "firebase-admin";

const router = express.Router();
const db = admin.firestore();

/**
 * GET /search?q=mot&type=video|user|hashtag
 */
router.get("/", async (req, res) => {
  const { q, type } = req.query;
  if (!q) return res.json({ results: [] });

  let results = [];

  if (type === "user") {
    const snap = await db.collection("users")
      .where("username", ">=", q)
      .where("username", "<=", q + "\uf8ff")
      .limit(20)
      .get();
    results = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  }

  if (type === "video") {
    const snap = await db.collection("videos")
      .where("keywords", "array-contains", q.toLowerCase())
      .limit(20)
      .get();
    results = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  }

  if (type === "hashtag") {
    const snap = await db.collection("hashtags")
      .where("name", ">=", q)
      .where("name", "<=", q + "\uf8ff")
      .limit(20)
      .get();
    results = snap.docs.map(d => d.data());
  }

  res.json({ results });
});

export default router;
