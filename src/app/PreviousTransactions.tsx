import getPreviousTransactions from "./getPreviousTransactions";

const PreviousTransactions = async () => {
  const transactions = await getPreviousTransactions();

  const TransactionsContainer = transactions.map(
    (transaction: any, index: any) => {
      const { product, category, amount, date } = transaction;
      return (
        <div key={index} className="transaction">
          <div>{index + 1}</div>
          <div>{product}</div>
          <div>{amount}</div>
          <div>{category}</div>
          <div>{date}</div>
        </div>
      );
    }
  );

  return <div id="transactions">{TransactionsContainer}</div>;
};

export default PreviousTransactions;
