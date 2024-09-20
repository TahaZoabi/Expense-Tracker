import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext.jsx";
import Transaction from "./Transaction.jsx";

function TransactionList() {
  const { transaction } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transaction.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
