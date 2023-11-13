import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  return (
    <div className="flex justify-center bg-slate-500">
      <h2 className=" text-white p-6 text-2xl w-[50%] text-center rounded-lg">
        GitHub = Followers : {data.followers}
      </h2>
      <img
        className="rounded-full w-80"
        src={data.avatar_url}
        alt="profile.pic"
      />
    </div>
  );
};
export const fetchUsers = async () => {
  const { data } = await axios.get(
    "https://api.github.com/users/Yasssh-bombale"
  );

  console.log(data);
  return data;
};

export default Github;
