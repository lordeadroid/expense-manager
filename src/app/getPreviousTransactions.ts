import fs from "fs/promises";

const getPreviousTransactions = async () => {
  try {
    const transactions = await fs.readFile("transactions.json", {
      encoding: "utf-8",
    });
    return JSON.parse(transactions);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getPreviousTransactions;
