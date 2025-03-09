"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import { Home, ListChecks, Users, LogOut, ArrowLeft } from 'lucide-react';

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <div className='flex h-screen bg-gray-100'>
            <aside className="w-72 bg-white text-gray-800 shadow-xl p-6 flex flex-col justify-between">
                <div>
                    <h2 className="text-3xl font-extrabold mb-6 text-center">Dashboard</h2>
                    <nav className="flex flex-col space-y-4">
                        <Link href={'/dashboard'}>
                            <span className={`flex items-center px-4 py-2.5 rounded-lg transition cursor-pointer ${pathname === '/dashboard' ? 'bg-gray-300 font-bold' : 'bg-gray-200 hover:bg-gray-300'
                                }`}>
                                <Home className="w-5 h-5 mr-3" />
                                <span className="text-lg">Posts</span>
                            </span>
                        </Link>
                        <Link href={'/dashboard/todos'}>
                            <span className={`flex items-center px-4 py-2.5 rounded-lg transition cursor-pointer ${pathname === '/dashboard/todos' ? 'bg-gray-300 font-bold' : 'bg-gray-200 hover:bg-gray-300'
                                }`}>
                                <ListChecks className="w-5 h-5 mr-3" />
                                <span className="text-lg">Todos</span>
                            </span>
                        </Link>
                        <Link href={'/dashboard/users'}>
                            <span className={`flex items-center px-4 py-2.5 rounded-lg transition cursor-pointer ${pathname === '/dashboard/users' ? 'bg-gray-300 font-bold' : 'bg-gray-200 hover:bg-gray-300'
                                }`}>
                                <Users className="w-5 h-5 mr-3" />
                                <span className="text-lg">Users</span>
                            </span>
                        </Link>
                    </nav>
                </div>
                <div className="mt-auto space-y-4">
                    <Link href={'/'}>
                        <span className="flex items-center px-4 py-2 mb-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition cursor-pointer">
                            <ArrowLeft className="w-5 h-5 mr-3" />
                            <span className="text-lg">Back to Home</span>
                        </span>
                    </Link>
                    <button className="flex items-center w-full px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition cursor-pointer">
                        <LogOut className="w-5 h-5 mr-3" />
                        <span className="text-lg">Logout</span>
                    </button>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar