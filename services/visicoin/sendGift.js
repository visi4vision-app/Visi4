const LAST_GIFT = {};

export function canSendGift(userId) {
  const now = Date.now();
  if (!LAST_GIFT[userId]) {
    LAST_GIFT[userId] = now;
    return true;
  }
  if (now - LAST_GIFT[userId] < 2000) {
    return false; // 1 cadeau / 2 secondes
  }
  LAST_GIFT[userId] = now;
  return true;
}
