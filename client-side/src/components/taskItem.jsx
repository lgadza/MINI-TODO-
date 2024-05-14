import Button from "./button"

const TaskItem=()=>{
    const handleDelete=()=>{
        console.log("delete")
    }
    return(
        <div className="task-item-container">
            <li className="task-item">
                <input type="checkbox" />
                <span>Task 1</span>
                <span>Completed</span>
                <Button name="DELETE" handleClick={handleDelete}/>
            </li>
        </div>
    )
}
export default TaskItem