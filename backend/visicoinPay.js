import { getMemory, saveMemory } from "./memory.js";

const YEAR_PRICE = 2900; // 29$ = 2900 VisiCoin

export function subscribe(uid, amount) {
  if (amount < YEAR_PRICE) {
    return {
      success: false,
      required: YEAR_PRICE
    };
  }

  const mem = getMemory(uid);
  mem.premium = true;
  mem.aiCount = 0;
  mem.subscription = {
    type: "AI_YEARLY",
    paid: amount,
    since: new Date()
  };

  saveMemory(uid, mem);

  return {
    success: true,
    premium: true
  };
}
