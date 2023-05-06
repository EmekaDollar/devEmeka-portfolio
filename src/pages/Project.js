import React from 'react'
import image from '../assets/IMG_6621.jpg'
import { RiGithubLine } from 'react-icons/ri'
import { BsBoxArrowUpRight } from 'react-icons/bs'

function Project() {
  return (
    <div className='px-5 max-w-5xl mx-auto mt-20'>
      <section>
        <div className='after:border-t after:border-gray-400 after:w-[150px] after:ml-4 flex items-center'>
          <h3 className='text-white'><span className='text-green-500 mr-2'>03.</span>Some Things I've Built</h3>
        </div>
        <div className='mt-6'>
          <div className='md:flex-row'>
            <img src={image} alt='project' className='relative z-0 shadow-xl'/>
            <div className='absolute z-10 border border-gray-100 px-3 -mt-[400px] max-w-[420px] md:ml-[450px] md:px-2 mx-2'>
              <h3 className='text-green-500 flex md:justify-end'>Featured Project</h3>
              <h3 className='text-white flex md:justify-end'>Halcolyn Theme</h3>
              <p className='mt-8 flex justify-start text-left md:justify-end md:text-right md:p-5 md:bg-blue-100'>A minimal, dark blue theme for VS Code, Sublime, 
              Atom, ITem, and more.
              </p>
              <p className='mt-8 flex md:justify-end'>VS Code Sublime Text Atom iTerm2 Hyper</p>
              <div className='flex gap-4 mt-6 md:justify-end'> 
                <RiGithubLine className='fill-gray-100'/>
                <BsBoxArrowUpRight className='fill-gray-100'/>
              </div>
            </div>
          </div>
          <div className='mt-6'>
          <div className='md:flex-row'>
            <img src={image} alt='project' className='relative z-0 shadow-xl'/>
            <div className='absolute z-10 border border-gray-100 px-3 -mt-[400px] max-w-[420px] md:ml-[450px] md:px-2 mx-2'>
              <h3 className='text-green-500 flex md:justify-end'>Featured Project</h3>
              <h3 className='text-white flex md:justify-end'>Halcolyn Theme</h3>
              <p className='mt-8 flex justify-start text-left md:justify-end md:text-right md:p-5 md:bg-blue-100'>A minimal, dark blue theme for VS Code, Sublime, 
              Atom, ITem, and more.
              </p>
              <p className='mt-8 flex md:justify-end'>VS Code Sublime Text Atom iTerm2 Hyper</p>
              <div className='flex gap-4 mt-6 md:justify-end'> 
                <RiGithubLine className='fill-gray-100'/>
                <BsBoxArrowUpRight className='fill-gray-100'/>
              </div>
            </div>
          </div>
          </div>
          <div></div>
        </div>

        <div className='mt-20'>
          <h1 className='text-gray-100 text-center text-xl'>Other Noteworthy Projects</h1>
          <a href='/' className='text-green-500 block text-center'>view the archive</a>
          <div className='mt-6 gap-6 grid grid-cols-13'>
            <div className='p-4 bg-blue-500'>
              <div className='flex justify-between'>
                <RiGithubLine className='fill-gray-100'/>
                <RiGithubLine className='fill-gray-100'/>
              </div>
              <h3 className='mt-3 text-white'>Integrating Algolia Search with WordPress Multisite</h3>
              <p className='text-gray-300 mt-2'>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
              <p className='text-gray-300 mt-3'>Vue Node Firebase</p>
            </div>
            <div className='p-4 bg-blue-500'>
              <div className='flex justify-between'>
                <BsBoxArrowUpRight className='fill-gray-100'/>
                <div className='flex gap-3'>
                  <RiGithubLine className='fill-gray-100'/>
                  <BsBoxArrowUpRight className='fill-gray-100'/>
                </div>
              </div>
              <h3 className='mt-3 text-white'>Integrating Algolia Search with WordPress Multisite</h3>
              <p className='text-gray-300 mt-2'>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
              <p className='text-gray-300 mt-3'>Vue Node Firebase</p>
            </div>
            <div className='p-4 bg-blue-500'>
              <div className='flex justify-between'>
                <RiGithubLine className='fill-gray-100'/>
                <RiGithubLine className='fill-gray-100'/>
              </div>
              <h3 className='mt-3 text-white'>Integrating Algolia Search with WordPress Multisite</h3>
              <p className='text-gray-300 mt-2'>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
              <p className='text-gray-300 mt-3'>Vue Node Firebase</p>
            </div>        
            <div className='p-4 bg-blue-500'>
              <div className='flex justify-between'>
                <BsBoxArrowUpRight className='fill-gray-100'/>
                <div className='flex gap-4'>
                  <RiGithubLine className='fill-gray-100'/>
                  <BsBoxArrowUpRight className='fill-gray-100'/>
                </div>
              </div>
              <h3 className='mt-3 text-white'>Integrating Algolia Search with WordPress Multisite</h3>
              <p className='text-gray-300 mt-2'>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
              <p className='text-gray-300 mt-3'>Vue Node Firebase</p>
            </div>
            <div className='p-4 bg-blue-500'> 
              <div className='flex justify-between'>
                <BsBoxArrowUpRight className='fill-gray-100'/>
                <div className='flex gap-4'>
                  <RiGithubLine className='fill-gray-100'/>
                  <BsBoxArrowUpRight className='fill-gray-100'/>
                </div>
              </div>
              <h3 className='mt-3 text-white'>Integrating Algolia Search with WordPress Multisite</h3>
              <p className='text-gray-300 mt-2'>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
              <p className='text-gray-300 mt-3'>Vue Node Firebase</p>
            </div>
          </div>
          <button className='text-green-500 p-2 border-[2px] border-green-400 flex m-auto mt-14'>Show More</button>
        </div>
      </section>
    </div>
  )
}

export default Project