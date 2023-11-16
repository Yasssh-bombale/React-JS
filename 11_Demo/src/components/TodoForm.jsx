import React, { useState } from "react";
import { useTodo } from "../contexts/todoContext";

const TodoForm = () => {
  const [todo, setTodo] = useState();
  // console.log(todo);
  const { addTodo } = useTodo();
  const submitHanler = (e) => {
    e.preventDefault();
    addTodo({ todo, isComplete: false });
    setTodo("");
  };

  return (
    <>
      <input
        className="p-2 outline-none w-full  rounded-s-md "
        type="text"
        placeholder="enter your todos"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        required
      />
      <button
        className="text-white px-7 bg-green-600 rounded-e-md"
        type="submit"
        onClick={submitHanler}
      >
        Add
      </button>
    </>
  );
};

export default TodoForm;
