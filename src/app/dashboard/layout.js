import Sidebar from '@/components/Sidebar';
import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      
      <Sidebar />

      <main className="flex-1 p-6 overflow-y-auto">
        <div className="bg-white shadow-md rounded-lg p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
