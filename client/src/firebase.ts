// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getMessaging, onMessage, getToken } from 'firebase/messaging';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBtj_PUZBucXAh0Zd9vO9yMPTvoy2MH_Y4',
  authDomain: 'fir-e441f.firebaseapp.com',
  databaseURL: 'https://fir-e441f.firebaseio.com',
  projectId: 'fir-e441f',
  storageBucket: 'fir-e441f.appspot.com',
  messagingSenderId: '136652341468',
  appId: '1:136652341468:web:dc7529477c714bdd18b419',
  measurementId: 'G-11667G7YVX',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const messaging = getMessaging(firebaseApp);
// const analytics = getAnalytics(app);

export const onMessageListener = () =>
  new Promise((resolve) => {
    console.log('Messaging data =>', messaging);
    onMessage(messaging, (payload) => {
      console.log('payload =>', payload);
      resolve(payload);
    });
  });

export const getFirebaseToken = () => {
  getToken(messaging, {
    vapidKey:
      'BIgMMO4_kKfBKWqV-J-RwwHH5E6liZzWJ6bGKQBizKVQbw8pC3RB-dYWPwBks8zruuY04Ssxdg1RDLD3tc4F07w',
  })
    .then((cureToken) => {
      console.log('cureToken12345 =>', cureToken);
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};
