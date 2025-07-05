'use client'

import React from 'react'
import Header from '../Header'
import Products from '../product/Products'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(far)

export default function Homepage() {
  return (
    <div className="bg-[#EAE7DC] min-h-screen">
      <Header />
      <div
        className="h-[80vh] bg-cover bg-center relative flex flex-col items-center justify-center text-black"
        style={{
          backgroundImage:
            "url('https://www.fay.com/medias/01-HP-Fay-21-6-Banner-Slider-Hero-DESK.jpg?context=bWFzdGVyfGltYWdlc3wyNTg5MDYyfGltYWdlL2pwZWd8aW1hZ2VzL2g5ZS9oYjYvOTAyNjAwMTQwMzkzNC5qcGd8MzNiOTZhM2FhOTZlMDY0OTM4MWI4YzVhYWE0MmJmZjJiYzY0YTZlZGZmYzA2NTY2NjQwNDlkMDZmYzk3NmYwMw')",
        }}
      >
        <div className="absolute top-0 w-full text-center bg-black/30 text-white py-1 text-sm z-40">
          <p className='text-white'>Free Shipping and Returns</p>
        </div>
        <div className="text-center z-10 mt-10">
          <h1 className="text-3xl text-white font-bold">Fay Racing Jacket | Ronnie Kessel</h1>
          <p className="mt-2 text-white">Limited Edition</p>
          <div className="mt-4 flex justify-center items-center gap-2 cursor-pointer text-white transition-transform duration-300 ease-in-out transform hover:scale-110">
            <button>SHOP NOW</button>
            <FontAwesomeIcon icon={faArrowRight} className="w-4" />
          </div>
        </div>
      </div>
      <div className="py-10">
        <h2 className="text-3xl text-center text-black font-semibold mb-6">Essentials</h2>
        <Products />
      </div>
    </div>
  )
}
