import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import './App.css';
import { Balance } from './components/Balance';
import Expenses from './components/Expenses';
import IncomeExpenses from './components/IncomeExpenses';
import Income from './components/IncomeExpenses';
import { Target } from './components/Target';
import { IncomesOrExpenses } from './types/IncomeOrExpenses';


const getTotal =(list:IncomesOrExpenses[]):number => {
  return list.reduce((sum, current)=> sum+parseInt(current.amount),0)
 
}


function App() {

 const[incomeList, setIncomeList]=useState<IncomesOrExpenses[]>([])
 const[expenseList, setExpenseList]=useState<IncomesOrExpenses[]>([])
 const[balance, setBalance]=useState(0)


  return (
    <>
    <header>Budget Application</header>
    <hr />
    <div className='App__container'>
    <div className="App">
      <IncomeExpenses callbackToParent={setIncomeList} inputData={incomeList} title={"Income Statement"} heading={"Incomes"} />
      <IncomeExpenses callbackToParent={setExpenseList} inputData={expenseList} title={"Expense Statement"} heading={"Expenses"} balance = {balance} />
    </div>
    <div className="rightPane_container">
      <Target totalbalance = {balance} />
      <Balance incomeAmount = {getTotal(incomeList)} expenseAmount = {getTotal(expenseList)} setBalance={setBalance} />
    </div>
    </div>
    </>
  );
}

export default App;
