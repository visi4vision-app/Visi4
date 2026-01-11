import { getBehaviorScore } from "./memory/behaviorMemory.js";

export function computeFeedWeight(uid) {
  const tension = getBehaviorScore(uid);

  if (tension >= 20) return 0.2;   // quasi invisible
  if (tension >= 10) return 0.5;   // visibilité réduite
  if (tension >= 5) return 0.8;    // normal
  return 1.2;                      // boost utilisateurs calmes
}
