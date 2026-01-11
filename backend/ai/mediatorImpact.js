import { updateVisiCoin } from "./visicoin.js";
import { updateSocialScore } from "./socialScore.js";

export function applyMediatorImpact(uid, level) {
  if (level === "HIGH") {
    updateVisiCoin(uid, -10);
    updateSocialScore(uid, -5);
  }
  if (level === "MEDIUM") {
    updateVisiCoin(uid, -3);
  }
}
