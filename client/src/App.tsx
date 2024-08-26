import { useEffect, useState } from 'react';
import { getToken, onMessage } from 'firebase/messaging';
import { Alert, Snackbar, SnackbarCloseReason } from '@mui/material';
import { messaging } from './firebase.ts';
import Router from './routes/index.tsx';
import Header from './components/Header.tsx';

function App() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey:
          'BIgMMO4_kKfBKWqV-J-RwwHH5E6liZzWJ6bGKQBizKVQbw8pC3RB-dYWPwBks8zruuY04Ssxdg1RDLD3tc4F07w',
      });

      localStorage.setItem("FCM_token", token);
    } else if (permission === 'denied') {
      alert('You denied for the notification');
    }
  }

  useEffect(() => {
    requestPermission();
  }, []);

  onMessage(messaging, (payload:any) => {
    setOpen(true);
    setMessage(payload.notification?.body);
  });

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Header />
      <Router />

      <Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }} open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default App;
