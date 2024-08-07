import express, { Request, Response, Express } from 'express';
import path from 'path';
import cors from 'cors';
import { config } from 'dotenv';
import bodyparser from 'body-parser';
import notificationRouter from './firebase/notifications';
import employeerRouter from './Routes/emp';

const app: Express = express();

config();
app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: '*',
  })
);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Guys, My name is Gaurav Pendharkar.');
});

//  declare routers
app.use('/notification', notificationRouter);
app.use('/company', employeerRouter);

app.listen(5001, () => {
  console.log(`Server is connected on 5001`);
});
