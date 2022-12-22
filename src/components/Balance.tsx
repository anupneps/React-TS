import React, {useState } from 'react'

type Balance={
  balance:number
  transferAmountHandler(amount: number): void
}

export const Balance = ({balance, transferAmountHandler}:Balance) => {
 
  const[transferToSaving, setTransferToSaving]=useState(0)
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();  
    transferAmountHandler(transferToSaving);
   
  };

  const handleTransfer =(e:React.ChangeEvent<HTMLInputElement>) =>{
      setTransferToSaving(parseInt(e.target.value))
  }

  return (
    <div className='balance'>
      <h2>Current Balance : {balance} </h2>
      <h2>Transfer to Saving Account</h2>
      <form onSubmit={onSubmit}>
      <input onChange={handleTransfer} type="number" id='transferToSaving' placeholder='Amount' />
      <button id='btn'>Transfer</button>
      </form>
    </div>
  )
}

