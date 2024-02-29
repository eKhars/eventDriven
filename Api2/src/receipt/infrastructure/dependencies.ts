import {CreateReceiptUseCase} from '../application/createReceiptUseCase';
import {CreateReceiptController} from '../infrastructure/controllers/createReceiptController'
import {MongoReceiptRepository} from '../infrastructure/repositories/mongoRepository';
import { NewReceiptNotification } from './services/Rabbit/NewReceiptNotification';
import { NotificationNewReceipt } from '../application/services/notificationNewReceipt';
import {NewSocket} from './services/socket.io/newSocket';

const repository = new MongoReceiptRepository();
export const notificationNewReceipt = new  NewReceiptNotification();
export const serviceNotification = new NotificationNewReceipt(notificationNewReceipt);
export const socket = new NewSocket();
export const createReceipt = new CreateReceiptUseCase(repository, serviceNotification, socket);

export const createReceiptController = new CreateReceiptController(createReceipt);