import { getBehaviorScore } from "./memory/behaviorMemory.js";

export function computeSeverity(uid) {
  const score = getBehaviorScore(uid);

  if (score >= 20) return "STRICT";
  if (score >= 10) return "NORMAL";
  return "SOFT";
}
