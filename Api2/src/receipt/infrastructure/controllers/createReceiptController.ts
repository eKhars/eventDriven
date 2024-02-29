import { Request, Response } from "express";
import { CreateReceiptUseCase } from "../../application/createReceiptUseCase";

export class CreateReceiptController {
  constructor(private createReceiptUseCase: CreateReceiptUseCase) {}

  async run(req: Request, res: Response):Promise<void> {
    const { total } = req.body;
    console.log(total);
    
    try {
        const receipt = await this.createReceiptUseCase.run(total);
        res.status(201).send(receipt);
    } catch (error) {
      res.status(500).send("Error creating receipt");
    }
  }
}
