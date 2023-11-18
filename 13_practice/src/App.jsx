import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";

function App() {
  return (
    <>
      <div className="border w-full min-h-screen">
        <h1 className="bg-white rounded-2xl p-2 text-xl">
          Todo Using an context apis
        </h1>

        <TodoForm />

        <div className="w-[70%] border mt-5 m-auto p-2">
          <TodoItems />
        </div>
      </div>
    </>
  );
}

export default App;
