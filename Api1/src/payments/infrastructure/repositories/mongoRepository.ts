import { Payment } from "../../domain/payment";
import { PaymentRepository } from "../../domain/payment.repository";
import PaymentModel from "../models/payment.model";

export class MongoPaymentRepository implements PaymentRepository {
  async create(payment: Payment): Promise<void> {
    console.log("Creating payment in MongoPaymentRepository");
    try {
      const createdPayment = await PaymentModel.create(payment);
        console.log("Payment created successfully:", createdPayment);
    } catch (error) {
      console.error("Error creating payment:", error);
      
    }
  }
}
