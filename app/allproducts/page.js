'use client'

import { useQuery } from '@tanstack/react-query'
import Header from '../Header'
import ProductModal from '../modal/ProductModal'
import { useState } from 'react'

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [modalY, setModalY] = useState(0)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', 'category'],
    queryFn: () => fetch('https://dummyjson.com/products').then((res) => res.json())
  })

  const handleProductClick = (product) => {
    setModalY(window.scrollY)
    setSelectedProduct(product)
  }

  if (isLoading) return <p>loading...</p>
  if (isError) return <p>error...</p>

  return (
  <div className="min-h-screen p-6">
    <Header />
    {isLoading && <p className="mt-32 text-center text-gray-600">در حال بارگذاری محصولات...</p>}
    {isError && <p className="mt-32 text-center text-red-500">خطا در بارگذاری محصولات.</p>}

    {Array.isArray(data?.products) && (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-32">
        {data.products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded shadow-2xl cursor-pointer hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            onClick={() => handleProductClick(product)}
          >
            <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-contain mb-2" />
            <h2 className="text-sm text-black font-semibold mb-1">{product.title}</h2>
            <p className="text-gray-700">${product.price}</p>
            <p className="text-gray-400 text-sm line-clamp-2">{product.description}</p>
          </div>
        ))}
      </div>
    )}

    {selectedProduct && (
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        scrollY={modalY}
      />
    )}
  </div>
)

}
