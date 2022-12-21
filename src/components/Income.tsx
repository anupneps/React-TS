import React, { Dispatch, SetStateAction, useState } from 'react'
import { IncomesOrExpenses } from '../types/IncomeOrExpenses'

const initialFormData={
    source:"",
    amount:"",
    date: "" 
}

const Income = ({setChildProps}:any) => {
    const[formData, setFormData] = useState<IncomesOrExpenses>(initialFormData)
    const[showList, setShowList]=useState(false)
    const[incomeList, setIncomeList]= useState<IncomesOrExpenses[]>([])
    // const displayTransactions:IncomesOrExpenses[] = [];
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.id]: e.target.value,
        }));
        
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();  
        setFormData(formData);
        setShowList(true)
        const sum = incomeList.reduce((sum, curr)=> sum+(parseInt(curr.amount)), 0)
        setChildProps(parseInt(formData.amount)+sum)
        setIncomeList(prev=> [...prev, formData])
        
    };
    

  return (
    <>
    <h2>Income:</h2>
    <div className='incomeContainer'>
    <form onSubmit={onSubmit} >
    <input onChange={onChange} type="text" id='source' placeholder='Income Source' value={formData.source}  />
    <input onChange={onChange} type="number" id='amount' placeholder='Amount' value={formData.amount} />
    <input onChange={onChange} type="date" id = 'date' value={formData.date} />
    <button type="submit" id='btn' >Add Income</button>
    </form>
    </div>
    
    <div className='incomeStatement'>
        <h2>Income Statement</h2>
        <ul>
        {/* { showList ? <li> {formData.source}, {formData.amount}, {formData.date} </li>:""} */}
        { incomeList.map((transaction)=>{
            return (
             <li>{transaction.source}, {transaction.amount}, {transaction.date} </li>
            )
        })} 
        </ul>
    </div>
    </>
  )
}

export default Income