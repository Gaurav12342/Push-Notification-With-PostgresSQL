import { useEffect } from 'react';
import { getToken, onMessage } from 'firebase/messaging';
// import reactLogo from './assets/react.svg';
import { messaging } from './firebase.ts';
// import viteLogo from '/vite.svg';
// import './App.css';
import Router from './routes/index.tsx';
import Header from './components/Header.tsx';

function App() {
  // const [count, setCount] = useState(0);

  async function requestPermission() {
    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey:
          'BIgMMO4_kKfBKWqV-J-RwwHH5E6liZzWJ6bGKQBizKVQbw8pC3RB-dYWPwBks8zruuY04Ssxdg1RDLD3tc4F07w',
      });

      console.log('Token generated : ', token);
    } else if (permission === 'denied') {
      alert('You denied for the notification');
    }
  }

  useEffect(() => {
    requestPermission();
  }, []);

  onMessage(messaging, (payload) => {
    console.log('incoming msg', payload);
    alert('You denied for the notification--------------');
    // toast(<Message notification={payload.notification} />);
  });

  return (
    <>
      <Header />
      <Router />
    </>
  );
}

export default App;
