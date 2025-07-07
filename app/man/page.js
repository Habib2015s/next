'use client'
import { useQuery } from '@tanstack/react-query'
import React, { useState, useEffect } from 'react'
import Header from '../Header'
import { motion, AnimatePresence } from 'framer-motion'

export default function Page() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [scrollY, setScrollY] = useState(0)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', 'mens'],
    queryFn: () =>
      fetch('https://dummyjson.com/products/category/mens-shirts').then(res =>
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
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProduct])

  if (isLoading) return <p>loading...</p>
  if (isError) return <p>error...</p>

  return (
    <div className="fade-in min-h-screen bg-[#EAE7DC]">
      <Header />
      <br />
      <div className="top-14 m-10 relative">
        <p className="text-black font-bold text-3xl">Products</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 relative top-20 gap-6 p-6 fade-in">
        {data.products.map(product => (
          <div
            key={product.id}
            onClick={() => handleOpenModal(product)}
            className="border p-4 rounded shadow-2xl cursor-pointer hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="fade-in w-full h-48 object-contain mb-2"
            />
            <h2 className="text-sm text-black font-semibold mb-1">
              {product.title}
            </h2>
            <p className="text-gray-700">${product.price}</p>
            <p className="text-gray-400">{product.description}</p>
          </div>
        ))}
      </div>

      {/* مودال */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 bg-black rounded-full shadow-2xl flex flex-col items-center justify-center text-center p-6 w-80 h-80"
              style={{ top: scrollY + 100 }}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-3 text-[#D8C3A5] text-xl font-bold cursor-pointer"
                onClick={() => setSelectedProduct(null)}
                aria-label="Close Modal"
              >
                ×
              </button>
              <img
                src={selectedProduct.thumbnail}
                alt={selectedProduct.title}
                className="w-24 h-24 object-contain mb-4 rounded"
              />
              <h2 className="text-lg font-bold text-white">
                {selectedProduct.title}
              </h2>
              <p className="text-xs text-[#D8C3A5] mt-1 line-clamp-3 px-2">
                {selectedProduct.description}
              </p>
              <p className="text-md font-semibold mt-2 text-white">
                {selectedProduct.price} $
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
