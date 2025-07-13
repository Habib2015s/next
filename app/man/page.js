'use client'

import { useQuery } from '@tanstack/react-query'
import React, { useState, useEffect } from 'react'
import Header from '../Header'
import ProductModal from '../modal/ProductModal'

export default function Page() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [scrollY, setScrollY] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', 'mens'],
    queryFn: () =>
      fetch('https://dummyjson.com/products/category/mens-shirts').then(res =>
        res.json()
      ),
  })

  const handleOpenModal = product => {
    if (!isClient) return
    setScrollY(window.scrollY)
    setSelectedProduct(product)
  }

  // جلوگیری از اسکرول هنگام باز بودن مودال
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProduct])

  if (isLoading) return <p className="p-6">loading...</p>
  if (isError) return <p className="p-6">error...</p>

  return (
    <div className="fade-in min-h-screen bg-[#EAE7DC]">
      <Header />
      <div className="mt-10 px-6">
        <p className="text-black font-bold text-3xl">Products</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 mt-10">
        {data.products.map(product => (
          <div
            key={product.id}
            className="border p-4 rounded shadow-2xl hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
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
