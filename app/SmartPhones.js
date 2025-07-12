'use client'

import { useQuery } from "@tanstack/react-query"
import React, { useState, useEffect } from 'react'
import Link from "next/link"
import ProductModal from "./modal/ProductModal"

export default function SmartPhones() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [modalY, setModalY] = useState(0)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', 'phones'],
    queryFn: () =>
      fetch('https://dummyjson.com/products/category/smartphones?limit=4')
        .then(res => res.json())
  })

  const handleOpenModal = (product) => {
    setModalY(window.scrollY)
    setSelectedProduct(product)
  }

  useEffect(() => {
    document.body.style.overflow = selectedProduct ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProduct])

  if (isLoading) return <p>loading...</p>
  if (isError) return <p>error...</p>

  return (
    <>
      <div className="text-4xl text-black text-center">
        <p>New Products</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-[#EAE7DC] h-96 fade-in">
        {data.products.map((product) => (
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

      <Link href="/allphones">
        <div className="bg-black text-[#E6D6C2] w-28 flex justify-center mt-7 p-2 hover:scale-125 delay-100 duration-300 cursor-pointer relative rounded-md mx-auto">
          <p>All Phones</p>
        </div>
      </Link>

      {/* استفاده از ProductModal مشترک */}
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
