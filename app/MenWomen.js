import Link from 'next/link'
import React from 'react'

export default function MenWomen() {
  return (
    <div className="min-h-screen bg-[#EAE7DC]">
      <div className="flex flex-col md:flex-row w-full p-4 md:p-16 bg-[#C3B091] gap-6 md:gap-12">
        {/* دسته‌بندی مردانه */}
        <Link href="/man" className="flex-1">
          <div
            className="bg-cover bg-center h-64 md:h-[500px] rounded-md relative shadow-2xl hover:shadow-lg transition-transform duration-300 hover:scale-105"
            style={{
              backgroundImage:
                "url('https://akkeknitwear.com/website/wp-content/uploads/2023/10/akke-2-1.webp')",
            }}
          >
            <div className="absolute inset-0 bg-black/30 flex justify-center items-center">
              <p className="text-white text-3xl md:text-5xl font-bold">Men</p>
            </div>
          </div>
        </Link>

        {/* دسته‌بندی زنانه */}
        <Link href="/woman" className="flex-1">
          <div
            className="bg-cover bg-center h-64 md:h-[500px] rounded-md relative shadow-2xl hover:shadow-lg transition-transform duration-300 hover:scale-105"
            style={{
              backgroundImage:
                "url('https://akkeknitwear.com/website/wp-content/uploads/2023/10/akke-3-1.webp')",
            }}
          >
            <div className="absolute inset-0 bg-black/30 flex justify-center items-center">
              <p className="text-white text-3xl md:text-5xl font-bold">Women</p>
            </div>
          </div>
        </Link>

        {/* متن Category */}
        <div className="hidden lg:flex flex-col justify-center items-center text-6xl font-bold text-white">
          <p className="leading-[1.2] text-center">
            Ca<br />
            teg<br />
            ory
          </p>
        </div>
      </div>
    </div>
  )
}
