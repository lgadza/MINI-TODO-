import Button from "./button"

const TaskItem=({taskName, status})=>{
    const handleDelete=()=>{
        console.log("delete")
    }
    return(
        <div className="task-item-container">
            <input type="checkbox" className="task-checkbox" />
            <li className="task-item">
                <span className="task-name">{taskName}</span>
                <span className="task-status">{status}</span>
                <Button name="DELETE" handleClick={handleDelete}/>
            </li>
        </div>
    )
}
export default TaskItem