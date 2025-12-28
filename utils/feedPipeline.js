import aiUltimateRanker from './aiUltimateRanker.js';
import { trainSignals } from './iaTrainer.js';
import { syncUserSignals } from './syncIA.js';
import { computeRevenue } from './monetization.js';

export async function feedPipeline({ videos, userId, signals, watch }) {
  // 1. Entraîner IA
  const updatedSignals = trainSignals(signals, watch.videoId, watch.percent);

  // 2. Sync Firebase
  await syncUserSignals(userId, updatedSignals);

  // 3. Rank feed
  const rankedFeed = aiUltimateRanker(videos, updatedSignals);

  // 4. Revenue
  const revenue = computeRevenue(watch.time, watch.isAd);

  return { rankedFeed, revenue, updatedSignals };
}
