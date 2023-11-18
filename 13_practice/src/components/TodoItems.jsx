import React from "react";

const TodoItems = () => {
  return (
    <div className="border w-full bg-pink-200 flex gap-2 items-center p-2">
      <input type="checkbox" className="w-5 h-5" />
      <input
        type="text"
        value={"heythere"}
        className="bg-transparent outline-none border border-black  w-full "
        readOnly
      />
      <button className="bg-white px-1 py-1 rounded-lg">✏️</button>
      <button className="bg-white px-1 py-1 rounded-lg">❌</button>
    </div>
  );
};

export default TodoItems;
