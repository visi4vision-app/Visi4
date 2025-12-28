import { watchScore } from './watchScore.js';

export default function finalRank(videos, signals = {}) {
  return [...videos].sort((a, b) => {
    const sA =
      a.likes * 1 +
      a.comments * 2 +
      watchScore(a.watchTime, a.duration) * 10 +
      (signals[a.id] || 0) * 5;

    const sB =
      b.likes * 1 +
      b.comments * 2 +
      watchScore(b.watchTime, b.duration) * 10 +
      (signals[b.id] || 0) * 5;

    return sB - sA;
  });
}
