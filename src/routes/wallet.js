import express from "express";
import admin from "firebase-admin";

const router = express.Router();
const db = admin.firestore();

router.get("/", authMiddleware, async (req, res) => {
  const { uid } = req.query;
  const ref = db.collection("users").doc(uid);
  const doc = await ref.get();

  if (!doc.exists) {
    await ref.set({
      wallet: { balance: 0, currency: "VISION" }
    });
  }

  const data = (await ref.get()).data();
  res.json(data.wallet);
});

export default router;
