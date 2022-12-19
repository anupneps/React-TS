import React, { useState } from 'react'

interface Props{
    incomeSource: string;
    incomeAmount: number;
}

const Expenses = () => {
    const[source, setSource]=useState('Initial transaction')
    const[amount, setAmount]=useState(2000)
    const[date, setDate]=useState(new Date().toDateString())


    const showTransaction = (()=>{
        setAmount(amount+200)
        
    })


  return (
    <>
    <h2>Expenses:</h2>
    <div className='incomeContainer'>
    
    <input type="text" id='source' placeholder='Income Source' />
    <input type="text" id='amount' placeholder='Amount' />
    <input type="date" id = 'date' />
    <button onClick={showTransaction} type="submit" id='btn' >Add Expenses</button>
    </div>
    <div className='incomeStatement'>
        <h2>Expenses Statement</h2>
        <ul>
        <li>{source} : {amount} EUR on {date} </li>
        </ul>
    </div>
    </>
  )
}

export default Expenses