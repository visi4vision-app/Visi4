const scores = {};

export function updateVisiCoin(uid, delta) {
  scores[uid] = (scores[uid] || 100) + delta;
}

export function getVisiCoin(uid) {
  return scores[uid] || 100;
}
