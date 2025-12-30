import { getMemory, saveMemory } from "./memory.js";

export function generateRules(globalStats) {
  const rules = [];

  if (globalStats.hateRate > 0.05)
    rules.push("ZERO_TOLERANCE_HATE");

  if (globalStats.nudityRate > 0.02)
    rules.push("STRICT_NUDITY");

  if (globalStats.minorsRisk)
    rules.push("AGE_RESTRICTION");

  saveMemory("GLOBAL_RULES", { rules, date: new Date() });
  return rules;
}
