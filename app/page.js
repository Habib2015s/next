import { faPerson, faPersonCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function page  ()  {

  return (
    <div className='flex justify-center items-center bg-black h-screen'>
      
      <div className='w-1/2 h-1/2 flex absolute top-1/4 items-center justify-center gap-4'>
      <Link href="/login">
        <div className='border flex justify-center h-auto transition-colors delay-100 duration-300 p-8 rounded-md hover:bg-[#D8C3A5]'>
        <FontAwesomeIcon className=' h-20' icon={faPersonCircleQuestion} /></div>
        <div className='text-center'>

      <button>Guest</button>
        </div>

      </Link>
      <Link href="/home">
        <div className='border w-36 flex transition-colors delay-100 duration-300 justify-center rounded-md items-center h-36 hover:bg-[#D8C3A5]'>
          <FontAwesomeIcon className='h-20' icon={faPerson} /></div>
      <div  className='text-center'>
      <button>Member</button>

      </div>
      </Link>
        </div>

    </div>
  )
}
