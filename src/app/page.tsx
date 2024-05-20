import AddTransaction from "./Add-Transaction";
import PreviousTransactions from "./PreviousTransactions";

const Home = () => {
  return (
    <>
      <PreviousTransactions />
      <AddTransaction />
    </>
  );
};

export default Home;
