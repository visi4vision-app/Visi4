import { getMemory, saveMemory } from "./memory.js";

const FREE_LIMIT = 100;

export function canAskAI(uid) {
  const mem = getMemory(uid);
  mem.aiCount = mem.aiCount || 0;
  mem.premium = mem.premium || false;

  if (mem.premium) return { allowed: true, premium: true };

  mem.aiCount++;
  saveMemory(uid, mem);

  if (mem.aiCount >= FREE_LIMIT) {
    return { allowed: false, reason: "PAYWALL" };
  }

  if (mem.aiCount >= 80) {
    return {
      allowed: true,
      warning: true,
      remaining: FREE_LIMIT - mem.aiCount
    };
  }

  return {
    allowed: true,
    remaining: FREE_LIMIT - mem.aiCount
  };
}
