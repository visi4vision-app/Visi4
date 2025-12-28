export function computeRevenue(watchTime, isAd=false) {
  if (isAd) return watchTime * 0.01;
  return watchTime * 0.005;
}
