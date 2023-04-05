import Expenses from "./expenseitem";
function ExpenseRender(props){
    console.log(props.items);
    
      if(props.items.length>0){
        return(
            props.items.map((expense)=>{
          
                  return(
                    <Expenses 
        
                  key={expense.id}
                  amount={expense.amount}
                  title={expense.title}
                  date={expense.date}> 
                  
                    </Expenses>
        
                    )
        
              })
        )
            }
    
      else{
        return(<div>
            <p style={{ color: 'gray', fontStyle: 'italic' }}>No Expenses here</p>;
        </div>)
      }
    
}
export default ExpenseRender;