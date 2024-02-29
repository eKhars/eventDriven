import { Payment } from "../domain/payment";
import { PaymentRepository } from "../domain/payment.repository";
import { NotificationNewPayment } from "./services/notificationNewPayment";
import signale from "signale";

export class CreatePaymentUseCase {
  constructor(
    readonly repository: PaymentRepository,
    readonly sendNotification: NotificationNewPayment
  ) {}

  async run(amount: number): Promise<void> {
    const createdAt = new Date();
    const updatedAt = new Date();

    const payment = new Payment(amount, createdAt, updatedAt);

    try {
      await this.repository.create(payment);
      await this.sendNotification.run(payment);
    } catch (error) {
      signale.error(error);
    }
  }
}
