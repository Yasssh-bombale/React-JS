import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumberAllowed) str += "0123456789";
    if (isCharacterAllowed) str += "<>?/`~!@#$%^&*(){}[]_-+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, isNumberAllowed, isCharacterAllowed, setPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumberAllowed, isCharacterAllowed, setPassword]);

  return (
    <>
      <div className="bg-gray-700 text-orange-500 shadow-md max-w-lg rounded-xl px-5 py-2 my-8 mx-auto ">
        <h1 className="text-4xl mb-5  text-white text-center">
          Password Generator
        </h1>
        <div className="flex overflow-hidden mb-4 rounded-lg  ">
          <input
            type="text"
            value={password}
            className="w-full py-1 px-3 outline-none"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold px-5 py-2 rounded-md outline-none shrink-0 
          
          "
            onClick={copyPasswordToClipBoard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-4">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="text-[1.2rem] ml-2 cursor-pointer ">
              {" "}
              Length :{length}
            </label>
          </div>

          <div className="flex gap-x-2 ">
            <div className="flex items-center gap-x-2">
              <input
                className="cursor-pointer"
                type="checkbox"
                value={isCharacterAllowed}
                onChange={() => setIsCharacterAllowed((prev) => !prev)}
              />
              <label className="text-[1.2rem] cursor-pointer">Character</label>
            </div>
          </div>
          <div className="flex gap-x-2 ">
            <div className="flex items-center gap-x-2">
              <input
                className="cursor-pointer"
                type="checkbox"
                value={isNumberAllowed}
                onChange={() => setIsNumberAllowed((prev) => !prev)}
              />
              <label className="text-[1.2rem] cursor-pointer">Number</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
