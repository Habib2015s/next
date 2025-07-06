'use client'
import { useQuery } from "@tanstack/react-query"
import Header from "../Header"
export default function Products() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', 'category'],
    queryFn: () =>
            fetch("https://dummyjson.com/products")
    .then(res => res.json()
      )
  })

  if (isLoading) return <p>loading...</p>
  if (isError) return <p>error...</p>
  
  return (
      <div className="grid grid-cols-2 md:grid-cols-4  gap-6 p-6  h-screen fade-in hover:">
        <Header/>
      {data.products.map((product) => (
        <div key={product.id} className="border p-4 relative  
         top-24 rounded shadow-2xl cursor-pointer hover:shadow-lg 
         transition-transform duration-300 ease-in-out transform hover:scale-110">
          <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-contain mb-2" />
          <h2 className="text-sm text-black font-semibold mb-1">{product.title}</h2>
          <p className="text-gray-700">${product.price}</p>
          <p className='text-gray-400'>{product.description}</p>

        </div>
      ))}
      
    </div>
  )
}
