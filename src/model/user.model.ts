import TUserDocument from "@/types/user";
import { Model, Schema, model, models } from "mongoose";

const TransactionSchema: Schema<TUserDocument> = new Schema({
  username: { type: String, required: true },
  hashedPassword: {type: String, require: true}
});

const TransactionModel =
  (models.TUserDocument as Model<TUserDocument>) ||
  model<TUserDocument>("TTransaction", TransactionSchema);

export default TransactionModel;
