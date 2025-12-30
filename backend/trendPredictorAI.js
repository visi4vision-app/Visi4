import { getMemory, saveMemory } from "./memory.js";

export function detectEmergingTrends(events) {
  const trends = {};

  events.forEach(e => {
    trends[e.topic] = (trends[e.topic] || 0) + 1;
  });

  const emerging = Object.keys(trends)
    .filter(t => trends[t] > 5)
    .map(t => ({ topic: t, score: trends[t] }));

  saveMemory("TRENDS", { emerging, date: new Date() });
  return emerging;
}
