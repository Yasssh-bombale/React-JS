import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-3xl font-mono font-bold mb-4">
        Tailwind Test
      </h1>
      <Card userName={"YashuBombale"} btnText={"Login"} />
      <Card />
    </>
  );
}

export default App;
