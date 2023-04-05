import "./card-style.css"
let Card=(props)=>
{
const cardClass='card-style ' + props.className;

return(
<div className={cardClass}>
{props.children} 
</div>
)


}
export default Card;