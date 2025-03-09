import Link from 'next/link';
import React from 'react';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { MdEmail, MdLocationOn, MdPhone, MdBusiness } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';

const DetailUsers = async ({ params }) => {
    const { slug } = params;
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${slug}`);
    const payload = await data.json();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
            <div className='absolute top-[10px] left-[10px] text-3xl'>
                <Link href={'/dashboard/users'}>
                    <button className='cursor-pointer'>
                        <IoArrowBackCircleOutline />
                    </button>
                </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl">
                <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <FaUser className="text-blue-500" /> {payload.name}
                </h1>
                <p className="mt-2 text-gray-600 flex items-center gap-2">
                    <MdEmail className="text-red-500" /> {payload.email}
                </p>
                <p className="mt-2 text-gray-600 flex items-center gap-2">
                    <MdLocationOn className="text-green-500" /> {payload.address.city}, {payload.address.street}
                </p>
                <p className="mt-2 text-gray-600 flex items-center gap-2">
                    <MdPhone className="text-purple-500" /> {payload.phone}
                </p>
                <p className="mt-2 text-gray-600 flex items-center gap-2">
                    <MdBusiness className="text-yellow-500" /> {payload.company.name}
                </p>
            </div>
        </div>
    );
};

export default DetailUsers;
