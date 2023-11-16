import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";
import { TodoProvider } from "./contexts/todoContext";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, isComplete: !prevTodo.isComplete }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todos"));

    if (todo && todo.length > 0) {
      return setTodos(todo);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}
    >
      <div className="w-full min-h-screen border-2 ">
        <h2 className="text-2xl text-white">Demo react app</h2>
        <h1 className="text-2xl bg-slate-500 text-white rounded-lg p-2">
          Todo Using ContextApis
        </h1>
        <div className="w-[70%]  m-auto flex mt-3">
          <TodoForm />
        </div>

        <div className="w-[80%] border m-auto mt-4 p-5 flex flex-col gap-4">
          {todos.map((todo) => (
            <TodoItems key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
