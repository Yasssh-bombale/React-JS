import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/TodoSlice";
const TodoForm = () => {
  const [todoMsg, setTodoMsg] = useState("");
  // console.log(todoMsg);

  const dispatch = useDispatch();
  // ! useDispatch() is used to store data from components to redux store;and here dispatch is an method which accepts an reducer as parameter ;which may be an addTodo and deleteTodo from todoSlice.js;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(todoMsg));
    setTodoMsg("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex ">
        <input
          type="text"
          placeholder="enter todo"
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          className="outline-none w-full p-2 rounded-s-md"
          required
        />
        <button type="submit" className="bg-green-400 px-6 py-1 rounded-e-md ">
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
