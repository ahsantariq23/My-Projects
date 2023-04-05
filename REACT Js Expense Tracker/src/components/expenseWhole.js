import './expense-whole-wrap.css'
import Card from './card';
import Expenses from './expenseitem'
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpenseRender from "./ExpenseRender"

function ExpenseWhole(props)
{
const [year,setYear]=useState("2020")

let onFilterHandler=(yearReceived)=>  //receiving year from component expense filter
{
setYear(yearReceived);

}

let filtered=props.items.filter((item)=>{
      return item.date.toLocaleString("en-US",{year:"numeric"})==year;
      })


      let expensesContent=<p style={{ color: 'gray', fontStyle: 'italic' }}>No Expenses here</p>;
      if(filtered.length>0){
            expensesContent=filtered.map((expense)=>{
          
                  return(
                    <Expenses 
        
                  key={expense.id}
                  amount={expense.amount}
                  title={expense.title}
                  date={expense.date}> 
                  
                    </Expenses>
        
                    )
        
              })
      }


    return (
      <div >
<Card className='expenses'>

<ExpensesFilter onChangeFilter={onFilterHandler} selected={year}></ExpensesFilter>
<ExpenseRender items={filtered} />



</Card>
</div>
      )
}
export default ExpenseWhole;