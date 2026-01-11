import { analyzeTrends } from "./trendAnalyzer";

export async function decideNextContent(stats: any[]) {
  return await analyzeTrends(stats);
}
