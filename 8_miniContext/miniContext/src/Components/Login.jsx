import React, { useContext, useState } from "react";
import UserContext from "../Context/userContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setpassword] = useState("");

  const { setUser } = useContext(UserContext);
  const submitHandler = (e) => {
    e.preventDefault();
    setUser(userName, password);
  };

  return (
    <div>
      <h2>login</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="userName"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={submitHandler}></button>
    </div>
  );
};

export default Login;
