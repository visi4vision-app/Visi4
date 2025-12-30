import { godProcess } from "./godEngine.js";

export function startGodLive({ uid, lang, country }) {
  console.log("👁️ MODE DIEU LIVE ACTIF");

  const loop = setInterval(async () => {
    const frame = "frames/frame_001.jpg";

    const res = await godProcess({
      uid,
      frame,
      lang,
      country
    });

    if (res === "BLOCK") {
      console.log("⛔ LIVE TERMINÉ PAR IA");
      clearInterval(loop);
    }
  }, 3000);
}
