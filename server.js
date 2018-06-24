import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ORIGIN, MONGOURL } from './config';
import fieldController from './routes/fieldController';
import mailController from './routes/mailController';

mongoose.connect(MONGOURL);

const app = express();
app.use(cors({ origin: ORIGIN }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/fields', fieldController);
app.use('/mail', mailController);
app.listen(3001, () => {
  console.log('Listening on port 3001');
});
