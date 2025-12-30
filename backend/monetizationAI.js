import { getMemory, saveMemory } from "./memory.js";

export function rewardUser(uid, action) {
  const mem = getMemory(uid);
  mem.coins = mem.coins || 0;

  if (action === "GOOD_BEHAVIOR") mem.coins += 5;
  if (action === "POPULAR_LIVE") mem.coins += 50;
  if (action === "VIOLATION") mem.coins -= 20;

  saveMemory(uid, mem);
  return mem.coins;
}
