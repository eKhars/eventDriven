import { CreatePaymentUseCase } from "../application/createPaymentUseCase";
import { CreatePaymentController } from "./controllers/createPaymentController";
import { NotificationNewPayment } from "../application/services/notificationNewPayment";
import { MongoPaymentRepository } from "./repositories/mongoRepository";
import { NewPaymentNotification } from "../infrastructure/servicesRabbit/newNotificationPayment";

export const mongoPaymentRepository = new MongoPaymentRepository();
export const notificationPayment = new NewPaymentNotification();
export const serviceNotification = new NotificationNewPayment(notificationPayment);
export const createPaymentUseCase = new CreatePaymentUseCase(mongoPaymentRepository, serviceNotification);
export const createPaymentController = new CreatePaymentController(createPaymentUseCase);



