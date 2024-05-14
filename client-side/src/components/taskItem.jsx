import { deleteTask, getTasks, updateTask } from "../utils/actions"
import Button from "./button"

const TaskItem=({task, onTaskListChange})=>{
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
        
    const handleEdit=async()=>{
        const {task_name,status}=task
    }
    return(
        <div className="task-item-container">
            <input 
            type="checkbox" 
            className="task-checkbox" 
            onClick={handleStatusUpdate} 
            checked={task.status==="Completed"}/>
        {task &&<li className="task-item">
                    <span className="task-name">{task.task_name}</span>
                    <span className="task-status">{task.status}</span>
                    <Button name="EDIT" handleClick={handleEdit}/>
                    <Button name="DELETE" handleClick={handleDelete}/>
                </li>
        }
        </div>
    )
}
export default TaskItem