import React, { useState } from "react";
import { useTodo } from "../contexts";

const TodoItems = ({ todo }) => {
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const { deleteTodo, updateTodo, toggleTodo } = useTodo();

  const updateHandler = () => {
    if (isTodoEditable) {
      updateTodo(todo.id, todoMsg);
      setIsTodoEditable(false);
    } else {
      setIsTodoEditable((prev) => !prev);
    }
  };

  const checkBoxHandler = () => {
    toggleTodo(todo.id);
  };
  return (
    <div
      className={` w-full ${
        todo.isCompleted
          ? "bg-green-400 duration-300"
          : "bg-pink-200 duration-300"
      } flex gap-2 items-center p-2`}
    >
      <input type="checkbox" onClick={checkBoxHandler} className="w-5 h-5" />
      <input
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        className={` outline-none   w-full
        ${isTodoEditable ? "bg-white border border-black" : "bg-transparent"}
        ${todo.isCompleted ? "line-through text-slate-500 duration-300" : ""} `}
        readOnly={!isTodoEditable}
      />
      <button className="bg-white px-1 py-1 rounded-lg" onClick={updateHandler}>
        {isTodoEditable ? "📁" : "✏️ "}
      </button>
      <button
        className="bg-white px-1 py-1 rounded-lg"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
};

export default TodoItems;
