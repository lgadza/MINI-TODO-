import { useState } from "react"

const TextInput=()=>{
    const [task,setTask]=useState("")
    console.log(task)
    return (
        <>
        <input type="text" name="add-task" className="text-input" onClick={(e)=>setTask(e.target.value)} placeholder="Add Task Here"/>
        </>
    )
}
export default TextInput