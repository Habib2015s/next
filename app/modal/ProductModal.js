'use client'

import { motion, AnimatePresence } from 'framer-motion'
import React, { useEffect } from 'react'
import UseBasket from '../UseBasket'
import toast from 'react-hot-toast'

export default function ProductModal({ product, onClose, scrollY }) {
  const { actions } = UseBasket()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  if (!product) return null

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* پس‌زمینه نیمه‌شفاف تمام صفحه */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* مودال با موقعیت سفارشی */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 z-50"
            style={{ top: scrollY + 100 }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-black rounded-full shadow-2xl relative flex flex-col justify-center items-center text-center p-6 w-80 h-80">
              <button
                className="absolute top-2 right-3 text-[#D8C3A5] text-xl font-bold cursor-pointer"
                onClick={onClose}
                aria-label="Close Modal"
              >
                ×
              </button>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-24 h-24 object-contain mb-4"
              />
              <h2 className="text-xl font-bold text-white">{product.title}</h2>
              <p className="text-sm text-[#D8C3A5] px-4 mt-2 line-clamp-3">
                {product.description}
              </p>
              <p className="text-lg font-bold mt-4 text-white">
                {product.price} $
              </p>
              <button
                className="bg-[#D8C3A5] rounded-md hover:scale-90 cursor-pointer text-black p-1 hover:shadow-lg transition-transform duration-300"
                onClick={(e) => {
                  e.stopPropagation()
                  actions.addToBasket(product)
                  actions.setPrice()
                  toast.success('✅Product is added!')
                }}
              >
                Add to Basket
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
