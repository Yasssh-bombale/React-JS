import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
      console.log(`Value added ${counter}`);
    } else {
      return console.log(`Value can not be greater than 20`);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      console.log(`Removed Counter Value :${counter}`);
      counter = counter - 1;
      setCounter(counter);
    } else {
      return console.log(`Value can not be below 0 or negative`);
    }
  };

  return (
    <>
      <h1>React Hooks</h1>
      <h2>Counter Value : {counter}</h2>

      <h3>* Value Greater than 20 Not Accepted *</h3>
      <button onClick={addValue}>Add Value {counter} </button>
      <br />

      <h3> * Negative Values can Not be Accepted * </h3>
      <button onClick={removeValue}>Remove Value {counter} </button>

      <p>Footer : {counter} </p>
    </>
  );
}

export default App;
