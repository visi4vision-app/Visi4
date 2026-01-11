const balances = new Map();

export function credit(userId, amount) {
  const current = balances.get(userId) || 0;
  const total = current + amount;
  balances.set(userId, total);
  return { userId, balance: total };
}
