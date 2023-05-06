import React from 'react'

function RightStyledComponent() {
  return (
    <div className='hidden lg:z-50 lg:w-[40px] lg:bottom-0 lg:right-[40px] lg:left-auto lg:fixed lg:text-2xl lg:flex lg:justify-center lg:items-center' >
        <ul className='flex flex-col gap-[170px] after:inline-block after:w-[1px] after:h-[90px] after:my-[0px] after:mx-[auto] after:bg-white'>
            <small className='rotate-90 text-gray-50 tracking-widest'>abubachukwuemeka@outlook.com</small>
        </ul>
    </div>
  )
}

export default RightStyledComponent