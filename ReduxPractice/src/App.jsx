import { useSelector } from "react-redux";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";

function App() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  // * useSelector() accepts an one callback function in which we are having an state as parameter and access to all states hence in state currently is todos array is present we can acccess it by "state.todos";

  return (
    <div className="border w-full min-h-screen p-5 flex flex-col items-center gap-3">
      <h1 className="text-white text-2xl ">
        Todo Using ReduxToolKit (Practice)
      </h1>
      <div className="border w-[50%] p-1 ">
        <TodoForm />
      </div>

      <div className="border w-[60%] p-2 flex flex-col gap-2">
        {todos.map((todo) => (
          <TodoItems key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
