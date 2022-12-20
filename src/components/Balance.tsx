import React, { useState } from 'react'

// type BalanceTotal ={
//   incomeAmount:number;
//   expenseAmount:number;
//   balanceT:number;
  
// }

export const Balance = ({incomeAmount, expenseAmount, balanceT}:any) => {
 
  const[transferToSaving, setTransferToSaving]=useState(0)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();  
    balanceT(transferToSaving)
  };

  const handleTransfer =(e:React.ChangeEvent<HTMLInputElement>) =>{
      setTransferToSaving(parseInt(e.target.value))
  }


  return (
    <div className='balance'>
      <h2>Current Balance : {incomeAmount-expenseAmount-transferToSaving} </h2>
      <h2>Transfer to Saving Account</h2>
      <form onSubmit={onSubmit}>
      <input onChange={handleTransfer} type="number" id='transferToSaving' placeholder='Amount' />
      <button id='btn'>Transfer</button>
      </form>
    </div>
  )
}
