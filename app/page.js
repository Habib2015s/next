import { faPerson, faPersonCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function page  ()  {

  return (
    <div className='flex justify-center items-center'>
      
      <div className='w-1/2 h-1/2 flex absolute top-1/4 items-center justify-center gap-4'>
      <Link href="/login">
        <div className='border flex justify-center h-36 p-10 rounded-md hover:bg-[#D8C3A5]'>
        <FontAwesomeIcon className='w-14 ' icon={faPersonCircleQuestion} /></div>
        <div className='text-center'>

      <button>Guest</button>
        </div>

      </Link>
      <Link href="/home">
        <div className='border w-36 flex justify-center rounded-md p-10 hover:bg-[#D8C3A5]'>
          <FontAwesomeIcon className='w-10' icon={faPerson} /></div>
      <div  className='text-center'>
      <button>Member</button>

      </div>
      </Link>
        </div>

    </div>
  )
}
