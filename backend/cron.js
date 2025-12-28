import cron from "node-cron";
import { askAI } from "./ai.js";

cron.schedule("*/10 * * * *", async () => {
  const msg = await askAI("Donne un conseil business en 1 phrase");
  console.log("🤖 CRON IA:", msg);
});
