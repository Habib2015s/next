'use client'

import { useQuery } from "@tanstack/react-query"
import React, { useState } from 'react'
import ProductModal from "../modal/ProductModal"

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

  if (isLoading) return <p className="p-6 text-center">در حال بارگذاری...</p>
  if (isError) return <p className="p-6 text-center text-red-500">خطا در دریافت اطلاعات</p>

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-[#EAE7DC] fade-in">
        {data?.products?.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded shadow-2xl cursor-default hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 bg-white"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover rounded mb-2"
            />
            <h2 className="text-sm text-black font-semibold mb-1 line-clamp-1">
              {product.title}
            </h2>
            <p className="text-gray-700">${product.price}</p>
            <div
              className="bg-black text-[#E6D6C2] w-full p-2 mt-3 hover:scale-105 delay-100 duration-300 cursor-pointer text-center rounded-md"
              onClick={() => handleOpenModal(product)}
            >
              <button>Show Details</button>
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
    </>
  )
}
