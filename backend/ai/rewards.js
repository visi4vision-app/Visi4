import { updateVisiCoin } from "./visicoin.js";

export function rewardPositive(uid, reason="good_behavior") {
  const bonus = reason === "helpful" ? 10 : 5;
  return updateVisiCoin(uid, bonus);
}
