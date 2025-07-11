'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faUserLarge,
} from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const [showHeader, setShowHeader] = useState(true)
  const lastScrollY = useRef(0) // ✅ استفاده از useRef به جای state

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
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
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
          <FontAwesomeIcon icon={faMagnifyingGlass} className="w-5 cursor-pointer" />
          <FontAwesomeIcon icon={faUserLarge} className="w-6 cursor-pointer" />
          <FontAwesomeIcon icon={faHeart} className="w-6 cursor-pointer" />
          <Link href="/mainbasket">
          <FontAwesomeIcon icon={faCartShopping} className="w-6 cursor-pointer hover:scale-110 
          hover:shadow-lg transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </header>
  )
}
