
const Button=({name, handleClick})=>{
    return(
        <button className="button" onClick={(handleClick)}>
            {name}
        </button>
    )
}
export default Button