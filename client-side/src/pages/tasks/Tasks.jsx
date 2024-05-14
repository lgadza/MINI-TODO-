import TaskItem from "../../components/taskItem"
import "./Tasks.css"
import TextInput from "../../components/textInput"
import { useEffect, useState } from "react"
import { getTasks } from "../../utils/actions"
import { Spinner } from "react-bootstrap"
import Search from "../../components/search"

const Tasks=()=>{
    const [tasks,setTasks]=useState([])
    const [isLoading,setIsLoading]=useState(false)
     const [sortOrder, setSortOrder] = useState('newest'); 
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');


    const handleSearch = async(searchTerm) => {
            try{
              const response=  await getTasks(searchTerm, sortOrder,startDate,endDate)
                setTasks(response)
                console.log(tasks)
            }catch(err){console.log(err)}
    };
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
            <div className="d-flex align-items-center justify-content-between">
            <h4 className="header">Tasks Page</h4>
            <Search onSearch={handleSearch}/>
            <div>
            <select className="search-input" value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
            </select>
            <input type="date" value={startDate} className="search-input" onChange={e => setStartDate(e.target.value)} />
            <input type="date" value={endDate} className="search-input" onChange={e => setEndDate(e.target.value)} />
            </div>
            </div>
            <TextInput  onTaskAdd={(handleFetchTasks)}/>
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
export default Tasks