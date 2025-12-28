export function computeScore(video) {
  const likeScore = video.likes * 2;
  const commentScore = video.comments * 3;
  const watchScore = (video.watchTime || 0) * 4;
  const viewScore = (video.views || 0) * 5;

  const ageHours = (Date.now() - video.createdAt) / 3600000;
  const freshness = Math.max(0, 24 - ageHours);

  return likeScore + commentScore + watchScore + viewScore + freshness;
}
