export function recommend(videos, interests) {
  return videos
    .map(v => ({
      ...v,
      score:
        v.likes * 2 +
        v.comments * 3 +
        v.watchTime * 4 +
        v.boosts * 6 +
        (interests.includes(v.tag) ? 10 : 0),
    }))
    .sort((a, b) => b.score - a.score);
}
