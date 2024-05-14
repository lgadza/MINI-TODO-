import { useState } from "react"
import Button from "./button"
import { postNewTask } from "../utils/actions"

const TextInput=({onTaskAdd})=>{
    const [task,setTask]=useState("")
    const [isLoading,setIsLoading]=useState(false)
    const handleAddTask=async()=>{
        setIsLoading(true)
        await  postNewTask({
            task_name:task,
            status:"Pending"
        })
        onTaskAdd()
        setTask("")
        setIsLoading(false)
        console.log("add task")
        
    }
    return (
        <div className="add-task">
        <input 
        type="text" 
        name="add-task" 
        value={task} 
        className="text-input" 
        onChange={(e)=>setTask(e.target.value)}
        placeholder="Add Task Here"/>
        <Button name="ADD TASK" handleClick={handleAddTask} isLoading={isLoading} isDisabled={task===""}/>
        </div>
    )
}
export default TextInput