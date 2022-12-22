import React, {useState } from 'react'
import {IncomesOrExpenses } from '../types/IncomeOrExpenses'
import uuid4 from "uuid4";

const initialFormData={
    source:"",
    amount:"",
    date: "" 
}
let id = uuid4();

interface Props {
    callbackToParent: (callback: (state: IncomesOrExpenses[]) => IncomesOrExpenses[]) => void
    inputData:IncomesOrExpenses[]
    title:string
    heading:string
    btnLabel:string
    balance?:number
    updateBalance(amount:number, isExpense:boolean):void
}

const IncomeExpenses = ({updateBalance, callbackToParent, inputData, title, heading, balance, btnLabel}:Props) => {
    const[formData, setFormData] = useState<IncomesOrExpenses>(initialFormData)
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.id]: e.target.value,
        }));
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();  
        if(heading === 'Expenses' && balance !== undefined){
           if(parseInt(formData.amount) > balance ){
                alert("Cannot add expenses which exceeds the total balance !!")
                return
            }
        }
        callbackToParent((prev)=> [...prev, formData])
        const amount = parseInt(formData.amount);
        updateBalance(amount, heading === 'Expenses');
    };
    
  return (
    <>
    <h2>{heading}</h2>
    <div className='incomeOrExpenseContainer'>
    <form onSubmit={onSubmit} >
    <input onChange={onChange} type="text" id='source' placeholder='Income Source' value={formData.source} required  />
    <input onChange={onChange} type="number" id='amount' placeholder='Amount' value={formData.amount} required />
    <input onChange={onChange} type="date" id = 'date' value={formData.date} required />
    <button type="submit" id='btn' >Add {btnLabel}</button>
    </form>
    </div>
    
    <div className='incomeOrExpenseStatement'>
        <h2>{title}</h2>
        <ul >
        { inputData.map((transaction)=>{
            return (
             <li className='incomeOrExpenseList'  key={id}> {transaction.source}, {transaction.amount}, {transaction.date} </li>
            )
        })} 
        </ul>
    </div>
    </>
  )
}

export default IncomeExpenses

