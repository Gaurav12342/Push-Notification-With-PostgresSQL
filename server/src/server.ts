import express, { Request, Response, Express } from 'express';
import path from 'path';
import cors from 'cors';
import notificationRouter from './firebase/notifications';
import { config } from 'dotenv';
const app: Express = express();

config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  cors({
    origin: '*',
  })
);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Guys, My name is Gaurav Pendharkar.');
});

//  declare routers
app.use(notificationRouter);

app.listen(5001, () => {
  console.log(`Server is connected on 5001`);
});
