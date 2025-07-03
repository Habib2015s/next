import React from 'react'

const page = () => {
  return (
    <div className='fade-in p-8'>
        <div className='flex flex-col justify-center items-center gap-2 top-40 relative '>
            <p className='text-[#D8C3A5] text-6xl font-bold'>Sign Up</p>
            <div className='flex flex-col gap-3'>
                <p className='text-[#D8C3A5]'>Name</p>
                <input className='bg-black text-[#D8C3A5]'  type='string' placeholder='enter your name'/>
        <div className="w-full h-px bg-[#D8C3A5] "></div>
                <p className='text-[#D8C3A5]'>Password</p>
                <input type='password' className='bg-black text-[#D8C3A5]' placeholder='enter your password'/>
        <div className="w-full h-px bg-[#D8C3A5]"></div>
               
                <div className='flex gap-4'>
                    <p className='text-[#D8C3A5]'> Date of Birth</p>
                    <input className='bg-[#D8C3A5] text-black' type='date'/>
                </div><div className='p-3 text-center bg-[#D8C3A5] text-black cursor-pointer'>

                <button>Sign UP</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page