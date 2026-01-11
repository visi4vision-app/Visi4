import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  return res.json({ ok: true });
});

export default router;
