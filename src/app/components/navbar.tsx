"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { AiOutlineCloudDownload } from 'react-icons/ai'
const Navbar = () => {
  return (
    <div>
        <header className="text-gray-700 font-bold body-font bg-cover bg-fixed bg-center" style={{backgroundImage:"url(/images/bg1.jpg)"}}>
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row item-centers">
    <Link href="" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src="/images/rab-4.png" alt="logo" className='rounded-full ' width={50} height={50}/>
      <span className="ml-3 text-xl hover:text-red-500 font-bold">Suelman khan</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    <Link href="/" className="mr-5 hover:text-pink-700 font-semibold">Home</Link>
      <Link href="/about" className="mr-5 hover:text-pink-700 font-semibold">About</Link>
      <Link href="/projects" className="mr-5 hover:text-pink-700 font-semibold">Projects</Link>
      <Link href="/skills" className="mr-5 hover:text-pink-700 font-semibold">Skills</Link>
      <Link href="/contact" className="mr-5 hover:text-pink-700 font-semibold">Contact</Link>
    </nav>
      <Link href="/images/cv.pdf">
    <button className="inline-flex items-center btext-white bg-gray-300  text-black border-0 py-1 px-3 focus:outline-none hover:bg-slate-500 hover:text-white rounded text-base mt-4 md:mt-0">
      Download CV
      <AiOutlineCloudDownload className="text-xl ml-2"/>   
    </button>
      </Link>
  </div>
</header>
    </div>
  )
}

export default Navbar