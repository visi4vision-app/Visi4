import express from "express";
import { getMemory } from "./memory.js";

const router = express.Router();

router.get("/ai/quota/:uid", (req, res) => {
  const { uid } = req.params;
  const mem = getMemory(uid);

  const used = mem.aiCount || 0;
  const premium = mem.premium || false;

  res.json({
    used,
    limit: 100,
    premium,
    remaining: premium ? "∞" : Math.max(0, 100 - used)
  });
});

export default router;
