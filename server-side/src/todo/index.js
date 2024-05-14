import express from 'express';
import {v4 as uuid} from 'uuid';
const TaskRouter=express.Router();
let todoList=[]
TaskRouter.get('/',(req,res)=>{
    try{
        res.send(todoList)
    }catch(err){
        console.log(err)
        res.status(err.status || 500).send(err.message)
    }
})
TaskRouter.get('/:id',(req,res)=>{	
    const id=req.params.id
    try{
        const task=todoList.find(task=>task.id===id)
        if(!task){
            res.status(404).send(`Task with id ${req.params.id} not found`)
        }
        res.send(task)
    }catch(err){
        console.log(err)
        res.status(err.status || 500).send(err.message)
    }
})
TaskRouter.post('/',(req,res)=>{
    const newTask=req.body
    newTask.id=uuid()
    console.log(newTask)
    try{
        todoList.push(newTask)
        res.send(todoList)
    }catch(err){
        console.log(err)
        res.status(err.status || 500).send(err.message)
    }
});
TaskRouter.put('/:id',(req,res)=>{
    const id=req.params.id
    try{
      const foundTask=  todoList.filter(task=>task.id===id)
      if(!foundTask){
        res.status(400).send(`Task with id ${req.params.id} not found`)
      }
      const updatedTask={...foundTask,...req.body}
      res.status(300).send(updatedTask)
    }catch(err){
        console.log(err)
        res.status(err.status || 500).send(err.message)
    }
})
export default TaskRouter;