import { updateVisiCoin } from "./visicoin.js";
import { getBehaviorScore } from "./memory/behaviorMemory.js";

export function autoAdjustVisiCoin(uid) {
  const score = getBehaviorScore(uid);

  if (score >= 20) updateVisiCoin(uid, -20);
  else if (score >= 10) updateVisiCoin(uid, -10);
  else if (score <= 2) updateVisiCoin(uid, +5);
}
