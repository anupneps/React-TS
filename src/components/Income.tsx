import React, { useState } from 'react'

interface Props{
    incomeSource: string;
    incomeAmount: number;
}

// type sourceValue = {
//     target:string;
//     value:string;
// }

const initialFormData={
    source:"",
    amount:"",
    date:""
}


const Income = () => {

    const[formData, setFormData] = useState(initialFormData)
    const[showList, setShowList]=useState(false)
    // const[source, setSource]=useState(initialFormData)
    // const[amount, setAmount]=useState(2000)
    // const[date, setDate]=useState(new Date().toDateString())

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
      };

   
  return (
    <>
    <h2>Income:</h2>
    <div className='incomeContainer'>
    <form onSubmit={onSubmit} >
    <input onChange={onChange} type="text" id='source' placeholder='Income Source' value={formData.source}  />
    <input onChange={onChange} type="text" id='amount' placeholder='Amount' value={formData.amount} />
    <input onChange={onChange} type="date" id = 'date' value={formData.date} />
    <button type="submit" id='btn' >Add Income</button>
    </form>
    </div>
    
    <div className='incomeStatement'>
        <h2>Income Statement</h2>
        <ul>
        { showList ? <li> {formData.source}, {formData.amount}, {formData.date} </li>:""}
        
        </ul>
    </div>
    </>
  )
}

export default Income