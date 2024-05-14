import TaskItem from "../../components/taskItem"
import "./Tasks.css"
import TextInput from "../../components/textInput"
import { useEffect, useState } from "react"
import { getTasks } from "../../utils/actions"
import { Spinner } from "react-bootstrap"

const Tasks=()=>{
    const [tasks,setTasks]=useState([])
    const [isLoading,setIsLoading]=useState(false)

    const handleFetchTasks=async()=>{
        setIsLoading(true)
        try{
           const response= await getTasks()
            setTasks(response)
            setIsLoading(false)
        }catch(err){
            console.log(err)
            setIsLoading(false)
        }
    }
    useEffect(()=>{
        handleFetchTasks()
    },[])
    return(
        <div className="tasks">
            <h4 className="header">Tasks Page</h4>
            <TextInput/>
            {
                tasks && tasks.length>0 && tasks.map((task,index)=>(
                    <TaskItem taskName={task.task_name} status={task.status} key={index} id={task.id} />
                ))
            }
            {!tasks && !isLoading && (<h6 className="py-2">No TODO found!</h6>)}
            {isLoading && (<Spinner animation="border"/>)}
        </div>
    )
}
export default Tasks