import React from 'react'
import { RiGithubLine } from 'react-icons/ri'

function LeftStyledComponent() {
  return (
    <div className='hidden lg:z-50 lg:w-[40px] lg:bottom-0 lg:left-[40px] lg:right-auto lg:fixed lg:text-2xl lg:flex lg:justify-center lg:items-center'>
        <ul className='flex flex-col gap-8 after:inline-block after:w-[1px] after:h-[90px] after:my-[0px] after:mx-[auto] after:bg-white'>
            <li><a href='/'><RiGithubLine className='fill-gray-100'/></a></li>
            <li><a href='/'><RiGithubLine className='fill-gray-100'/></a></li>
            <li><a href='/'><RiGithubLine className='fill-gray-100'/></a></li>
            <li><a href='/'><RiGithubLine className='fill-gray-100'/></a></li>
            <li><a href='/'><RiGithubLine className='fill-gray-100'/></a></li>
        </ul>
    </div>
  )
}

export default LeftStyledComponent