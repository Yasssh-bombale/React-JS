import "./App.css";
import AddBills from "./Components/AddBills";
import Bills from "./Components/Bills";
import "./styles/Todo.scss";
import "./styles/AddTodo.scss";
function App() {
  return (
    <>
      <h1>Electricity billing App</h1>
      <AddBills />
      <Bills />
    </>
  );
}

export default App;
