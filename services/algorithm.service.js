export function computeScore(video) {
  return (
    video.likes * 2 +
    video.comments * 3 +
    video.watchTime * 4 +
    video.gifts * 5 +
    video.boosts * 6
  );
}
