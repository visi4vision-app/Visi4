import admin from './firebase.js';

const USD_TO_VISICOIN = 100;

/**
 * CREDIT WALLET
 * 1 USD = 100 VisiCoin
 */
export async function creditWallet(uid, usd, source, ref) {
  const visicoin = Math.floor(usd * USD_TO_VISICOIN);
  const walletRef = admin.firestore().collection('wallet').doc(uid);

  await admin.firestore().runTransaction(async (tx) => {
    const snap = await tx.get(walletRef);
    const data = snap.exists
      ? snap.data()
      : { balance: 0, totalIn: 0, totalOut: 0 };

    tx.set(
      walletRef,
      {
        balance: data.balance + visicoin,
        totalIn: data.totalIn + visicoin,
        updatedAt: Date.now()
      },
      { merge: true }
    );
  });

  await admin.firestore().collection('payments').add({
    uid,
    usd,
    visicoin,
    source,
    ref,
    createdAt: Date.now()
  });
}

/**
 * DEBIT WALLET (utilisé pour retraits)
 */
export async function debitWallet(uid, visicoin, reason) {
  const walletRef = admin.firestore().collection('wallet').doc(uid);

  await admin.firestore().runTransaction(async (tx) => {
    const snap = await tx.get(walletRef);

    if (!snap.exists || snap.data().balance < visicoin) {
      throw new Error('INSUFFICIENT_VISICOIN');
    }

    tx.update(walletRef, {
      balance: snap.data().balance - visicoin,
      totalOut: (snap.data().totalOut || 0) + visicoin,
      updatedAt: Date.now()
    });
  });

  await admin.firestore().collection('usage').add({
    uid,
    visicoin,
    reason,
    createdAt: Date.now()
  });
}
