import { getMemory, saveMemory } from "./memory.js";

export function negotiateCreator(uid, stats) {
  const mem = getMemory(uid);
  mem.deal = mem.deal || {};

  if (stats.views > 10000) {
    mem.deal.boost = true;
    mem.deal.revenueShare = "80/20";
  } else {
    mem.deal.boost = false;
    mem.deal.revenueShare = "60/40";
  }

  saveMemory(uid, mem);
  return mem.deal;
}
