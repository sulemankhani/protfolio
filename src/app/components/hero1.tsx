import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Hero1 = () => {
  return (
    <div className='bg-cover bg-center h-screen' style={{backgroundImage:"url(/images/bg1.jpg)"}}>
            <div>
            <h1 data-aos="zoom-in-up" className='text-center font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text text-5xl pt-16'>Welcome to my Portfolio</h1>
            <p data-aos="zoom-in-up" className='text-center text-black  pt-4  text-3xl'>Meet me I am Suleman Khan</p>
            </div>
            <div>
                <Image src="/images/rab-4.png"
                width={400}
                height={400}
                alt="Suleman"
                data-aos="zoom-in-up"
                className='rounded-full px-12 lg:ml-[35%] md:ml-[26%] mt-12 sm:ml-[3%] md:ml-['
                />
            </div>
            <button data-aos="zoom-in-up" className='lg:ml-[42%] md:ml-[38%] ml-[28%] mt-6 border-2 border-blue-600 p-2 rounded-lg text-center font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text text-xl'><Link href="/about">More About Me</Link></button>
        
        </div>
 
  )
}

export default Hero1