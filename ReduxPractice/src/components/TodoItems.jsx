import React from "react";

const TodoItems = () => {
  return (
    <div className="border rounded-md p-2 bg-[#FFDAE9] flex items-center gap-2 ">
      <input type="checkbox" className="h-5 w-5 " />

      <input
        className="outline-none p-1 w-full text-[20px] font-[cursive] font-semibold"
        type="text"
        value={"heyThere"}
        readOnly
      />

      <button className="bg-[#FEFEFA] px-1 py-1 rounded-md">✏️</button>
      <button className="bg-[#FEFEFA] px-1 py-1 rounded-md">❌</button>
    </div>
  );
};

export default TodoItems;
