import { Receipt } from "../../domain/receipt";
import { IReceiptRepository } from "../../domain/IReceiptRepository";
import ReceiptModel from "../models/receiptModel";

export class MongoReceiptRepository implements IReceiptRepository {
  async create(receipt: Receipt): Promise<void> {
    console.log(receipt);
    try {
      const createdReceipt = await ReceiptModel.create(receipt);
      console.log("Receipt created successfully:", createdReceipt);
    } catch (error) {
      console.error("Error creating receipt:", error);
    }
  }
}
