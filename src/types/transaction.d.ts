import { Document } from "mongoose";

type Transaction = {
  username: string;
  product: string;
  category: string;
  amount: number;
  transaction: "debit" | "credit";
  transactedAt: Date;
  createdAt: Date;
  mode: "credit-card" | "cash";
};

type TTransaction = Transaction & Document;

export default TTransaction;
