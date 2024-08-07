import { useState, useEffect } from 'react';
import { getToken, onMessage } from 'firebase/messaging';
import reactLogo from './assets/react.svg';
import { messaging } from './firebase.ts';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
