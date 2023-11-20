import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../features/Todo/TodoSlice";

const TodoItems = ({ todo }) => {
  const [input, setInput] = useState(todo.todoMsg);

  // console.log(`todo msgs are ${todo.todoMsg}`);

  const dispatch = useDispatch();
  const checkBoxHandler = () => {
    dispatch(toggleTodo(todo.id));
  };
  return (
    <div className="border rounded-md p-2 bg-[#FFDAE9] flex items-center gap-2 ">
      <input type="checkbox" className="h-5 w-5 " onClick={checkBoxHandler} />

      <input
        className="outline-none p-1 w-full text-[20px] font-[cursive] font-semibold"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        readOnly
      />

      <button className="bg-[#FEFEFA] px-1 py-1 rounded-md">✏️</button>
      <button
        className="bg-[#FEFEFA] px-1 py-1 rounded-md"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        ❌
      </button>
    </div>
  );
};

export default TodoItems;
