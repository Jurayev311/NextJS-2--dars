import React from 'react';

const Dashboard = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const payload = await data.json();

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Dashboard Posts
        </h1>
        <div className="grid gap-6">
          {payload?.slice(0, 15).map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md hover:shadow-lg transition-all border border-gray-200 rounded-2xl p-6 flex flex-col gap-3"
            >
              <h2 className="text-xl font-semibold text-gray-900 capitalize">{post.title}</h2>
              <p className="text-gray-700 line-clamp-1">{post.body}</p>
              <button className="cursor-pointer mt-auto bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
