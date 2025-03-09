import UserList from "@/components/UsersList";
import React from "react";

const Users = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const payload = await data.json();

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Users List
      </h1>
      <UserList payload={payload}/>
    </div>
  );
};

export default Users;
