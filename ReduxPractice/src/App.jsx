import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";

function App() {
  return (
    <div className="border w-full min-h-screen p-5 flex flex-col items-center gap-3">
      <h1 className="text-white text-2xl ">
        Todo Using ReduxToolKit (Practice)
      </h1>
      <div className="border w-[50%] p-1 ">
        <TodoForm />
      </div>

      <div className="border w-[60%] p-2">
        <TodoItems />
      </div>
    </div>
  );
}

export default App;
