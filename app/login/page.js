import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className="fade-in p-8 bg-black min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        <p className="text-[#D8C3A5] text-6xl font-bold">Sign Up</p>
        <form className="w-full flex flex-col gap-4">
          <div>
            <label className="text-[#D8C3A5] block mb-1">Name</label>
            <input
              className="bg-black p-3 text-[#D8C3A5] rounded-md w-full"
              type="text"
              placeholder="Enter your name"
            />
            <div className="w-full h-px bg-[#D8C3A5] mt-2" />
          </div>

          <div>
            <label className="text-[#D8C3A5] block mb-1">Password</label>
            <input
              type="password"
              className="bg-black p-3 text-[#D8C3A5] rounded-md w-full"
              placeholder="Enter your password"
            />
            <div className="w-full h-px bg-[#D8C3A5] mt-2" />
          </div>

          <div className="flex gap-4 items-center">
            <label className="text-[#D8C3A5]">Date of Birth</label>
            <input className="bg-[#D8C3A5] text-black rounded-md p-2" type="date" />
          </div>

          <Link href="/home" className="block">
            <div className="p-3 text-center bg-[#D8C3A5] rounded-md text-black cursor-pointer hover:scale-105 transition">
              Sign Up
            </div>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Page
