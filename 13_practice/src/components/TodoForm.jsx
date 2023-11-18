import React, { useState } from "react";
import { useTodo } from "../contexts";

const TodoForm = () => {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo();

  const submitHandler = (e) => {
    e.preventDefault();
    addTodo({ todo, isCompleted: false });
    setTodo("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex w-[50%]  p-2 m-auto">
        <input
          type="text"
          className="w-full"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="enter name"
        />
        <button className=" px-6 bg-green-400">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
