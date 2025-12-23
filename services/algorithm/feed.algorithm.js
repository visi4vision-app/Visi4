export function scoreVideo(video, user) {
  let score = 0;

  score += video.watchTime * 5;
  score += video.likes * 2;
  score += video.comments * 3;
  score += video.gifts * 6;

  if (video.country === user.country) score += 10;
  if (video.isLive) score += 15;

  const hours = (Date.now() - video.createdAt) / 3600000;
  score += Math.max(0, 24 - hours);

  return score;
}

export function rankFeed(videos, user) {
  return videos
    .map(v => ({ ...v, score: scoreVideo(v, user) }))
    .sort((a, b) => b.score - a.score);
}
