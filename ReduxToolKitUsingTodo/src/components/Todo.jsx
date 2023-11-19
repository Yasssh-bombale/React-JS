import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <h2>todos</h2>
      {todos.map((todo) => (
        <div>
          <li key={todo.id}> {todo.text}</li>
          <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
        </div>
      ))}
    </>
  );
};

export default Todo;
