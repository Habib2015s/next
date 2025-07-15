import { motion, AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import UseBasket from '../UseBasket'
import toast from 'react-hot-toast'

export default function ProductModal({ product, onClose, scrollY }) {
  const { actions } = UseBasket()
  const isClothing = ['mens-shirts', 'womens-dresses'].includes(product?.category)
  const [size, setSize] = useState('M')

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  if (!product) return null

  return (
    <AnimatePresence>
      {/* پس‌زمینه نیمه‌شفاف که کل صفحه رو می‌پوشونه */}
      <motion.div
        key="backdrop"
        className="fixed inset-0 bg-black/50 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* مودال دایره‌ای */}
      <motion.div
        key="modal"
        className="fixed left-1/2 -translate-x-1/2 z-50 bg-black rounded-full shadow-2xl flex flex-col items-center text-center p-6 w-80 h-80"
        style={{ top: scrollY + 100 }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-3 text-[#D8C3A5] text-xl font-bold cursor-pointer"
          onClick={onClose}
        >
          ×
        </button>

        <img src={product.thumbnail} alt={product.title} className="w-24 h-24 object-contain mb-4" />
        <h2 className="text-xl font-bold text-white">{product.title}</h2>
        <p className="text-sm text-[#D8C3A5] px-4 mt-2 line-clamp-3">{product.description}</p>
        <p className="text-lg font-bold mt-4 text-white">${product.price}</p>

        {isClothing && (
          <div className="mt-2 fade-in">
            <label htmlFor="size" className="text-[#D8C3A5] text-sm block mb-1">Select Size:</label>
            <select
              id="size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="bg-[#D8C3A5] text-black px-3 py-1 rounded"
            >
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
            </select>
          </div>
        )}

        <button
          className="bg-[#D8C3A5] rounded-md hover:scale-90 cursor-pointer text-black p-1 hover:shadow-lg transition-transform duration-300 mt-3"
          onClick={(e) => {
            e.stopPropagation()
            const productToAdd = isClothing ? { ...product, size } : product
            actions.addToBasket(productToAdd)
            actions.setPrice()
            toast.success('✅ Product is added!')
            onClose()
          }}
        >
          Add to Basket
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
