import express from "express";
import { subscribe } from "./visicoinPay.js";

const router = express.Router();

router.post("/ai/subscribe", (req, res) => {
  const { uid, amount } = req.body;

  const result = subscribe(uid, amount);

  if (!result.success) {
    return res.json({
      status: "FAILED",
      message: "VisiCoin insuffisant",
      required: result.required
    });
  }

  res.json({
    status: "PREMIUM_ACTIVE",
    plan: "AI_YEARLY"
  });
});

export default router;
