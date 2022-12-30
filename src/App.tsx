import  {useState } from 'react';
import './App.css';
import Balances from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import { Target } from './components/Target';
import { IncomesOrExpenses } from './types/IncomeOrExpenses';

function App() {
 const[incomeList, setIncomeList]=useState<IncomesOrExpenses[]>([])
 const[expenseList, setExpenseList]=useState<IncomesOrExpenses[]>([])
 const[balance, setBalance]=useState(0)
 const[currentSavings, setSavings]=useState(0)

function transferAmountHandler(amount:number){
  if(balance<amount){
    alert("Transfer amount exceeds the total balance !")
    return
  }
  setSavings(currentSavings+amount)
  setBalance(balance-amount)
}

function updateBalance(amount:number, isExpense:boolean){
  if(isExpense){
  return setBalance(balance-amount);
  }
  return setBalance(balance+amount)
}

  return (
    <>
    <header>Budget Application</header>
    <hr />
    <div className='App__container'>
    <div className="App">
      <IncomeExpenses updateBalance={updateBalance} callbackToParent={setIncomeList} inputData={incomeList} title={"Income Statement"} heading={"Incomes"} btnLabel = {"Income"}  />
      <IncomeExpenses updateBalance={updateBalance} callbackToParent={setExpenseList} inputData={expenseList} title={"Expense Statement"} heading={"Expenses"} balance={balance} btnLabel = {"Expense"}  />
    </div>
    <div className="rightPane_container">
      <Target currentSavings = {currentSavings}  />
      <Balances balance = {balance} transferAmountHandler = {transferAmountHandler} />
    </div>
    </div>
    </>
  );
}

export default App;



