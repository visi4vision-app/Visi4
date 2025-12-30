const lives = new Map();

export function startLive(liveId, fn, interval = 8000) {
  const i = setInterval(fn, interval);
  lives.set(liveId, i);
}

export function stopLive(liveId) {
  clearInterval(lives.get(liveId));
  lives.delete(liveId);
}
