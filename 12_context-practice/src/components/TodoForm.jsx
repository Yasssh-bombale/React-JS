import React, { useState } from "react";
import { useTodo } from "../contexts/todoContexts";

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
      <div className="flex  w-[50%] m-auto">
        <input
          type="text"
          placeholder="enter task"
          className="outline-none  w-full p-2 rounded-s-2xl"
          required
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-400 px-5 hover:bg-green-500 rounded-e-2xl"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
