const { credit } = require('../wallet/wallet.service');
const { logTransaction } = require('../ledger/ledger.service');

async function rewardViewers(viewers, totalAmount) {
  if (!Array.isArray(viewers) || viewers.length === 0) return;

  const uniqueViewers = [...new Set(viewers)];
  const reward = totalAmount / uniqueViewers.length;

  for (const userId of uniqueViewers) {
    await credit(userId, reward);
    await logTransaction({
      userId,
      amount: reward,
      type: 'reward',
      source: 'viewer'
    });
  }
}

module.exports = { rewardViewers };
