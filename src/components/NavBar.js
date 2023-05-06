import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'

function NavBar() {
const navigate = useNavigate();

const [nav, setNav] = useState(false)

const handleNav = () => setNav(!nav)
  return (
    <div className='fixed top-0 w-full z-40 bg-gray-600 border-b border-gray-600 shadow-xl'>
        <header className='flex justify-between items-center py-2 px-5'>
            <div>
              <span className='uppercase text-white cursor-pointer' onClick={()=>navigate('/')}>dev emeka</span>
            </div>
            <nav>
              <ul className=' md:flex flex-col md:flex-row items-center space-x-8 hidden'>
                <li className='text-white cursor-pointer' onClick={()=>navigate('/about')}><span className='text-green-500 mr-2'>01.</span>About</li>
                <li className='text-white cursor-pointer' onClick={()=>navigate('/project')}><span className='text-green-500 mr-2'>02.</span>Project</li>
                <li className='text-white cursor-pointer' onClick={()=>navigate('/contact')}><span className='text-green-500 mr-2'>03.</span>Contact</li>
                <li className='text-white cursor-pointer' onClick={()=>navigate('/blog')}><span className='text-green-500 mr-2'>04.</span>Blog</li>
                <li className='text-green-500 border border-green-500 px-[10px] py-[3px] cursor-pointer rounded'>Resume</li>
              </ul>
              <div onClick={handleNav} className="z-10 block md:hidden ease-out">
                  {nav ? <FaTimes/> : <FaBars />}
              </div>
              <div className={!nav ? "fixed right-[-100%] ease-out duration-500" : 'fixed top-0 right-0 w-[74%] h-full border-l border-l-blue-500 -z-10 bg-blue-500 ease-in-out duration-500'}>
                <ul className='pt-32 flex flex-col items-center'>
                  <li className='flex flex-col items-center justify-center p-4' onClick={()=>navigate('/about')}>
                    <div className='text-green-500'>01.</div>
                    <p className=' text-white cursor-pointer'>About</p>
                  </li>
                  <li className='flex flex-col items-center justify-center p-4' onClick={()=>navigate('/project')}>
                    <div className='text-green-500'>02.</div>
                    <p className=' text-white cursor-pointer'>Project</p>
                  </li>
                  <li className='flex flex-col items-center justify-center p-4' onClick={()=>navigate('/contact')}>
                    <div className='text-green-500'>03.</div>
                    <p className=' text-white cursor-pointer'>Contact</p>
                  </li>
                  <li className='flex flex-col items-center justify-center p-4' onClick={()=>navigate('/blog')}>
                    <div className='text-green-500'>04.</div>
                    <p className=' text-white cursor-pointer'>Blog</p>
                  </li>
                  <button className='p-4 text-green-500 border border-green-500 px-[10px] py-[3px] cursor-pointer rounded'>Resume</button>
                </ul>
              </div>
            </nav>
        </header>
    </div>
  )
}

export default NavBar