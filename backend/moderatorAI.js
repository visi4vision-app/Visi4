import { getMemory, saveMemory } from "./memory.js";

export function moderate(uid, decision) {
  const mem = getMemory(uid);
  mem.strikes = mem.strikes || 0;

  if (decision === "BLOCK") {
    mem.strikes++;
  } else {
    mem.reputation = (mem.reputation || 0) + 1;
  }

  saveMemory(uid, mem);

  if (mem.strikes >= 3) return "BANNED";
  if (mem.reputation > 10) return "REWARDED";
  return "OK";
}
