import React, { useState } from 'react'

export const Balance = ({incomeAmount, expenseAmount}:any) => {
  // const[balance, setBalance]=useState(0)
  return (
    <div className='balance'>
      <h2>Current Balance : {incomeAmount-expenseAmount}</h2>
      <h2>Transfer to Saving Account</h2>
      <input type="number" id='transferToSaving' placeholder='Amount' />
      <button id='btn'>Transfer</button>
    </div>
  )
}
