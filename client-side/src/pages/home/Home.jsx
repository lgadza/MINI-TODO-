import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { getTasks } from "../../utils/actions";

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleFetchTasks = async () => {
        setIsLoading(true);
        try {
            const response = await getTasks();
            setTasks(response || []);
            setIsLoading(false);
        
        } catch (err) {
            console.error(err);
            setIsLoading(false);
            setTasks([]);
        }
    };

    useEffect(() => {
        handleFetchTasks();
    }, []);
    
    const completedTasks = tasks.filter(task => task.status === "Completed");
    const pendingTasks = tasks.filter(task => task.status === "Pending");

    return (
        <div className="home">
            <h4 className="header">Home Page</h4>
            {isLoading ? (
                <Spinner animation="border" />
            ) : (
                <div className="d-flex mt-4 justify-content-between">
                    <div className="col">
                        <h5 className="d-flex ms-4">Completed Tasks</h5>
                        {completedTasks.length > 0 ? (
                            completedTasks.map(task => (
                             <li key={task.id} className="text-white ms-4 task-item p-2 mx-2 bg-success">
                                {task.task_name}
                             </li>
                            ))
                        ) : (
                            <p>No completed tasks.</p>
                        )}
                    </div>
                    <div className="col mx-3">
                        <h5 className="d-flex ms-4">Pending Tasks</h5>
                        {pendingTasks.length > 0 ? (
                            pendingTasks.map(task => (
                                <li  key={task.id} className=" my-2 text-white p-2 bg-danger task-item">
                                {task.task_name}
                             </li>
                            ))
                        ) : (
                            <p>No pending tasks.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
