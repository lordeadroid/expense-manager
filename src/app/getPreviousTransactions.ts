import fs from "fs/promises";

const getPreviousTransactions = async () => {
  const transactions = await fs.readFile("transactions.json", { encoding: "utf-8" });
  return JSON.parse(transactions);
};

export default getPreviousTransactions;
