import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from 'react';
import { TaskDisplay } from "../components/TaskDisplay";
import { TaskForm } from "../components/TaskForm";



function Addwork() {
  const [microTask,setMicroTask] = useState([]);

  const addMicrotask = (microTaskText) =>{
    const newMicrotask ={ id:uuidv4(), task: microTaskText ,completed: false}
    setMicroTask([...microTask,newMicrotask])
  }
  
  const toggleComplete = (id) =>{
    const updatedMicrotask = microTask.map((tk)=>
    tk.id==id ? {...tk,completed: !tk.completed} : tk
    )
    setMicroTask(updatedMicrotask)
  }

  const deleteMicrotask = (id) => {
    const updatedMicrotask = microTask.filter((tk) => tk.id !== id);
    setMicroTask(updatedMicrotask);
  }; //Delete function is disabled in the application for the time being , it can be enabled by uncommenting the 9th line of the file 'TaskDisplay.jsx
 
 
  return ( 
   <div className="Microtaskwrap ml-6">
    <h1>Microtasks</h1>
    <TaskForm addMicrotask={addMicrotask} />
    {microTask.map((tk) => 
    {
    return (
      <div key={tk.id}>
        <TaskDisplay
          completed={tk.completed}
          itemid={tk.id}
          item={tk.task}
          toggleComplete={toggleComplete}
          deleteMicrotask={deleteMicrotask}
        />
      </div>)
  
})}
   </div>
 )
 ;
}

export default Addwork;
