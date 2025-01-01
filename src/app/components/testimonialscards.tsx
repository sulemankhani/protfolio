import React from 'react'
import Image from 'next/image';
interface propsType{
  companyname:string;
  des:string;
  img:string;
  name:string;
  designation:string
}
const TestimonialsCards:React.FC<propsType> = ({companyname,des,img,name,designation}) => {
  return (
    <div>
        <div data-aos="zoom-in-up" className='border-4 border-b-sky-500 border-t-purple-400 mb-[50px] border-l-pink-400 border-r-teal-400  p-8 h-[450px] flex flex-col justify-between '>
            <h2 className='text-3xl text-black'>{companyname}</h2>
            <p>{des}</p>
            <div className='flex gap-4'>
                <Image className="grayscale rounded-full"
                src={img}
                alt="user"
                width={60}
                height={50}
                />
        
                <div>
                    <h2>{name}</h2>
                    <p className='text-gray-500'>{designation}</p>
                </div>
            </div>
            </div>
    </div>
  )
}

export default TestimonialsCards