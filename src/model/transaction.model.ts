import TTransaction from "@/types/transaction";
import { Model, Schema, model, models } from "mongoose";

const TransactionSchema: Schema<TTransaction> = new Schema({
  username: { type: String, required: true },
  product: { type: String, required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  transaction: { type: String, required: true },
  transactedAt: { type: Date, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  mode: { type: String, required: true },
});

const TransactionModel =
  (models.Transaction as Model<TTransaction>) ||
  model<TTransaction>("Transaction", TransactionSchema);

export default TransactionModel;
