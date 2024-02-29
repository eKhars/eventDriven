import { Schema, model, Document } from "mongoose";

interface IReceipt extends Document {
  total: number;
  createdAt: Date;
  updatedAt: Date;
}

const receiptSchema = new Schema(
  {
    total: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    updatedAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const ReceiptModel = model<IReceipt>("Receipt", receiptSchema);
export default ReceiptModel;
