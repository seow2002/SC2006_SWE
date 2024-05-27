import admin from 'firebase-admin';
import serviceAccount from './service-account-file.json' assert { type: 'json' };

const firebaseApp = admin.apps.length ? admin.app() : admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const db = admin.firestore(firebaseApp);