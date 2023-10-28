import React, { useState } from "react";

export const TaskForm = (props) => {
  const [todo, setTodo] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (todo !== "") {
      props.addMicrotask(todo);
      setTodo("");
    }
  };

  return (
    <form onSubmit={submitHandler} className="flex items-center gap-5 mt-1">
      <input
        type="text"
        placeholder="Enter the microtask"
        value={todo}
        className="text-base text-mainGreen border-2 border-mainGreen p-2 w-2/3 rounded-md"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button
        type="submit"
        className="text-base bg-mainGreen border-2 border-mainGreen text-white p-2 rounded-md hover:text-mainGreen hover:bg-white"
      >
        Add task
      </button>
    </form>
  );
};
