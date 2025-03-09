import React from "react";
import Link from "next/link";
import { Button } from "antd";

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-lg w-full">
        <h2 className="text-4xl font-bold text-gray-800">Welcome Home</h2>
        <p className="text-gray-600 mt-4 text-lg">
          Explore our amazing dashboard for more insights.
        </p>
        <Link href="/dashboard">
          <Button type="primary" className="mt-6 px-6 py-3 text-lg">
            Go to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(Home);
