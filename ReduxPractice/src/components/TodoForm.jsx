import React from "react";

const TodoForm = () => {
  return (
    <form>
      <div className="flex ">
        <input
          type="text"
          placeholder="enter todo"
          className="outline-none w-full p-2 rounded-s-md"
          required
        />
        <button className="bg-green-400 px-6 py-1 rounded-e-md ">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
