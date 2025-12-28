export function watchScore(watchTime, duration) {
  if (!duration || duration === 0) return 0;
  return Math.min(watchTime / duration, 1);
}
