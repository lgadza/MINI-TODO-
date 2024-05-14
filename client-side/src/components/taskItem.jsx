import { useState } from "react";
import { deleteTask, getTasks, updateTask } from "../utils/actions"
import Button from "./button"

const TaskItem=({task, onTaskListChange})=>{
    const [isEditing, setIsEditing] = useState(false);
    const [editedTaskName, setEditedTaskName] = useState(task.task_name);
    const handleDelete=async()=>{
        console.log("delete")
        try{
            await deleteTask(task.id)
            onTaskListChange()
            getTasks()
        }catch(err){
            console.log(err)
        } }
        const handleStatusUpdate = async () => {
            const updatedTask = {
                ...task,
                status: task.status === "Completed" ? "Pending" : "Completed"
            };
        
            try {
                await updateTask(updatedTask.id, updatedTask); 
                onTaskListChange();  
            } catch (err) {
                console.log("Error updating task status:", err);
            }
        };
        
        const handleEdit = async () => {
            if (isEditing) {
                try {
                    const updatedTask = { ...task, task_name: editedTaskName };
                    await updateTask(task.id, updatedTask);
                    onTaskListChange();
                    setIsEditing(false); 
                } catch (err) {
                    console.log("Error updating task:", err);
                }
            } else {
                setIsEditing(true); 
            }
        };
        const handleChange = (event) => {
            setEditedTaskName(event.target.value);
        };
    return(
        <div className="task-item-container">
            <input 
            type="checkbox" 
            className="task-checkbox" 
            onClick={handleStatusUpdate} 
            checked={task.status==="Completed"}/>
        {task &&<li className="task-item">
        {isEditing ? (
                <input 
                    type="text" 
                    value={editedTaskName} 
                    onChange={handleChange} 
                    onBlur={handleEdit} 
                    autoFocus
                />
            ):(
                    <span className="task-name">{task.task_name}</span>
            )}
                    <span className="task-status">{task.status}</span>
                    {isEditing? 
                    (<Button name="SAVE" handleClick={handleEdit}/>):(

                        <Button name="EDIT" handleClick={handleEdit}/>
                    )}
                    <Button name="DELETE" handleClick={handleDelete}/>
                </li>
        }
        </div>
    )
}
export default TaskItem