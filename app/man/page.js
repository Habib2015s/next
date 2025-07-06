'use client'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Header from '../Header'

export default function page  ()  {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', 'mens'],
    queryFn: () =>
            fetch("https://dummyjson.com/products/category/mens-shirts")
    .then(res => res.json()
      )
  })
   if (isLoading) return <p>loading...</p>
  if (isError) return <p>error...</p>
  return (
    <div className='fade-in  '>
      <Header/>
        <br/>
      <div className='top-14 m-10  relative'>

        
      <p className='text-black font-bold text-3xl '>Products</p>
      </div>
     <div className="grid grid-cols-2 md:grid-cols-4 relative top-20 gap-6 p-6  h-96 fade-in hover:">
      {data.products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow-2xl cursor-pointer hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110">
          <img src={product.thumbnail} alt={product.title} className="fade-in w-full h-48 object-contain mb-2" />
          <h2 className="text-sm text-black font-semibold mb-1">{product.title}</h2>
          <p className="text-gray-700">${product.price}</p>
          <p className='text-gray-400'>{product.description}</p>
        </div>
      ))}
      </div>
      
    </div>
  )
}

