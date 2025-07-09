import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer  ()  {
  return (
    <div >
        <div className='w-full flex  h-96 top-12 bottom-0 relative'
         style={{background:` linear-gradient(92deg, #996B55 2.09%, #E5AB8E 36.04%, #E5AB8E 64.18%, #996B55 99.1%);`}}>
            <div className='w-1/2 m-20'>
                <p className='text-5xl mb-4'>Subscribe to newsletter<br/>
                </p>
                <p>

                Sign up to our newsletter to receive a discount code on your next purchase.
                </p>

            </div>
            <div className='gap-4 flex flex-col mt-10'>
                <p className='text-2xl'>Subscribe to our newsletter</p>
                <div className='flex bg-black rounded-md p-4 justify-between'>
                <input type='string' placeholder='E-mail'  />
                <FontAwesomeIcon icon={faArrowRight} className="w-4" />
                </div>
                <div className='flex flex-col mt-4 '>
                    <p className='text-2xl'>Find a Boutique</p>
                    <p>Search by address</p>
                    <div className='flex mt-4 bg-black rounded-md p-4 justify-between'>
                        
                    <input type='string' placeholder='Enter a location'/>
                    <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div className='flex mt-6 gap-4'>

                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faYoutube} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
