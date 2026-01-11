const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const USD_TO_VISICOIN = 100;

/**
 * Crédit VisiCoin (fonction centrale)
 */
async function credit(uid, usd, ref) {
  const vc = Math.floor(usd * USD_TO_VISICOIN);
  const w = admin.firestore().collection('wallet').doc(uid);

  await admin.firestore().runTransaction(async (tx) => {
    const s = await tx.get(w);
    const balance = s.exists ? s.data().balance || 0 : 0;
    const totalIn = s.exists ? s.data().totalIn || 0 : 0;

    tx.set(
      w,
      {
        balance: balance + vc,
        totalIn: totalIn + vc,
        updatedAt: Date.now(),
      },
      { merge: true }
    );
  });

  await admin.firestore().collection('payments').add({
    uid,
    usd,
    vc,
    ref,
    status: 'ok',
    createdAt: Date.now(),
  });
}

/**
 * Test HTTP
 */
exports.testCredit = functions.https.onRequest(async (req, res) => {
  await credit('TEST_UID', 10, 'manual-test');
  res.send('OK CREDITED');
});
