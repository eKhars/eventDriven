import express from 'express';
import { Signale } from 'signale';
import dotenv from 'dotenv';
import connectToDatabase from './database/db';
import { PaymentRoute } from './payments/infrastructure/paymentRoute';
import cors from 'cors';


dotenv.config();

connectToDatabase();

const app = express();
const port = process.env.PORT || 4000;
const signale = new Signale();

app.use(express.json());
app.use(cors({
  origin: '*'
}
));
app.use('/payments', PaymentRoute);

app.listen(port, () => {
  console.log('Server running on port ' + port);
});
