import { debit } from "./visicoin.service";

let boosts = {};

export function boostVideo(uid, videoId, amount) {
  debit(uid, amount);
  boosts[videoId] = (boosts[videoId] || 0) + amount;
  return boosts[videoId];
}

export function getBoost(videoId) {
  return boosts[videoId] || 0;
}
