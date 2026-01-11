import express from "express";
import { db } from "../firebase/admin.js";

const r = express.Router();

r.get("/stats", async (_, res) => {
  const users = await db.collection("users").get();
  let tension = 0;
  users.forEach(u => tension += u.data().tension || 0);
  res.json({ users: users.size, global_tension: tension });
});

export default r;
