import { Schema, model, Document } from "mongoose";

interface IPayment extends Document {
  amount: number;
  createdAt: Date;
  updatedAt: Date;
}

const paymentSchema = new Schema(
  {
    amount: {
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

const PaymentModel = model<IPayment>("Payment", paymentSchema);
export default PaymentModel;
