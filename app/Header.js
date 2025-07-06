'use client'
import React, { useState, useEffect } from 'react';
import { faCartShopping, faMagnifyingGlass, faUserLarge } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setShowHeader(currentScrollY < lastScrollY)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const menuItems = ['SALES', 'MEN', 'WOMEN', 'FAY ARCHIVE']
  const rightMenu = ['ICONS', 'FAY LIFE']

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-[#EAE7DC] shadow-md z-50 transition-all duration-500 ease-in-out 
        ${showHeader ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}
      `}
    >
      <div className="flex justify-between px-5 py-4">
        {/* منو سمت چپ */}
        <div className="flex gap-10 text-black items-center">
          <h2 className="font-bold text-4xl font-serif">FAY</h2>
          {menuItems.map((item, index) => (
            <div key={index} className="relative group cursor-pointer text-sm font-medium">
              <span>{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}
        </div>

        <div className="flex gap-7 items-center text-black">
          {rightMenu.map((item, index) => (
            <div key={index} className="relative group cursor-pointer text-sm font-medium">
              <span>{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}

          <FontAwesomeIcon icon={faMagnifyingGlass} className="w-5" />
          <FontAwesomeIcon icon={faUserLarge} className="w-6" />
          <FontAwesomeIcon icon={['far', 'heart']} className="w-6" />
          <FontAwesomeIcon icon={faCartShopping} className="w-6" />
        </div>
      </div>
    </header>
  )
}
