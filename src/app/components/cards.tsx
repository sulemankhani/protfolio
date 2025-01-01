
import React from 'react'
import Image from 'next/image';




interface propsType{
    title:string;
    des:string;
    link:string;
    img:string;
    tag:string[];
}
const Cards:React.FC<propsType> = ({title,des,link,img,tag}) => {
  return (
    <div className='border-4 border-b-sky-500 border-t-purple-400  border-l-pink-400 border-r-teal-400  w-[300px] gap-10 sm:w-[350px] sm:mb-3 mb-6'>
        <div>
        <Image className="w-[300px] sm:w-[350px] h-[350px] p-4 "
        src={img}
        alt={title}
        width={350}
        height={350}
        />
        
      </div>

      <div className='p-4 space-y-4 '>
        <div className="text-4xl" font-extralight>{title}</div>
        <div>{des}</div>
        <button className='text-[13px]'>{link}</button>
        <div className='flex gap-3'>
            {tag.map(el=><div className='tags border border-accent p-2'
        key={el}
        >{el}</div>)}
        </div>
      </div>
    </div>


  )
}

export default Cards