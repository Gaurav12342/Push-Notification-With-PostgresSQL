import express from 'express';
import { sendNotif } from './sendNotif';

const router = express.Router();

router.get('/bell', async (req, res) => {
  try {
    let token =
      'ezlFqAgLSYxiZPz4rDoRVF:APA91bFRhdI2kaYGOwXWsc3xBMxbyA-XMopaDl9Rq0b9YC8r0CWfpiaaWb6zpY38FKdshqDKbsqi5X9dz4WrJ_HLKFmVC_uN6ren_dVaFBrxu4ssGxwNoUdfos9apH5WCpRUfQeuJ0Kj'; // Replace with the actual FCM token
    if (!token || typeof token !== 'string') {
      throw new Error('Invalid FCM token provided');
    }
    await sendNotif(
      token,
      'Gaurav Notification',
      `Hello World, Good Afternoon`
    );
    res.json({
      status: 'success',
    });
  } catch (error: any) {
    console.error('Notification API error:', error.message);
    res.status(500).json({
      status: 'fail',
      error: error.message,
    });
  }
});

export default router;
