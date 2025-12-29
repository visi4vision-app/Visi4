import "dotenv/config";
import express from "express";
import cors from "cors";
import { streamChat } from "./ai/stream.mjs";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/ai/stream", streamChat);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log("Visi4 backend running on port", PORT)
);
