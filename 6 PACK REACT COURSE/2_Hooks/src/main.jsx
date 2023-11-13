import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
const Context = createContext();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context.Provider value={"Yassshu"}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

export { Context };
