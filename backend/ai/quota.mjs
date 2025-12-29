import plans from "./plans.json";

export function canUse(plan, used) {
  return used < plans[plan].tokens;
}
