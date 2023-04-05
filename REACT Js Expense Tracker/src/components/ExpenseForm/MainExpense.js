import "./MainExpense.css"
import ExpenseForm from "./ExpenseForm";
let MainExpense=(props)=>
{

    const expenseChangeHandler=(expenseFormData)=>
    {
        const expenseData=
        {
        ...expenseFormData,
        id:Math.random().toString()
        }
        props.expenseExtract(expenseData);
    }

return(
   
   <div className="new-expense">

    <ExpenseForm onExpenseChange={expenseChangeHandler}/ >

    </div>
)


}

export default MainExpense;