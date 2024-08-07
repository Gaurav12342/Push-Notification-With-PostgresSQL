import firebaseAdmin from 'firebase-admin';

const serviceAccount = require('./firebase-config.json');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
});
export const sendNotif = async (token: any, title: any, body: any) => {
  try {
    if (!token || typeof token !== 'string') {
      throw new Error('Invalid FCM token provided');
    }
    const message = {
      notification: {
        title: title,
        body: body,
      },
      token: token,
    };
    const response = await firebaseAdmin.messaging().send(message);
    console.log('Successfully sent message:', response);
  } catch (error: any) {
    console.error('Error sending message:', error.message);
    throw error;
  }
};
