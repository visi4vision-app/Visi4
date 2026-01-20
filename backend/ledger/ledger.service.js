const { db } = require('../firebase/firebaseAdmin');

async function logTransaction({ userId, amount, type, source }) {
  await db.collection('ledger').add({
    userId,
    amount,
    type,
    source,
    createdAt: new Date()
  });
}

module.exports = { logTransaction };
