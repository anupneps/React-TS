import React, { Dispatch, SetStateAction, useState } from 'react'
import { IncomesOrExpenses } from '../types/IncomeOrExpenses'

const initialFormData={
    source:"",
    amount:"",
    date: "" 
}

interface Props {
    callbackToParent: (callback: (state: IncomesOrExpenses[]) => IncomesOrExpenses[]) => void
    inputData:IncomesOrExpenses[]
    title:string
    heading:string
    balance?:number
}

const IncomeExpenses = ({callbackToParent, inputData, title, heading, balance}:Props) => {
    const[formData, setFormData] = useState<IncomesOrExpenses>(initialFormData)
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.id]: e.target.value,
        }));
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();  

        // if(heading === 'Expenses' && balance !== undefined){
        //     const data = [...inputData, formData]
        //     if(data.reduce((sum, curr)=> sum + parseInt(curr.amount), 0) > balance ){
        //         alert("Not enough balacne")
        //         return
        //     }
        // }

        callbackToParent((prev)=> [...prev, formData])

        

    };
    

  return (
    <>
    <h2>{heading}</h2>
    <div className='incomeContainer'>
    <form onSubmit={onSubmit} >
    <input onChange={onChange} type="text" id='source' placeholder='Income Source' value={formData.source}  />
    <input onChange={onChange} type="number" id='amount' placeholder='Amount' value={formData.amount} />
    <input onChange={onChange} type="date" id = 'date' value={formData.date} />
    <button type="submit" id='btn' >Add Income</button>
    </form>
    </div>
    
    <div className='incomeStatement'>
        <h2>{title}</h2>
        <ul>
        { inputData.map((transaction)=>{
            return (
             <li>{transaction.source}, {transaction.amount}, {transaction.date} </li>
            )
        })} 
        </ul>
    </div>
    </>
  )
}

export default IncomeExpenses