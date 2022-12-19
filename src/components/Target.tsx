import React, { useState } from 'react'

export const Target = () => {
  const[target, setTarget]=useState(10000)
  const saving = 2000

const resetOnClick= (()=>{
        setTarget(0)

    })

  return (
    <div className='target'>
      <h2>Set Target</h2>
      <input type="number" id='targetAmount' placeholder='Enter your target amount' />
      <button id='btn' onClick={resetOnClick} >Reset</button>
      <br />
      <h2>Current Saving: {saving}</h2>
      <h2>Target: {target} </h2>
      {/* <label htmlFor="file">Progress: {(target/saving)*100} </label> */}
      <h2>Progress: {(saving/target)*100} %</h2>
      <progress id="file" value={(saving/target)*100} max="100">  </progress>
    </div>
  )
}
