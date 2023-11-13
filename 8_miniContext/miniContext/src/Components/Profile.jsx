import React, { useContext } from "react";
import UserContext from "../Context/userContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please login first</div>;

  return <div>Welcome {user} logged in successfully</div>;
};

export default Profile;
