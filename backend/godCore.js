import { analyzeFrame } from "./liveVision.js";
import { moderate } from "./moderatorAI.js";
import { chatReact } from "./liveChatAI.js";
import { speakIfNeeded } from "./voiceGuard.js";
import { avatarReact } from "./liveAvatar.js";

export async function godCore({ uid, frame, lang }) {
  const decision = await analyzeFrame(frame);
  const status = moderate(uid, decision);

  if (decision === "BLOCK") {
    await speakIfNeeded(lang, decision);
    console.log(avatarReact("BLOCK"));
    return "LIVE_TERMINATED";
  }

  const chat = await chatReact(
    lang,
    "Merci de garder un live respectueux 🙂",
    "friendly"
  );

  console.log("💬 CHAT IA:", chat);
  console.log(avatarReact("WELCOME"));

  return status;
}
