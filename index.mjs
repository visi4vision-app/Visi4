import express from "express";
import feedRouter from "./backend/routes/feed.mjs";

const app = express();
app.use("/feed", feedRouter);
app.use(express.json());


const PORT = 4000;
app.listen(PORT, () => {
  console.log("🚀 Serveur Visi4 IA actif sur http://localhost:" + PORT);
});
