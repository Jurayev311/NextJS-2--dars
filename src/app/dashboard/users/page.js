import React from "react";

const Users = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const payload = await data.json();

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Users List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {payload.map((user) => (
          <div
            key={user.id}
            className="border border-gray-200 rounded-lg shadow-lg bg-gradient-to-br from-white to-gray-100 p-6 
              hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 
              flex flex-col justify-between min-h-[250px]"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
              <p className="text-gray-600 mt-2">
                <strong className="text-gray-900">Email:</strong>
                <span className="text-blue-500"> {user.email}</span>
              </p>
              <p className="text-gray-600 mt-1">
                <strong className="text-gray-900">Phone:</strong>
                <span className="text-green-500"> {user.phone}</span>
              </p>
              <p className="text-gray-600 mt-1">
                <strong className="text-gray-900">Company:</strong>
                <span className="italic"> {user.company.name}</span>
              </p>
            </div>
            <button className="cursor-pointer mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
