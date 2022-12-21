import { Grid } from '@mui/material';
import { Box } from '@mui/system';
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

    {/* <Box sx={{
      marginLeft:5,
      marginRight:5
    }}>
      <Grid container spacing={2}>
        <Grid item xs ={4} lg={6} >
        <Income setChildProps={setIncome} />
        </Grid>
        <Grid item xs ={4} lg={6} >
        <Expenses setChildProps={setIncome} />
        </Grid>
        <Grid item xs ={4} lg={6} >
        <Target totalbalance={balance} />
        </Grid>
        <Grid item xs ={12}  >
        <Balance incomeAmount = {income} expenseAmount = {expense} balanceT={setBalance} />
        </Grid>
      </Grid>
    </Box> */}

    </>
  );
}

export default App;
