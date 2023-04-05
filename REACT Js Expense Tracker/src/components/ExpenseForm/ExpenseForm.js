import { useState } from "react"
import "./ExpenseForm.css"
let ExpenseForm=(props)=>
{

//value for input in title is maintained
const [titleChange,setTitleChange]=useState("");

let textchangehandler=(event)=>
{
setTitleChange(event.target.value);
}

//value for input in title is maintained
const [amountChange,setAmount]=useState("");

let amountchangehandler=(event)=>
{
setAmount(event.target.value);
}

//value for input in Date is maintained
const [dateChange,setDate]=useState("");

let datechangehandler=(event)=>
{
setDate(event.target.value);
}



let formHandler=(e)=>
{
e.preventDefault();
const expenseFormData={
title:titleChange,
amount:amountChange,
date:new Date(dateChange)
}

props.onExpenseChange(expenseFormData); //expalain this
//resetting the value after submitting
setAmount("");
setDate("");
setTitleChange("");



}


//date title Amount
return(  
<form onSubmit={formHandler}>

<div className="new-expense__controls">
        <div className="new-expense__control">
<label>Title</label>
<input type="text" value={titleChange} onChange={textchangehandler} />
        </div>


        <div className="new-expense__control">
<label>Amount</label>
<input type="number" value={amountChange} min="0.01" step="0.01" onChange={amountchangehandler}/>
        </div>

        <div className="new-expense__control">
<label>Date</label>
<input type="date" value={dateChange} min="2019-01-01" max="2022-12-31" onChange={datechangehandler}/>
        </div>

      
</div>
  <div className="new-expense__actions">
<button type="submit">Add Expense</button>
        </div>
    </form>

)
}

export default ExpenseForm;