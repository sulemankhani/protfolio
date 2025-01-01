import React from 'react'
import Heading from '../components/heading'
import TestimonialsCards from './testimonialscards'

const testimoniaksData = [
    {
        companyName:"webflow",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore autem incidunt velit! Quis doloribus necessitatibus illum sapiente, quisquam ipsum in?",
        img:"/images/c1.png",
        name:"Elliot John",
        designation:"Marketing Executive"

    },
    {
        companyName:"facebook",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore autem incidunt velit! Quis doloribus necessitatibus illum sapiente, quisquam ipsum in?",
        img:"/images/c3.jpg",
        name:"ALessa Elbort",
        designation:"Senior Engineering Manager"

    },
    {
        companyName:"google",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore autem incidunt velit! Quis doloribus necessitatibus illum sapiente, quisquam ipsum in?",
        img:"/images/c2.png",
        name:"Michale Albert",
        designation:"Engineering Manager"

    },
]
const Testimonials = () => {
  return (
    <div className='container pr-32 pt-32'>
        <Heading title="Testimonials"/>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 p-2 ml-5 gap-8'>
            {testimoniaksData.map((item,index)=>(
                <TestimonialsCards 
                key={index}
                companyname={item.companyName}
                des={item.des}
                img={item.img}
                name={item.name}
                designation={item.designation}/>
            ))}
        </div>
    </div>
  )
}

export default Testimonials