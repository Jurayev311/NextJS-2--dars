import Link from 'next/link';
import React from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5"

const Detail = async ({ params }) => {

  const { slug } = params
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  const payload = await data.json();
  console.log(payload);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      <div className='absolute top-[10px] left-[10px] text-3xl'>
        <Link href={'/dashboard'}><button className='cursor-pointer'><IoArrowBackCircleOutline /></button></Link>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl">
        <h1 className="text-2xl font-bold text-gray-800">{payload.title}</h1>
        <p className="mt-4 text-gray-600">{payload.body}</p>
      </div>
    </div>
  )
}

export default Detail