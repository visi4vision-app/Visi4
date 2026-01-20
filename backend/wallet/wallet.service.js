const { db } = require('../firebase/firebaseAdmin');

// VisiCoin Wallet

async function credit(userId, amount) {
  const ref = db.collection('wallets').doc(userId);
  await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const balance = snap.exists ? snap.data().balance : 0;
    tx.set(ref, { balance: balance + amount }, { merge: true });
  });
}

async function debit(userId, amount) {
  const ref = db.collection('wallets').doc(userId);
  await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const balance = snap.exists ? snap.data().balance : 0;
    tx.set(ref, { balance: balance - amount }, { merge: true });
  });
}

async function balance(userId) {
  const snap = await db.collection('wallets').doc(userId).get();
  return snap.exists ? snap.data().balance : 0;
}

async function resetWallet(userId) {
  await db.collection('wallets').doc(userId).set({ balance: 0 });
}

module.exports = { credit, debit, balance, resetWallet };
