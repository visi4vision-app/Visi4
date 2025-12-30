import { processLive } from "./liveEngine.js";

export function startLiveLoop({ uid, lang, country }) {
  console.log("🔴 LIVE LOOP STARTED");

  const interval = setInterval(async () => {
    const frame = "frames/frame_001.jpg"; // simulé (FFmpeg live)

    const decision = await processLive({
      uid,
      frame,
      lang,
      country
    });

    if (decision === "BLOCK") {
      console.log("⛔ LIVE TERMINATED");
      clearInterval(interval);
    }
  }, 3000); // toutes les 3 secondes

  return interval;
}
