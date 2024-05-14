import Button from "../../components/button"
import TaskItem from "../../components/taskItem"
import "./Tasks.css"
import TextInput from "../../components/textInput"

const Tasks=()=>{
    
    return(
        <div className="tasks">
            <h4 className="header">Tasks Page</h4>
            <div className="add-task"> 
            <TextInput/>
            <Button name="ADD TASK" onClick={()=>{console.log("add task")}}/>
            </div>
            <TaskItem taskName="Task 1" status={"Completed"} />
            <TaskItem taskName="Task errfrrerffeeweweewe errfrrerffeeweweewe errfrrerffeeweweewee" status={"Pending"} />
        </div>
    )
}
export default Tasks