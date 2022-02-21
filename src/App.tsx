import React, { useState } from 'react';
import { Ishaqo } from './Interfaces';
import './App.css';

 interface Taskss {
   id:number,
   shaqo:string
 }

 let count = 1


const App:React.FC = ()=> {
  const [task, setTask] = useState<string>("")
  console.log(task)
  const [todo, setTodo] = useState<string[]>([])
  console.log(todo)

 const ADD = ():void=>{
  //  const list = [{...todo,id:count++}]  
  setTodo([...todo, task])
  setTask("")
 }

  
  return (
    <div className="App">      
    <h1>Simple Todo List</h1>
    <div className='Header'>
       <input type='text' placeholder='Add task' value={task} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setTask(e.target.value)}/>
      <button onClick={ADD}>ADD</button>
    </div>
    <h3>Tasks</h3>
    {todo.map((taskss)=>
   <div className='todoList' >
      <p>{taskss}</p>
      <button className='btn-delete'>Delete</button>
      <button className='btn-done'>Done</button>
    </div> 
    )}
    
    
     
    </div>
  );
}

export default App;
