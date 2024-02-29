import {Router} from 'express';
import {createPaymentController} from './dependencies';

export const PaymentRoute = Router();

PaymentRoute.post('/', createPaymentController.run.bind(createPaymentController) );
