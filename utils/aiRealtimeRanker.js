import rank from './aiFeedRanker.js';

export default function realtimeRank(videos, user) {
  const personalized = videos.map(v => ({
    ...v,
    score:
      v.likes * 2 +
      v.comments * 3 +
      v.watchTime +
      (user?.preferences?.[v.id] || 0),
  }));
  return rank(personalized);
}
