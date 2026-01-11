import express from "express";
import admin from "firebase-admin";

const router = express.Router();
const db = admin.firestore();

/**
 * POST /withdraw
 * body: { uid, amount, address }
 */
router.post("/", async (req, res) => {
  const { uid, amount, address } = req.body;
  const ref = db.collection("users").doc(uid);
  const user = (await ref.get()).data();

  if (user.wallet.balance < amount) {
    return res.status(400).json({ error: "Solde insuffisant" });
  }

  await ref.update({
    "wallet.balance": admin.firestore.FieldValue.increment(-amount)
  });

  await db.collection("withdrawals").add({
    uid,
    amount,
    address,
    status: "PENDING",
    createdAt: new Date()
  });

  res.json({ ok: true });
});

export default router;
