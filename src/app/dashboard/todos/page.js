import React from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { ImRadioUnchecked } from "react-icons/im";

const Todos = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos');
  const payload = await data.json();

  return (
    <div className='min-h-screen bg-gray-100 py-10 px-2'>
      {
        payload?.slice(0, 25).map((todo) => (
          <div key={todo.id}>
            <div className={`py-5 m-3 flex rounded-md ${todo.completed ? "bg-green-400" : "bg-red-400"}`}>
              <h2 className='indent-2.5 flex flex-1 capitalize font-bold'>{todo.title}</h2>
              <div className='pr-2.5'>
                <p>{todo.completed ? <IoIosCheckmarkCircle className='text-xl' /> : <ImRadioUnchecked />}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Todos