'use client'
import { useQuery } from "@tanstack/react-query"
import MenWomen from "../MenWomen"
export default function Products() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', 'mens'],
    queryFn: () =>
            fetch("https://dummyjson.com/products/category/mens-shirts?limit=4")
    .then(res => res.json()
      )
  })

  if (isLoading) return <p>loading...</p>
  if (isError) return <p>error...</p>
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-[#EAE7DC] h-96 fade-in hover:">
      {data.products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow-2xl cursor-pointer hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110">
          <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-contain mb-2" />
          <h2 className="text-sm text-black font-semibold mb-1">{product.title}</h2>
          <p className="text-gray-700">${product.price}</p>
          <div className="bg-black text-[#E6D6C2] w-28 p-2 hover:scale-125 delay-100 duration-300 cursor-pointer left-1/3 relative rounded-md">
            <button className="cursor-pointer">Show Details</button>
          </div>
        </div>
      ))}
      
    </div>
  )
}
