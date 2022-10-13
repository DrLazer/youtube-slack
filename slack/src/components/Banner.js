import React from 'react'
import { ArrowLongRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

function Banner() {
  return (
    <div className=' bg-fuchsia-900 md:px-3'>
      <div className='flex items-center bg-sky-700 text-white py-3 px-12 md:rounded-full'>
        <div>
          <span className='font-bold text-lg'>Slack Frontiers Europe</span>. Frontiers is coming to London—with new tips and takeaways for 
          growing your business. Get your free tickets and join in person or online. 
          <a href='/' className='font-bold underline m-1'>Register now</a>
          <ArrowLongRightIcon className='h-6 w-6 inline-block text-white ml-1'/>
        </div>
        <div className='flex justify-end w-32'>
          <XMarkIcon className='h-6 w-6 text-white font-extrabold' />
        </div>
      </div>
    </div>
    
  )
}

export default Banner
