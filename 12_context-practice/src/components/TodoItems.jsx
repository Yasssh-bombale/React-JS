import React, { useState } from "react";
import { useTodo } from "../contexts/todoContexts";

const TodoItems = ({ todo }) => {
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [todoIsEditable, setTodoIsEditable] = useState(false);

  const { toggleComplete, deleteTodo, updateTodo } = useTodo();

  const completeHandler = () => {
    toggleComplete(todo.id);
  };

  const editTodo = () => {
    if (todoIsEditable) {
      updateTodo(todo.id, todoMsg);
      setTodoIsEditable(false);
    } else {
      setTodoIsEditable((prev) => !prev);
    }
  };

  return (
    <div
      className={` w-full flex  gap-2 items-center p-2 rounded-xl ${
        todo.isCompleted
          ? "bg-[#00FF7F]  duration-300"
          : "bg-[#FFF0F5] duration-300"
      } `}
    >
      <input
        type="checkbox"
        onClick={completeHandler}
        className={`w-4 h-4 ${
          todoIsEditable ? "cursor-not-allowed" : "cursor-pointer"
        } `}
        disabled={todoIsEditable}
      />
      <input
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        className={`bg-transparent  outline-none  w-full  p-1 text-xl text-center ${
          todo.isCompleted ? "line-through text-slate-500" : ""
        } ${
          todoIsEditable ? "border border-black bg-white" : "border-transparent"
        } `}
        readOnly={!todoIsEditable}
      />
      {/* button for save and edit */}
      <button
        onClick={editTodo}
        className={`px-1 py-1 bg-[#FEFEFA] rounded-lg ${
          todo.isCompleted ? "cursor-not-allowed" : "cursor-pointer"
        } `}
        disabled={todo.isCompleted}
      >
        {todoIsEditable ? "📁" : "✏️"}
      </button>
      {/* button for delete todo */}
      <button
        className="px-1 py-1 bg-[#FEFEFA] rounded-lg  "
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
};

export default TodoItems;
