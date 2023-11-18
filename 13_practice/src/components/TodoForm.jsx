import React from "react";

const TodoForm = () => {
  return (
    <form>
      <div className="flex w-[50%] border p-2 m-auto">
        <input type="text" className="w-full" placeholder="enter name" />
        <button className=" px-6 bg-green-400">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
