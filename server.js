import express from "express";
import ai from "./routes/ai.js";
import admin from "./dashboard/admin.js";

const app = express();
app.use(express.json());
app.use("/api/ai", ai);
app.use("/admin", admin);

app.listen(3000, () =>
  console.log("🔥 Visi4 FULL IA + FIREBASE LIVE http://localhost:3000")
);
