import dbConnect from "@/lib/db-connect";
import TransactionModel from "@/model/transaction.model";
import { cookies } from "next/headers";

const getPreviousTransactions = async () => {
  try {
    const username = cookies().get("username")?.value;
    await dbConnect();
    return await TransactionModel.find({ username });
  } catch (error) {
    console.error(error);
  }
};

export default getPreviousTransactions;
