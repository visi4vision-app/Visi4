import express from "express";
import admin from "firebase-admin";

const router = express.Router();
const db = admin.firestore();

/**
 * POST /recharge
 * body: { uid, amount }
 */
router.post("/", async (req, res) => {
  const { uid, amount } = req.body;
  const ref = db.collection("users").doc(uid);

  await ref.update({
    "wallet.balance": admin.firestore.FieldValue.increment(amount)
  });

  await db.collection("transactions").add({
    uid,
    amount,
    type: "CRYPTO_RECHARGE",
    createdAt: new Date()
  });

  res.json({ ok: true });
});

export default router;
