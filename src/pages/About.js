import React from "react";
import image from "../assets/IMG_6621.jpg";
import { BsCaretRight } from "react-icons/bs";

function About() {
  return (
    <div className='px-5 max-w-5xl mx-auto mt-20'>
      <section className='flex flex-col md:flex-row items-center gap-10'>
        <div className='max-w-[480px]'>
          <div className='after:border-t after:border-gray-400 after:w-[150px] after:ml-4 flex items-center'>
            <h3 className='text-white'>
              <span className='text-green-500 mr-2'>01.</span>About Me
            </h3>
          </div>
          <p className='mt-6'>
            Hello My name is Brittany and i enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I try editing custom Tumblr themes - turns out hacking together
            a custom reblog button taught me a lot about HTML and CSS
          </p>
          <p className='mt-3'>
            fast-forward to today, and I've had the privilege of working at{" "}
            <span className='text-green-500'>
              an advertising agency, a start up, a huge corporation, and a
              student-led design studio.
            </span>{" "}
            My main focus these days is building accessible, inclusive products
            and digital experiences at{" "}
            <span className='text-green-500'>Upstatement</span>
            for a variety of clients.
          </p>
          <p className='mt-3'>
            I also recently{" "}
            <span className='text-green-500'>launched a course</span> that
            covers everything you need to build a web app with spotify API using
            Node and React.
          </p>
          <p className='mt-3'>
            Here are a few technologies I've been working with recently.
          </p>
          <div className='mt-3 flex gap-12'>
            <div>
              <ul className='flex flex-col'>
                <li className='flex gap-3 items-center'>
                  <BsCaretRight className='fill-green-500' />
                  JavaScript (ES6+)
                </li>
                <li className='flex gap-3 items-center'>
                  <BsCaretRight className='fill-green-500' />
                  React
                </li>
                <li className='flex gap-3 items-center'>
                  <BsCaretRight className='fill-green-500' />
                  Node.js
                </li>
              </ul>
            </div>
            <div>
              <ul className='flex flex-col'>
                <li className='flex gap-3 items-center'>
                  <BsCaretRight className='fill-green-500 fill-font-bold' />
                  Typescript
                </li>
                <li className='flex gap-3 items-center'>
                  <BsCaretRight className='fill-green-500' />
                  Eleventy
                </li>
                <li className='flex gap-3 items-center'>
                  <BsCaretRight className='fill-green-500' />
                  WordPress
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='md:-mt-12 mt-4'>
          <img
            src={image}
            alt='user'
            className='z-10 relative h-[270px] w-[270px]  rounded'
          />
          <div className='border border-green-500 h-[270px] w-[270px] z-0 relative -mt-[260px] ml-[20px]'></div>
        </div>
      </section>
    </div>
  );
}

export default About;
