import { updateVisiCoin } from "./visicoin.js";

export function scoreVideo(uid, level) {
  if (level === "LOW") updateVisiCoin(uid, +5);
  if (level === "MEDIUM") updateVisiCoin(uid, -2);
  if (level === "HIGH") updateVisiCoin(uid, -10);
}
