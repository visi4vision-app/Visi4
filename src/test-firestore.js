import admin from './firebase.js';

(async () => {
  await admin.firestore().collection('system').doc('ping').set({
    ok: true,
    time: Date.now()
  });
  console.log('Firestore OK');
})();
