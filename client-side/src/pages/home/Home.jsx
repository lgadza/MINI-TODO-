import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import TaskItem from "../../components/taskItem";
import { getTasks } from "../../utils/actions";

const Home=()=>{
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
            <div className="home">
                <div className="d-flex align-items-center justify-content-between">
                <h4 className="header">Home Page</h4>
                </div>
                {isLoading && (<Spinner animation="border"/>)}
                {
                    tasks && tasks.length>0  && tasks.map((task,)=>(
                        <TaskItem 
                        task={task} 
                        key={task.id} 
                        onTaskListChange={(handleFetchTasks)}/>
                    ))
                }
                {tasks.length===0 && !isLoading && (<h6 className="py-2">No TODO found!</h6>)}
            </div>
    )
}
export default Home

