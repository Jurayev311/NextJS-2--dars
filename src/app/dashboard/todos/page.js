import React from 'react'
import Todo from '@/components/Todo';

const Todos = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos');
  const payload = await data.json();

  return (
    <div className='min-h-screen bg-gray-100 py-10 px-2'>
      <Todo payload={payload}/>
    </div>
  )
}

export default Todos