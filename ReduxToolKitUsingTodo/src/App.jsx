import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <h1 className="bg-slate-600 text-2xl">Redux Toolkit Using Todo</h1>
      <AddTodo />
      <Todo />
    </>
  );
}

export default App;
