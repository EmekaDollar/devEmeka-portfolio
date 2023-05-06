import React from 'react'
import About from './About'
import Contact from './Contact'
import Project from './Project'

function Home() {
  return (
    <div className=''>
      <div className='px-5 max-w-6xl mx-auto mt-24'>
        <section>
          <p className='text-green-500 mt-2'>Hi, my name is</p>
          <h1 className='text-gray-300 mt-2'> Abuba-Ugo Emeka.</h1>
          <h2 className='text-gray-400 mt-2'>I build things for the web.</h2>
          <p className='text-gray-500 mb-10 mt-3 max-w-[500px]'>I'm a software engineer specializing in building exceptional digital 
          experiences. I'm also focused on building accessible, human centered product.</p>
          <span className='text-green-500 mt-4 border border-green-500 px-[10px] py-[6px] cursor-pointer'>Check out my course</span>
        </section>
      </div>
      <About />
      <Project />
      <Contact />
    </div>
  )
}

export default Home