'use client'

import { useQuery } from '@tanstack/react-query'
import React, { useState, useEffect } from 'react'
import Header from '../Header'
import { motion, AnimatePresence } from 'framer-motion'
import ProductModal from '../modal/ProductModal'

export default function Page() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [scrollY, setScrollY] = useState(0)
  const [isClient, setIsClient] = useState(false)

  // فعال‌سازی فقط در کلاینت
  useEffect(() => {
    setIsClient(true)
  }, [])

  // گرفتن scrollY هنگام باز شدن مودال
  const handleOpenModal = (product) => {
    if (typeof window !== 'undefined') {
      setScrollY(window.scrollY)
    }
    setSelectedProduct(product)
  }

  // قفل کردن اسکرول هنگام باز بودن مودال
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

  // گرفتن داده‌ها از API
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', 'womens'],
    queryFn: () =>
      fetch('https://dummyjson.com/products/category/womens-dresses').then(res =>
        res.json()
      ),
  })

  // جلوگیری از رندر در سمت سرور
  if (!isClient) return null
  if (isLoading) return <p className="text-center mt-32">Loading...</p>
  if (isError) return <p className="text-center text-red-500 mt-32">Error loading products.</p>

  return (
    <div className="bg-[#EAE7DC] min-h-screen fade-in">
      <Header />
      <br />
      <div className="top-14 m-10 relative">
        <p className="text-black font-bold text-3xl">Products</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 top-20 relative gap-6 p-6 fade-in">
        {data.products.map(product => (
          <div
            key={product.id}
            className="border p-4 rounded shadow-2xl hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
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
              className="bg-black text-[#E6D6C2] w-28 p-2 hover:scale-125 delay-100 duration-300 cursor-pointer rounded-md mx-auto mt-2 text-center"
              onClick={() => handleOpenModal(product)}
            >
              <button className="cursor-pointer">Show Details</button>
            </div>
          </div>
        ))}
      </div>

      {/* نمایش مودال محصول */}
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
