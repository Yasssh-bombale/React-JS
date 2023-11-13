import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  const [textColor, setTextColor] = useState("white");
  return (
    <div
      className="w-full h-screen duration-300 "
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed bottom-16
      flex  justify-center inset-x-0 px-2
     
      "
      >
        <div className="flex flex-wrap justify-center gap-3 bg-white px-2 py-3 rounded-lg">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-3 py-2 rounded-full bg-red-600 text-white shadow-lg"
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-3 py-2 rounded-full bg-green-600 text-white shadow-lg"
          >
            Green
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-3 py-2 rounded-full bg-yellow-500 text-white shadow-lg"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-3 py-2 rounded-full bg-pink-600 text-white shadow-lg"
          >
            Pink
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-3 py-2 rounded-full bg-blue-600 text-white shadow-lg"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-3 py-2 rounded-full bg-white text-black shadow-lg"
          >
            White
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-3 py-2 rounded-full bg-black text-white shadow-lg"
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

const HeadingCard = () => {
  <>
    <div className="p-6 w-[30%] mx-auto  border-2 rounded-full fixed inset-x-0 top-[40%]">
      <h2
        className="text-center   font-bold text-4xl"
        style={{ color: textColor }}
      >
        Bg Changer
      </h2>
    </div>
  </>;
};
export default App;
