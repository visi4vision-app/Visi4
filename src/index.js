import express from "express";
import cors from "cors";

import aiRoutes from "./routes/ai.js";
import roleRoutes from "./routes/role.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "Visi4 API" });
});

app.use("/ai", aiRoutes);
app.use("/ai", roleRoutes);

const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`Visi4 API active sur http://${HOST}:${PORT}`);
});

import searchRoutes from "./routes/search.js";
app.use("/search", searchRoutes);

