const { splitRevenue } = require('./revenue.service');
const { credit } = require('../wallet/wallet.service');
const { rewardViewers } = require('../activity/viewerReward.service');
const { logTransaction } = require('../ledger/ledger.service');

async function processRevenue({ amount, creatorId, activeViewers }) {
  const { creator, app, viewers } = splitRevenue(amount);

  await credit(creatorId, creator);
  await credit('APP_WALLET', app);

  await logTransaction({ userId: creatorId, amount: creator, type: 'credit', source: 'creator' });
  await logTransaction({ userId: 'APP_WALLET', amount: app, type: 'credit', source: 'app' });

  await rewardViewers(activeViewers, viewers);

  return { creator, app, viewers };
}

module.exports = { processRevenue };
