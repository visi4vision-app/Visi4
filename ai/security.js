const limits = new Map();

export function rateLimit(userId, max = 30) {
  const now = Date.now();
  const data = limits.get(userId) || { count: 0, ts: now };

  if (now - data.ts > 60000) {
    data.count = 0;
    data.ts = now;
  }

  data.count++;
  limits.set(userId, data);

  if (data.count > max) {
    throw new Error("Limite IA atteinte");
  }
}
