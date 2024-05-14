import express from 'express';
import {v4 as uuid} from 'uuid';
const TaskRouter=express.Router();
let todoList=[]
TaskRouter.get('/',(req,res)=>{
    const { search } = req.query; 
    try{
        let results = todoList;
        if (search) {
            results = results.filter(task => task.task_name.toLowerCase().includes(search.toLowerCase()));
        }
        res.send(results)
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
            res.status(404).send(`Task with id ${id} not found`)
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
    const foundIndex=  todoList.findIndex(task=>task.id===id)
    if(foundIndex===-1){
      res.status(400).send(`Task with id ${id} not found`)
    }
    try{
      todoList[foundIndex]={...todoList[foundIndex], ...req.body}
      res.status(200).send(todoList[foundIndex])
    }catch(err){
        console.log(err)
        res.status(err.status || 500).send(err.message)
    }
})
TaskRouter.delete('/:id',(req,res)=>{
    const id=req.params.id
    try{
        const task=todoList.find(task=>task.id===id)
        if(!task){
            res.status(404).send(`Task with id ${id} not found`)
        }
        todoList.splice(todoList.indexOf(task),1)
        res.send(todoList)
    }catch(err){
        console.log(err)
        res.status(err.status || 500).send(err.message)
    }
})
export default TaskRouter;