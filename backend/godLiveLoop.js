import { godCore } from "./godCore.js";

export function startGodMode(uid, lang) {
  console.log("🔥 MODE DIEU TOTAL ACTIVÉ");

  const loop = setInterval(async () => {
    const frame = "frames/frame_001.jpg";

    const result = await godCore({ uid, frame, lang });

    if (result === "LIVE_TERMINATED") {
      console.log("⛔ LIVE ARRÊTÉ PAR IA");
      clearInterval(loop);
    }
  }, 3000);
}
