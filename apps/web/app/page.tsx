import { client } from "@repo/db/client";
import React from "react";

const Home = async () => {

  const user = await client.user.findFirst();
  console.log("user: ", user);

  return <div className="flex items-center gap-4">
    <p>{user?.username}</p>
    <p>{user?.password}</p>
  </div>;
};

export default Home;
