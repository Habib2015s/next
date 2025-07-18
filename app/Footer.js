import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
  return (
    <div className="w-full">
      <div
        className="flex flex-col md:flex-row justify-between px-6 md:px-20 py-12 text-white"
        style={{
          background:
            'linear-gradient(92deg, #996B55 2.09%, #E5AB8E 36.04%, #E5AB8E 64.18%, #996B55 99.1%)',
        }}
      >
        {/* Left section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Subscribe to newsletter
          </p>
          <p className="text-base md:text-lg">
            Sign up to our newsletter to receive a discount code on your next purchase.
          </p>
        </div>

        {/* Right section */}
        <div className="flex flex-col gap-6 md:w-1/2">
          {/* Newsletter input */}
          <div>
            <p className="text-xl sm:text-2xl mb-2">Subscribe to our newsletter</p>
            <div className="flex items-center bg-black rounded-md px-4 py-2">
              <input
                type="email"
                placeholder="E-mail"
                className="bg-transparent outline-none text-white placeholder-gray-300 flex-grow"
              />
              <FontAwesomeIcon icon={faArrowRight} className="w-4 text-white" />
            </div>
          </div>

          {/* Location search */}
          <div>
            <p className="text-xl sm:text-2xl mb-1">Find a Boutique</p>
            <p className="text-sm mb-2">Search by address</p>
            <div className="flex items-center bg-black rounded-md px-4 py-2">
              <input
                type="text"
                placeholder="Enter a location"
                className="bg-transparent outline-none text-white placeholder-gray-300 flex-grow"
              />
              <FontAwesomeIcon icon={faLocationDot} className="text-white" />
            </div>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 mt-2 text-white text-xl">
            <FontAwesomeIcon icon={faInstagram} className="hover:scale-110 transition-transform" />
            <FontAwesomeIcon icon={faYoutube} className="hover:scale-110 transition-transform" />
            <FontAwesomeIcon icon={faFacebook} className="hover:scale-110 transition-transform" />
            <FontAwesomeIcon icon={faLinkedin} className="hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  )
}
