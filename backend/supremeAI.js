import { generateRules } from "./ruleMakerAI.js";
import { negotiateCreator } from "./creatorNegotiatorAI.js";
import { detectEmergingTrends } from "./trendPredictorAI.js";
import { adaptFeed } from "./adaptiveAlgorithmAI.js";

export function supremeDecision(input) {
  const rules = generateRules(input.stats);
  const deal = negotiateCreator(input.uid, input.creatorStats);
  const trends = detectEmergingTrends(input.events);
  const feed = adaptFeed(input.profile);

  return { rules, deal, trends, feed };
}
