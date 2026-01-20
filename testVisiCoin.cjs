const { processRevenue } = require('./backend/monetization/processRevenue');
const { balance, resetWallet } = require('./backend/wallet/wallet.service');

(async () => {
  await resetWallet('creator_1');
  await resetWallet('APP_WALLET');
  await resetWallet('u1');
  await resetWallet('u2');
  await resetWallet('u3');
  await resetWallet('u4');
  await resetWallet('u5');

  await processRevenue({
    amount: 100,
    creatorId: 'creator_1',
    activeViewers: ['u1','u2','u3','u4','u5']
  });

  console.log('Creator:', await balance('creator_1'));
  console.log('App:', await balance('APP_WALLET'));
  console.log('Viewer u1:', await balance('u1'));
})();
