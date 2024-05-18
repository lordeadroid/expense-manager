import TTransaction from "@/types/transaction";
import getPreviousTransactions from "./getPreviousTransactions";

const PreviousTransactions = async () => {
  const transactions = await getPreviousTransactions();

  const tableColumns = (
    <div className="transaction heading">
      <div>No.</div>
      <div>Product</div>
      <div>Amount</div>
      <div>Category</div>
      <div>Date</div>
    </div>
  );

  const TransactionsContainer = transactions ? (
    transactions.map((transaction: TTransaction, index: number) => {
      const { product, category, amount, transactedAt } = transaction;
      return (
        <div key={index} className="transaction">
          <div>{index + 1}</div>
          <div>{product}</div>
          <div>{amount}</div>
          <div>{category}</div>
          <div>{transactedAt.toDateString()}</div>
        </div>
      );
    })
  ) : (
    <div>No Transactions Yet</div>
  );

  return (
    <div id="transactions">
      {tableColumns}
      {TransactionsContainer}
    </div>
  );
};

export default PreviousTransactions;
