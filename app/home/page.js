import { faArrowRight, faCartShopping, faGripLines, faMagnifyingGlass, faUserLarge } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
// lib/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(far)


export default function homepage  ()  {
  return (
    <div className='bg-[#EAE7DC] h-screen '>
      <div className='h-[80vh] bg-cover  ' 
      style={{backgroundImage:"url('https://www.fay.com/medias/01-HP-Fay-21-6-Banner-Slider-Hero-DESK.jpg?context=bWFzdGVyfGltYWdlc3wyNTg5MDYyfGltYWdlL2pwZWd8aW1hZ2VzL2g5ZS9oYjYvOTAyNjAwMTQwMzkzNC5qcGd8MzNiOTZhM2FhOTZlMDY0OTM4MWI4YzVhYWE0MmJmZjJiYzY0YTZlZGZmYzA2NTY2NjQwNDlkMDZmYzk3NmYwMw')"}}>
      <div className='text-center top-0 left-0 w-full h-6 bg-black/30 shadow-lg z-50 pointer-events-none'>
        <p>Free Shipping and Returns</p>
        <div className="w-full h-px bg-white"></div>
        <div className='flex justify-between p-5 '>
          <div className='flex gap-10 justify-items-start items-center '>   
          <h2 className='font-bold text-4xl font-serif'>FAY</h2>
          <p>SALES</p>
          <p>MEN</p>
          <p>WOMEN</p>
          <p>FAY ARCHIVE</p>
          </div>
          <div className='flex gap-7 items-center'>
            <p>ICONS</p>
            <div className='flex'><p>FAY LIFE</p>
          </div>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='w-5'/>
            <FontAwesomeIcon className='w-6' icon={faUserLarge} /> 
            <FontAwesomeIcon className='w-6' icon={['far', 'heart']} />
            <FontAwesomeIcon className='w-6' icon={faCartShopping}  />
            </div>
        </div>

      </div>
      <div className=' flex items-center relative top-1/3 flex-col ' >

      <h1 className='text-3xl font-bold'>Fay Racing Jacket | Ronnie Kessel</h1>
      <br/>
      <p>Limited Edition</p>
      <br/>
      <div className='flex justify-center gap-2 cursor-pointer'>
      <button className='cursor-pointer'>SHOP NOW</button>
      <FontAwesomeIcon className='w-4' icon={faArrowRight} /> 
      </div>
      </div>
      </div>
    </div>
  )
}
