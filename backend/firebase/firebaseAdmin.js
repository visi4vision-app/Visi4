const admin = require('firebase-admin');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    projectId: 'freemind-app-e9d0e'
  });
}

const db = admin.firestore();

module.exports = { admin, db };
