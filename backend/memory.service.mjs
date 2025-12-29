import admin from 'firebase-admin';

const db = admin.firestore();

export async function saveMessage(uid, conversationId, role, content) {
  await db
    .collection('users')
    .doc(uid)
    .collection('conversations')
    .doc(conversationId)
    .collection('messages')
    .add({
      role,
      content,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });
}

export async function getConversation(uid, conversationId, limit = 20) {
  const snap = await db
    .collection('users')
    .doc(uid)
    .collection('conversations')
    .doc(conversationId)
    .collection('messages')
    .orderBy('timestamp', 'asc')
    .limit(limit)
    .get();

  return snap.docs.map(d => ({
    role: d.data().role,
    content: d.data().content,
  }));
}
