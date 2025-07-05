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

      if (currentScrollY < lastScrollY) {
        setShowHeader(true) // اسکرول به بالا
      } else {
        setShowHeader(false) // اسکرول به پایین
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-[#EAE7DC] shadow-md z-50 transition-all duration-500 ease-in-out 
    ${showHeader ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}
  `}
    >
      <div className="flex justify-between p-5">
        <div className="flex gap-10 text-black items-center">
          <h2 className="font-bold  text-4xl font-serif">FAY</h2>
          <p>SALES</p>
          <p>MEN</p>
          <p>WOMEN</p>
          <p>FAY ARCHIVE</p>
        </div>
        <div className="flex gap-7 items-center">
          <p>ICONS</p>
          <div className="flex text-black"><p>FAY LIFE</p></div>
          <FontAwesomeIcon icon={faMagnifyingGlass}  className="w-5 text-black" />
          <FontAwesomeIcon className="w-6 text-black" icon={faUserLarge} />
          <FontAwesomeIcon className="w-6 text-black" icon={['far', 'heart']} />
          <FontAwesomeIcon className="w-6 text-black" icon={faCartShopping} />
        </div>
      </div>
    </header>
  )
}
