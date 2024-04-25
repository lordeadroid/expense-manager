import { Document } from "mongoose";

type TTransaction = {
  user: string;
  product: string;
  category: string;
  amount: number;
  transactedAt: Date;
  createdAt: Date;
  mode: "credit" | "cash";
};

type TTransactionDocument = TTransaction & Document;

export default TTransactionDocument;
