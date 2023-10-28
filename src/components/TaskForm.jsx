import React, { useState } from 'react';

export const TaskForm = (props) => {
  const [todo, setTodo] = useState(""); 

  const submitHandler = (e) => {
    e.preventDefault();
    props.addMicrotask(todo);
    setTodo(""); 
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter the microtask"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button type="submit">Add task</button>
    </form>
  );
}
