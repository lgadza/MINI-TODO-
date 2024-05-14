import {Spinner} from "react-bootstrap"
const Button=({name, handleClick,isLoading,isDisabled})=>{
    return(
        <button className="button" onClick={(handleClick)} disabled={isDisabled}>
            {isLoading? <Spinner animation="border"/>:<>{name}</>}
        </button>
    )
}
export default Button