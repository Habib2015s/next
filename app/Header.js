'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faUserLarge,
} from '@fortawesome/free-solid-svg-icons'
import ProductModal from './modal/ProductModal'

export default function Header() {
  const [showHeader, setShowHeader] = useState(true)
  const [showSearchBox, setShowSearchBox] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [scrollY, setScrollY] = useState(0)
  const searchRef = useRef(null)

  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      if (currentScroll < lastScrollY.current) {
        setShowHeader(true)
      } else if (currentScroll > lastScrollY.current + 10) {
        setShowHeader(false)
      }
      lastScrollY.current = currentScroll
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (query.trim() === '') {
      setResults([])
      return
    }

    const fetchProducts = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/search?q=${query}`)
        const data = await res.json()
        setResults(data.products)
      } catch (error) {
        console.error('Search error:', error)
      }
    }

    const timer = setTimeout(fetchProducts, 300) // debounce
    return () => clearTimeout(timer)
  }, [query])

  const menuItems = [
    { label: 'SALES' },
    { label: 'MEN', href: '/man' },
    { label: 'WOMEN', href: '/woman' },
    { label: 'FAY ARCHIVE' },
  ]

  const rightMenu = [
    { label: 'ICONS' },
    { label: 'FAY LIFE' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#EAE7DC] shadow-md transition-transform duration-500 ease-in-out transform ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4 relative">
        {/* Left menu */}
        <div className="flex gap-10 text-black items-center">
          <Link href="/home">
            <h2 className="font-bold text-4xl font-serif">FAY</h2>
          </Link>
          {menuItems.map((item, index) =>
            item.href ? (
              <Link key={index} href={item.href}>
                <div className="relative group cursor-pointer text-sm font-medium">
                  <span>{item.label}</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </div>
              </Link>
            ) : (
              <div key={index} className="relative group cursor-pointer text-sm font-medium">
                <span>{item.label}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </div>
            )
          )}
        </div>

        {/* Right menu */}
        <div className="flex gap-6 items-center text-black">
          {rightMenu.map((item, index) => (
            <div key={index} className="relative group cursor-pointer text-sm font-medium">
              <span>{item.label}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}

          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="w-5 cursor-pointer"
            onClick={() => {
              setShowSearchBox(!showSearchBox)
              setQuery('')
              setResults([])
            }}
          />

          <FontAwesomeIcon icon={faUserLarge} className="w-6 cursor-pointer" />
          <FontAwesomeIcon icon={faHeart} className="w-6 cursor-pointer" />

          <Link href="/mainbasket">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="w-6 cursor-pointer hover:scale-110 hover:shadow-lg transition-transform duration-300"
            />
          </Link>
        </div>

        {/* 🔍 Search Box */}
        {showSearchBox && (
          <div
            ref={searchRef}
            className="absolute fade-in top-full left-1/2 -translate-x-1/2 mt-2 w-96 bg-white border rounded-md shadow-lg p-4 z-50"
          >
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="text-gray-600 w-full border px-3 py-2 rounded "
            />
            <ul className="max-h-64 overflow-y-auto">
              {results.length > 0 ? (
                results.map((product) => (
                  <li
                    key={product.id}
                    className="cursor-pointer hover:bg-gray-100 p-2 rounded flex items-center gap-2"
                    onClick={() => {
                      setSelectedProduct(product)
                      setScrollY(window.scrollY)
                      setShowSearchBox(false)
                    }}
                  >
                    <img src={product.thumbnail} alt={product.title} className="w-10 h-10 object-cover rounded" />
                    <span className='text-black'>{product.title}</span>
                  </li>
                ))
              ) : (
                query && <li className="text-sm text-gray-500">No results found</li>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* 🟢 Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          scrollY={scrollY}
        />
      )}
    </header>
  )
}
