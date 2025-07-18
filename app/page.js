import { faPerson, faPersonCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div className='flex justify-center items-center bg-black h-screen'>
      <div className='flex flex-col md:flex-row items-center justify-center gap-8'>

        {/* Guest Link */}
        <Link href="/login" className='text-center group'>
          <div className='border flex flex-col justify-center items-center w-36 h-36 p-4 rounded-md transition-colors duration-300 hover:bg-[#D8C3A5]'>
            <FontAwesomeIcon className='h-16 text-white group-hover:text-black' icon={faPersonCircleQuestion} title="Guest" />
            <span className='mt-2 text-white group-hover:text-black'>Guest</span>
          </div>
        </Link>

        {/* Member Link */}
        <Link href="/home" className='text-center group'>
          <div className='border flex flex-col justify-center items-center w-36 h-36 p-4 rounded-md transition-colors duration-300 hover:bg-[#D8C3A5]'>
            <FontAwesomeIcon className='h-16 text-white group-hover:text-black' icon={faPerson} title="Member" />
            <span className='mt-2 text-white group-hover:text-black'>Member</span>
          </div>
        </Link>

      </div>
    </div>
  )
}
