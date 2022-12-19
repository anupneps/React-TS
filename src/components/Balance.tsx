import React, { useState } from 'react'

export const Balance = () => {
  const[balance, setBalance]=useState(4500)
  return (
    <div className='balance'>
      <h2>Current Balance : {balance}</h2>
      <h2>Transfer to Saving Account</h2>
      <input type="number" id='transferToSaving' placeholder='Amount' />
      <button id='btn'>Transfer</button>
    </div>
  )
}
