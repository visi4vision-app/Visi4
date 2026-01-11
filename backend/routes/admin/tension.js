import express from "express";
import { getAllStats } from "../../ai/memory/behaviorMemory.js";

const router = express.Router();

router.get("/tension", (req, res) => {
  const stats = getAllStats();

  const summary = Object.entries(stats).map(([uid, data]) => ({
    uid,
    warnings: data.warnings,
    mediations: data.mediations,
    blocks: data.blocks,
    tensionScore: (data.warnings*2)+(data.mediations)+(data.blocks*5)
  }));

  res.json({
    totalUsers: summary.length,
    users: summary.sort((a,b)=>b.tensionScore-a.tensionScore)
  });
});

export default router;
