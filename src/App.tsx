import React, { useEffect, useState } from 'react';
import './App.css';
import { Balance } from './components/Balance';
import Expenses from './components/Expenses';
import Income from './components/Income';
import { Target } from './components/Target';

function App() {

 const[income, setIncome]=useState(0)
 const[expense, setExpense]=useState(0)
 const[balance, setBalance]=useState(0)


  return (
    <>
    <header>Budget Application</header>
    <hr />
    <div className='App__container'>
    <div className="App">
      <Income setChildProps={setIncome} />
      <Expenses setChildProp={setExpense}/>
    </div>
    <div className="rightPane_container">
      <Target totalbalance = {balance} />
      <Balance incomeAmount = {income} expenseAmount = {expense} balanceT={setBalance} />
    </div>
    </div>
    </>
  );
}

export default App;
