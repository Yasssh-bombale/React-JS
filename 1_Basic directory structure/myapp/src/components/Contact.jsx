import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("Initial value");
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input type="email" placeholder="Email" />
      </form>

      <button onClick={() => console.log(name)}>press</button>
      <p>{name}</p>
    </div>
  );
};

export default Contact;
