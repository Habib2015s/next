'use client'
import { useQuery } from "@tanstack/react-query"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [scrollY, setScrollY] = useState(0)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', 'mens'],
    queryFn: () =>
      fetch("https://dummyjson.com/products/category/mens-shirts?limit=4")
        .then(res => res.json())
  })

  const handleOpenModal = (product) => {
    setScrollY(window.scrollY)
    setSelectedProduct(product)
  }

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
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-[#EAE7DC] h-96 fade-in">
        {data?.products?.map((product) => (
  <div
    key={product.id}
    className="border p-4 rounded shadow-2xl cursor-default hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
  >
    <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-contain mb-2" />
    <h2 className="text-sm text-black font-semibold mb-1">{product.title}</h2>
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

      {/* مودال دایره‌ای */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="bg-black rounded-full shadow-2xl flex flex-col items-center justify-center text-center p-8 w-96 h-96 relative"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-6 text-[#D8C3A5] text-3xl font-bold cursor-pointer"
                onClick={() => setSelectedProduct(null)}
                aria-label="Close Modal"
              >
                ×
              </button>
              <img
                src={selectedProduct.thumbnail}
                alt={selectedProduct.title}
                className="w-36 h-36 object-contain mb-4 rounded-full"
              />
              <h2 className="text-2xl font-bold text-white">{selectedProduct.title}</h2>
              <p className="text-md text-[#D8C3A5] mt-2 px-4 overflow-auto">{selectedProduct.description}</p>
              <p className="text-xl font-semibold mt-4 text-white">{selectedProduct.price} $</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
