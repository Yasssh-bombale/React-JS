import React, { useContext } from "react";

import { Context } from "../main";

const Row = () => {
  const data = useContext(Context);
  return <h1>{data}</h1>;
};

const Home = () => {
  return (
    <div>
      <Row />
    </div>
  );
};

export default Home;
