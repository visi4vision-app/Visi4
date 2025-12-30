import { analyzeFrame } from "./liveVision.js";
import { liveSpeak } from "./liveSpeaker.js";
import { avatarReact } from "./liveAvatar.js";
import { getMemory, saveMemory } from "./memory.js";
import { cultureRules } from "./culture.js";

export async function processLive({ uid, frame, lang, country }) {
  const decision = await analyzeFrame(frame);

  const mem = getMemory(uid);
  mem.actions = mem.actions || [];
  mem.actions.push({ decision, date: new Date() });
  saveMemory(uid, mem);

  if (decision === "BLOCK") {
    console.log(avatarReact("BLOCK"));
    await liveSpeak(lang, "Live stopped due to rule violation");
  } else {
    console.log(avatarReact("WELCOME"));
  }

  return decision;
}
