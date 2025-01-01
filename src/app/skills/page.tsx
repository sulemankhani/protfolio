"use client"
import React, { useEffect } from 'react'
import Heading from '../components/heading'
import Typewriter from 'typewriter-effect'
import Testimonials from '../components/testimonials'
import AOS from "aos"
import "aos/dist/aos.css"
const Skills = () => {
    useEffect(()=>{
        AOS.init({
            easing:"ease-out-back",
            duration:1200,
            delay:100,
            mirror:true,
            anchorPlacement:"bottom-bottom",
            offset:100,
        });
        AOS.refresh();
    },[])
  return (
    <div className=' lg:pl-32 sm:p-16 pt-28 sm:text-2rem sm:m-[5px] bg-cover bg-center bg-w-[100%] h-cover p-0 text-black' style={{backgroundImage:"url(/images/bg3.png)"}}>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center gap-24">
            <div className=''>
            <h2 className='text-3xl md:text-5xl pl-[25px] ' data-aos="zoom-in-up">Technologies I work with</h2>
            <p className='text-gray-900 pt-6 p-[20px] text-justify' data-aos="zoom-in-up">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod explicabo reiciendis eveniet tenetur unde rem voluptatibus hic ad,
                 quam minima officiis ullam deleniti suscipit perspiciatis reprehenderit quae laudantium quisquam perferendis. Ducimus porro dolor 
                 dignissimos iusto, a repudiandae quos dolorum beatae harum impedit unde eveniet veniam quidem maxime repellat facere iure?
            </p>
            </div>
     


    <div className="grid grid-cols-2 text-black text-2xl sm:text-3xl p-10">
        <div className="space-y-2">
            <h2>
                
        <br className="hidden lg:inline-block" />
        <Typewriter
        options={{
            strings:["Next.js","React.js"],
            autoStart:true,
            loop:true
            
        }}
        />
        </h2>
        <h2>
                
                <br className="hidden lg:inline-block" />
                <Typewriter
                options={{
                    strings:["HTML","CSS"],
                    autoStart:true,
                    loop:true
                    
                }}
                />
                </h2>
            </div>
            <div className="space-y-2">  
            <h2>
                
                <br className="hidden lg:inline-block" />
                <Typewriter
                options={{
                    strings:["Tailwind CSS","Node.JS"],
                    autoStart:true,
                    loop:true
                    
                }}
                />
                </h2>  
                <h2>
                
                <br className="hidden lg:inline-block" />
                <Typewriter
                options={{
                    strings:["JavaScript","TypeScript"],
                    autoStart:true,
                    loop:true
                    
                }}
                />
                </h2>
       
            <div>
        </div>
    </div>
    </div>
</div>
<div className='container pt-32 pr-36'>
<Heading title="My Skills" />
</div>
   <div className="skillContainer grid lg:grid-cols-2 sm:grid gap-32 pb-20" data-aos="zoom-in-up">
    <div>
     <div className="skillItems">HTML: <div className="skills hundred"></div></div>
     <div className="skillItems">CSS: <div className="skills S5"></div></div>
     <div className="skillItems">TYPESCRIPT: <div className="skills hundred"></div></div>
     </div>
     <div>
     <div className="skillItems">JAVASCRIPT: <div className="skills S5"></div></div>

     <div className="skillItems">REACT: <div className="skills fifty"></div></div>
     <div className="skillItems">NEXT.JS: <div className="skills t5"></div></div>
   </div>  
   </div>
   <Testimonials /> 
</div>
  
  )
}

export default Skills



