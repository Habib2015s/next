'use client'

import { useQuery } from "@tanstack/react-query"
import React, { useState, useEffect } from 'react'
import Link from "next/link"
import ProductModal from "./modal/ProductModal"

export default function SmartPhones() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [scrollY, setScrollY] = useState(0)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', 'phones'],
    queryFn: () =>
      fetch('https://dummyjson.com/products/category/smartphones?limit=4')
        .then(res => res.json())
  })

  const handleOpenModal = (product) => {
    setScrollY(window.scrollY)
    setSelectedProduct(product)
  }

  useEffect(() => {
    document.body.style.overflow = selectedProduct ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProduct])

  if (isLoading) return <p className="p-4 text-center">در حال بارگذاری...</p>
  if (isError) return <p className="p-4 text-center text-red-500">خطا در دریافت اطلاعات</p>

  return (
    <>
      <div className="text-4xl text-black text-center mb-6">
        <p>New Products</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 bg-[#EAE7DC] fade-in">
        {data.products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded shadow-2xl bg-[#EAE7DC] cursor-default hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <img src={product.thumbnail} alt={product.title} className="w-full object-cover rounded mb-2" />
            <h2 className="text-sm text-black font-semibold mb-1">{product.title}</h2>
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

      <Link href="/Allphones">
        <div className="bg-black text-[#E6D6C2] w-36 sm:w-40 p-2 mt-8 mb-10 hover:scale-105 transition-all cursor-pointer text-center rounded-md mx-auto">
          <p>All Phones</p>
        </div>
      </Link>

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
