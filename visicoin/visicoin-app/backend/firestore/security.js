function canWithdraw(user, amount) {
  if (!user) return false;
  if (user.blocked) return false;
  if (amount < 100) return false;
  if (amount > user.balance) return false;
  return true;
}

module.exports = { canWithdraw };
