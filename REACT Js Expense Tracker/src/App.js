
import ExpenseWhole from "./components/expenseWhole"
import MainExpense from "./components/ExpenseForm/MainExpense";
import { useState } from "react";
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
  id: 'e2',
  title: 'New TV',
  amount: 799.49,
  date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
 

  let[expenses,setexpenses]=useState(DUMMY_EXPENSES);

let expenseExtractHandler = (expensesHere)=>
{
  setexpenses((prevExpenses)=>{
    return[expensesHere,...prevExpenses]
  });
console.log(expensesHere);
}

  return (
    <div>
   <MainExpense expenseExtract={expenseExtractHandler} />
   <ExpenseWhole items={expenses}></ExpenseWhole>
    </div>
  )
}

export default App;
