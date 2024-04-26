import TTransactionDocument from "@/types/transaction";
import mongoose, { Schema } from "mongoose";

const TransactionSchema: Schema<TTransactionDocument> = new Schema({
  user: { type: String, required: true },
  product: { type: String, required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  transactedAt: { type: Date, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  mode: { type: String, required: true },
});

const TransactionModel =
  (mongoose.models
    .TTransactionDocument as mongoose.Model<TTransactionDocument>) ||
  mongoose.model<TTransactionDocument>("TTransaction", TransactionSchema);

export default TransactionModel;
