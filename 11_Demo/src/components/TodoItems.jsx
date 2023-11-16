import React, { useState } from "react";
import { useTodo } from "../contexts/todoContext";

const TodoItems = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleTodo } = useTodo();

  const todoComplete = () => {
    toggleTodo(todo.id);
  };

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  return (
    <div
      className={`w-full border text-slate-950  rounded-md  p-3 flex items-center gap-1  ${
        todo.isComplete ? "bg-green-400 duration-300" : "bg-pink-200"
      } `}
    >
      <input
        type="checkbox"
        className={`h-4 w-4 hover:cursor-pointer outline-none rounded-md ${
          isTodoEditable ? "hover:cursor-not-allowed" : ""
        } `}
        value={todo.isComplete}
        onClick={todoComplete}
        disabled={isTodoEditable}
      />
      <input
        className={`w-full bg-transparent outline-none text-xl p-1 ${
          isTodoEditable
            ? "border border-black bg-white duration-300"
            : "border-transparent duration-200"
        }  ${todo.isComplete ? "line-through text-slate-500" : ""} `}
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className={`bg-white px-1 py-1 rounded-md mr-2  ${
          todo.isComplete ? "hover:cursor-not-allowed" : ""
        } `}
        onClick={() => {
          if (todo.isComplete) return;
          if (isTodoEditable) {
            editTodo();
          } else {
            return setIsTodoEditable((prev) => !prev);
          }
        }}
        disabled={todo.isComplete}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      <button
        className="bg-white px-1 py-1 rounded-md  "
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
};

export default TodoItems;
