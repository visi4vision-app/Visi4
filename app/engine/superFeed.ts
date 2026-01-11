import { rankVideos } from "./recommendation";
import { injectAds } from "../ads/ads";
import { predictVirality } from "../ml/tiktokML";

export function buildFeed(videos: any[]) {
  const ranked = rankVideos(videos);
  ranked.forEach(v => v.viralScore = predictVirality([v.likes, v.watchTime]));
  return injectAds(ranked);
}
