"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import Heading from './heading'

const Hero = () => {
  return (
  
        <section className="text-gray-600 bg-cover bg-fixed bg-center body-font" style={{backgroundImage:`url(/images/bg.jpg) `}}>
 
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <Heading title="About Me"/>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 " data-aos="zoom-in-up">
        Hello I AM <br />
        Suleman Khan
        <br className="hidden lg:inline-block" />
        <Typewriter
        options={{
            strings:["Web Developer","UI/UX Designer","Student",],
            autoStart:true,
            loop:true
            
        }}
        />
      </h1>
      <div className='w-[100px] h-[2px] bg-blue-700'></div>
      <p className="mb-8 leading-relaxed text-black zoom-in-up" data-aos="zoom-in-up">
      As a passionate Front-End Developer, I specialize in crafting responsive, visually appealing, and user-friendly websites and web applications. With a deep understanding of HTML5, CSS3, JavaScript, and TypeScript, I bring designs to life, ensuring seamless user experiences across all devices. My expertise in React.js, Angular, and modern front-end frameworks enables me to build dynamic and interactive user interfaces.
      
      </p>
      <div className="flex justify-center">
        <Link href="/contact">
        <button data-aos="zoom-in-up" className="inline-flex  bg-gray-300  text-black  border-0 py-2 px-6 focus:outline-none  hover:bg-slate-500 hover:text-white rounded text-lg">
          Contact
        </button>
        </Link>
        <Link href="https://github.com/sulemankhani">
        <button data-aos="zoom-in-up" className="ml-4 inline-flex  bg-gray-300  text-black  border-0 py-2 px-6 focus:outline-none  hover:bg-slate-500 hover:text-white rounded text-lg">
          My Work
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg hover:ease-in-out lg:w-full md:w-1/2 w-5/6">
      <Image
      width={400}
      height={400}
        className="sm:h-[350px] sm:w-[350px] sm:rounded-full sm:hover-rounder-none lg:h-[400px] object-cover lg:w-[400px] lg:hover-h-[400px] hover-py-2 lg:hover:w-[400px]  hover:rounded-e duration-500 hover:p-10 mx-auto object-center rounded-full"
        alt="hero"
        src="/images/rab-4.png"
      />
    </div>
  </div>
</section>

 
  )
}

export default Hero