import Link from 'next/link'
import React from 'react'
import Footer from './Footer'

export default function MenWomen  ()  {

  return (
    <div className=' h-screen  bg-[#EAE7DC]'>
        <div className=' h-11/12 flex w-full p-16 bg-[#C3B091] '>
          <Link href="/man">
            <div className='bg-cover w-40 left-12 bottom-8 h-fit p-48 bg-center relative cursor-pointer shadow-2xl hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110   '
             style={{height:"-webkit-fill-available",
                backgroundImage:
                "url('https://akkeknitwear.com/website/wp-content/uploads/2023/10/akke-2-1.webp')",
            }}
            ><div className='text-center font-bold text-4xl text-white'>

            <p>Men</p>
        </div>
            </div>
            </Link>
            <Link href="/woman">
            <div className='bg-cover w-40 p-48 top-12 left-56 bg-center relative  cursor-pointer shadow-2xl hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 '
            style={{height:"-webkit-fill-available",
                backgroundImage:
                "url('https://akkeknitwear.com/website/wp-content/uploads/2023/10/akke-3-1.webp')",}}
                ><div className='text-center font-bold text-4xl text-white'>

                <p>Women</p>
            </div>
            </div>
                </Link>
            <div className='relative left-96 font-bold text-8xl flex items-center'>
                
            <p>Ca<br/>
                teg<br/>
                ory</p>
            </div>
        </div>

    </div>
  )
}

