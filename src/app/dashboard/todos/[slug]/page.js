import Link from 'next/link';
import React from 'react'
import { IoArrowBackCircleOutline } from 'react-icons/io5';

const DetailTodo = async ({params}) => {

  const { slug } = params
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${slug}`);
  const payload = await data.json();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      <div className='absolute top-[10px] left-[10px] text-3xl'>
        <Link href={'/dashboard/todos'}><button className='cursor-pointer'><IoArrowBackCircleOutline /></button></Link>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl">
        <h1 className="text-2xl font-bold text-gray-800">ID: {payload.id}</h1>
        <p className="mt-4 text-gray-600">Nomi: {payload.title}</p>
        <p className={`mt-4 font-semibold ${payload.completed ? 'text-green-600' : 'text-red-600'}`}>
          {payload.completed ? '✅ Bajarilgan' : '❌ Bajarilmagan'}
        </p>
      </div>
    </div>
  )
}

export default DetailTodo