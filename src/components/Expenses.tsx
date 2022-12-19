import React, { useState } from 'react'

const initialFormData={
  title:"",
  amount:"",
  date:""
}

const Expenses = ({setChildProp}:any) => {
  const[formData, setFormData] = useState(initialFormData)
  const[showList, setShowList]=useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
    if(e.target.id ==="amount"){
      setChildProp(e.target.value)
  }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();  
    setFormData(formData);
    setShowList(true)
  };
 
return (
  <>
  <h2>Expenses:</h2>
  <div className='incomeContainer'>
  <form onSubmit={onSubmit} >
  <input onChange={onChange} type="text" id='source' placeholder='Expenses title'   />
  <input onChange={onChange} type="number" id='amount' placeholder='Amount' value={formData.amount} />
  <input onChange={onChange} type="date" id = 'date' value={formData.date} />
  <button type="submit" id='btn' >Add Expenses</button>
  </form>
  </div>
  
  <div className='incomeStatement'>
      <h2>Income Statement</h2>
      <ul>
      { showList ? <li> {formData.title}, {formData.amount}, {formData.date} </li>:""}
      </ul>
  </div>
  </>
)
}

export default Expenses