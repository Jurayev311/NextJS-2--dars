import Post from '@/components/Post';
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
        <Post payload={payload} />
      </div>
    </div>
  );
};

export default Dashboard;
