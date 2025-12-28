export function trainSignals(userSignals, videoId, watchPercent) {
  if (!userSignals[videoId]) userSignals[videoId] = 0;
  userSignals[videoId] += watchPercent * 10;
  return userSignals;
}
