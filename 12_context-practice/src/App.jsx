import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";
import { TodoContextProvider } from "./contexts/todoContexts";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, isCompleted: !prevTodo.isCompleted }
          : prevTodo
      )
    );
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

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      return setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTodo, toggleComplete, deleteTodo, updateTodo }}
    >
      <div className="w-full min-h-screen ">
        <h1 className="bg-white rounded-2xl text-2xl mb-5 ">
          Todo Using Context'Apis
        </h1>

        {/* todoFrom starts here  */}
        <TodoForm />
        {/* TodoForm Ends Here  */}
        {/* TodoItems starts here  */}
        <div className=" w-[70%] mt-5 m-auto p-4  flex flex-col gap-4">
          {todos.map((todo) => (
            <TodoItems key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </TodoContextProvider>
  );
}
export default App;
