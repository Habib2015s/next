'use client'

import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

export default function ProductModal({ product, onClose }) {
  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-black rounded-full shadow-2xl relative flex flex-col justify-center text-center p-6 max-w-md w-full"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
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
              className="w-full h-48 object-contain mb-4 rounded"
            />
            <h2 className="text-xl font-bold text-white">{product.title}</h2>
            <p className="text-sm text-[#D8C3A5] px-6 mt-2">{product.description}</p>
            <p className="text-lg font-bold mt-4 text-white">{product.price} $</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
