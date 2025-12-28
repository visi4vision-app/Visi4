export default function aiUltimateRank(videos, userSignals = {}) {
  return [...videos].sort((a, b) => {
    const score = v =>
      v.likes * 2 +
      v.comments * 3 +
      v.watchTime * 1.5 +
      (userSignals[v.id] || 0) * 5;

    return score(b) - score(a);
  });
}
