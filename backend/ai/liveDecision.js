import { countSignals } from "./signals.js";
import { updateVisiCoin } from "./visicoin.js";

export function liveDecision({ uid, liveId }) {
  const signals = countSignals(liveId);

  if (signals >= 3) {
    updateVisiCoin(uid, -20);
    return { action: "CUT_LIVE" };
  }

  if (signals >= 1) {
    updateVisiCoin(uid, -5);
    return { action: "WARNING" };
  }

  return { action: "NONE" };
}
