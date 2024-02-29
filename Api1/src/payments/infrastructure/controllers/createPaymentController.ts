import { Request, Response } from "express";
import { CreatePaymentUseCase } from "../../application/createPaymentUseCase";

export class CreatePaymentController {
  constructor(private createPaymentUseCase: CreatePaymentUseCase) {}

  async run(req: Request, res: Response): Promise<void> {
    const { amount } = req.body;
    try {
      await this.createPaymentUseCase.run(amount);
      res.status(201).send("Payment created successfully");
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }
}
