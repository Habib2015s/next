'use client'

import { useQuery } from '@tanstack/react-query'
import React, { useState, useEffect } from 'react'
import Header from '../Header'
import { motion, AnimatePresence } from 'framer-motion'
import ProductModal from '../modal/ProductModal'

export default function Page() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [scrollY, setScrollY] = useState(0)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', 'womens'],
    queryFn: () =>
      fetch('https://dummyjson.com/products/category/womens-dresses').then(res =>
        res.json()
      ),
  })

  const handleOpenModal = product => {
    setScrollY(window.scrollY)
    setSelectedProduct(product)
  }

  // قفل اسکرول هنگام باز بودن مودال
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    // cleanup on unmount or when modal closes
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProduct])

  if (isLoading) return <p>loading...</p>
  if (isError) return <p>error...</p>

  return (
    <div className="bg-[#EAE7DC] min-h-screen fade-in">
      <Header />
      <br />
      <div className="top-14 m-10 relative">
        <p className="text-black font-bold text-3xl ">Products</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 top-20 relative gap-6 p-6 fade-in">
        {data.products.map(product => (
          <div
            key={product.id}
            className="border p-4 rounded shadow-2xl  hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-contain mb-2"
            />
            <h2 className="text-sm text-black font-semibold mb-1">
              {product.title}
            </h2>
            <p className="text-gray-700">${product.price}</p>
           <div
              className="bg-black text-[#E6D6C2] w-28 p-2 hover:scale-125 delay-100 duration-300 cursor-pointer relative rounded-md mx-auto"
              onClick={() => handleOpenModal(product)}
            >
              <button className="cursor-pointer">Show Details</button>
            </div>
          </div>
        ))}
      </div>

    {selectedProduct && (
            <ProductModal
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
              scrollY={scrollY}
            />
          )}
    </div>
  )
}
