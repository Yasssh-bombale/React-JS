import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
const AddTodo = () => {
  const [input, setInput] = useState("");
  const [meterNo, setMeterNo] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [bill, setBill] = useState("");

  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input, meterNo, email, address, bill));
    setInput("");
    setMeterNo("");
    setAddress("");
    setBill("");
    setEmail("");
  };

  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="Custome Name"
        required={true}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input
        type={"text"}
        placeholder="MeterNo"
        required={true}
        value={meterNo}
        onChange={(e) => setMeterNo(e.target.value)}
      />
      <input
        type={"email"}
        placeholder="Email"
        required={true}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type={"text"}
        placeholder="address"
        required={true}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type={"text"}
        placeholder=" $ Bills"
        required={true}
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
      <button type={"submit"}>Add details</button>
    </form>
  );
};

export default AddTodo;
