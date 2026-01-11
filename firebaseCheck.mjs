
globalThis.FIREBASE_READY = false;

import admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.applicationDefault()
});

await admin.firestore().collection('_health').doc('ping').set({ ok:true, ts:Date.now() });

globalThis.FIREBASE_READY = true;
console.log('🔥 FIREBASE READY = TRUE');

