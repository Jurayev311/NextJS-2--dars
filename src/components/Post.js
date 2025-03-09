"use client"
import { useRouter } from "next/navigation";
import React from 'react'

const Post = ({ payload }) => {

  const router = useRouter()

  return (
    <div className="grid gap-6">
      {payload?.slice(0, 15).map((post) => (
        <div
          key={post.id}
          className="bg-white shadow-md hover:shadow-lg transition-all border border-gray-200 rounded-2xl p-6 flex flex-col gap-3"
        >
          <h2 className="text-xl font-semibold text-gray-900 capitalize">{post.title}</h2>
          <p className="text-gray-700 line-clamp-1">{post.body}</p>
          <button onClick={() => router.push(`/dashboard/${post.id}`)} className="cursor-pointer mt-auto bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            Read More
          </button>
        </div>
      ))}
    </div>
  )
}

export default Post