import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "OK",
    app: "Visi4",
    backend: "online",
    port: 3000
  });
});

app.post("/ai/chat", (req, res) => {
  res.json({
    reply: "IA backend actif"
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("✅ Visi4 backend lancé sur le port", PORT);
});
