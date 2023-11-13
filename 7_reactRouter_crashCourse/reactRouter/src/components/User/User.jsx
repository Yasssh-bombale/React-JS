import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return (
    <div className="flex justify-center w-full">
      <div className="text-center text-2xl font-semibold w-3/4 bg-gray-500 text-white p-5 rounded-lg">
        User :{userId}
      </div>
    </div>
  );
};

export default User;
