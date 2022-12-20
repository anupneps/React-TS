import React, { useEffect, useState } from 'react'

export const Target = ({totalbalance}:any) => {
  const[target, setTarget]=useState(0)
  const[savings, setSavings]=useState(0)
  
  
useEffect(()=>{
    setSavings(savings+totalbalance)
},[totalbalance])

const resetOnClick= (()=>{
        setTarget(0)
    })

const onChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault()
    setTarget(parseInt(e.target.value))
}

  return (
    <div className='target'>
      <h2>Set Target</h2>
      <input onChange={onChange} type="number" id='targetAmount' placeholder='Enter your target amount' value={target} />
      <button id='btn' onClick={resetOnClick} >Reset</button>
      <br />
      <h2>Current Saving: {savings}</h2>
      <h2>Target: {target} </h2>
      {/* <label htmlFor="file">Progress: {(target/saving)*100} </label> */}
      <h2>Progress: {(totalbalance/target)*100 | 0} %</h2>
      <progress id="file" value={totalbalance} max={target}>  </progress>
    </div>
  )
}
