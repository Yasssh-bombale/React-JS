import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";
import { TodoContextProvider } from "./contexts";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, todo: todo } : prevTodo
      )
    );
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, isCompleted: !prevTodo.isCompleted }
          : prevTodo
      )
    );
  };

  return (
    <TodoContextProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleTodo }}
    >
      <div className=" w-full min-h-screen">
        <h1 className="bg-white rounded-2xl p-2 text-xl">
          Todo Using an context apis
        </h1>

        <TodoForm />

        <div className="w-[70%]  mt-5 flex flex-col gap-5 m-auto p-2">
          {todos.map((todo) => (
            <TodoItems key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
