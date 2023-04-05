import ExpenseDate from "./ExpenseDate";
import "./expenseitem.css"
import { useState } from "react";
import Card from "./card";
import MainExpense from "./ExpenseForm/MainExpense";

let Expenses=({date,amount,title})=>
{



return(
    <Card className="expense-item">

       <ExpenseDate date={date}/>

        <div className="expense-item__description">

        <h2 >{title}</h2>
        <div className="expense-item__price">{amount}</div>
     </div>

    </Card>
)

}

export default Expenses;
