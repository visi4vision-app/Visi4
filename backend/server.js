import express from "express";
import cors from "cors";
import http from "http";
import { registerRoutes } from "./routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "OK", backend: "online", rtc: "tencent-trtc" });
});

registerRoutes(app);

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Visi4 backend TRTC actif sur 3000");
});
