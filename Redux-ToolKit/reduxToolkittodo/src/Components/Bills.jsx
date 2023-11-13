import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {todos.map((i) => (
          <>
            <li key={i.id}>
              {` Customer:${i.text}, MeterNo:${i.MeterNo} , Email:${i.email}, Address:${i.address} , bills: ${i.bill}₹`}

              <button onClick={() => dispatch(removeTodo(i.id))}>X</button>
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

export default Todos;
