import Header from "./componenets/Header.jsx";
import Balance from "./componenets/Balance.jsx";
import IncomeExpenses from "./componenets/IncomeExpenses.jsx";
import TransactionList from "./componenets/TransactionList.jsx";
import AddTransaction from "./componenets/AddTransaction.jsx";
import { GlobalProvider } from "./Context/GlobalContext.jsx";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
