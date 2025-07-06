'use client'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function page  ()  {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', 'mens'],
    queryFn: () =>
            fetch("https://dummyjson.com/products/category/womensherts")
    .then(res => res.json()
      )
  })
   if (isLoading) return <p>loading...</p>
  if (isError) return <p>error...</p>
  console.log(data);
  
  return (
    <div className='bg-[#EAE7DC] h-screen fade-in'>

     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-[#EAE7DC] h-96 fade-in hover:">
      {data.products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow-2xl cursor-pointer hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110">
          <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-contain mb-2" />
          <h2 className="text-sm text-black font-semibold mb-1">{product.title}</h2>
          <p className="text-gray-700">${product.price}</p>
        </div>
      ))}
      </div>
      
    </div>
  )
}

