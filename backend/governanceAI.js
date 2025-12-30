import { getMemory, saveMemory } from "./memory.js";

export function governUser(uid, decision) {
  const mem = getMemory(uid);
  mem.score = mem.score || 0;
  mem.status = mem.status || "ACTIVE";

  if (decision === "BLOCK") {
    mem.score -= 50;
  } else {
    mem.score += 1;
  }

  if (mem.score <= -100) mem.status = "BANNED";
  else if (mem.score <= -30) mem.status = "LIMITED";
  else if (mem.score >= 100) mem.status = "TRUSTED";

  saveMemory(uid, mem);
  return mem.status;
}
