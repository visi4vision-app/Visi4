import { analyzeFrame } from "./liveVision.js";
import { chatReact } from "./liveChatAI.js";
import { speakIfNeeded } from "./voiceGuard.js";
import { getMemory, saveMemory } from "./memory.js";

export async function godProcess({ uid, frame, lang, country }) {
  const decision = await analyzeFrame(frame);

  const mem = getMemory(uid);
  mem.actions = mem.actions || [];
  mem.actions.push({ decision, date: new Date() });
  saveMemory(uid, mem);

  if (decision === "BLOCK") {
    await speakIfNeeded(lang, decision);
    return "BLOCK";
  }

  // Chat humain discret
  const msg = await chatReact(
    lang,
    "Merci de respecter les règles du live 😊",
    "friendly"
  );

  console.log("💬 IA CHAT:", msg);
  return "ALLOW";
}
