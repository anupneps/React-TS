import React, {useState } from 'react'

type Savings ={
  currentSavings: number
}

export const Target = ({currentSavings}:Savings) => {
  const[target, setTarget]=useState(0)
   
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
      <h2>Current Saving: {currentSavings}</h2>
      <h2>Target: {target} </h2>
      {/* <label htmlFor="file">Progress: {(target/saving)*100} </label> */}
      <h2>Progress: {(currentSavings/target)*100 | 0} %</h2>
      <progress id="file" value={currentSavings} max={target}>  </progress>
    </div>
  )
}



