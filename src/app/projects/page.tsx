"use client"
import React from 'react'
import { useEffect } from 'react'
import Heading from '../components/heading'
import Cards from '../components/cards'
import AOS from "aos"
import "aos/dist/aos.css"
const data = [
    {
        id:0,
        title:"todolist projects",
        des:"There are todolist projects which is made by using typescript and inquirer.",
        img:"/images/todolist.png",
        link:"",
        tag:["TypeScript","Node","Inquirer"]
    },
    {
        id:1,
        title:"Static resume",
        des:"This is a Static resume builder project which is made by using html and css.",
        img:"/images/static.png",
        link:"",
        tag:["React","Node","Restful API","SCSS"]
    },
    {
        id:2,
        title:"Solar energy",
        des:"This is a solar energy project which is made by using html and css.",
        img:"/images/soler-web.png",
        link:'',
        tag:["React","Node","Restful API","SCSS"]
    },
    {
        id:3,
        title:"Backround color",
        des:"This is a Backround color which is made by using next.js and tailwind.css.",
        img:"/images/color.png",
        link:"",
        tag:["React","Node","Restful API","SCSS"]
    },
    {
        id:4,
        title:"Portfolio",
        des:"This is a Portfolio project which is made by using next.js and custom.css.",
        img:"/images/port-f.png",
        link:"",
        tag:["React","Node","Restful API","SCSS"]
    },
    {
        id:5,
        title:"Car-Website",
        des:"This is a rent a car website which is made by using next.js and tailwind.css.",
        img:"/images/Car.png",
        link:"",
        tag:["React","Node","Restful API","SCSS"]
    },
    {
        id:6,
        title:"Furniro website",
        des:"This is a Furniro website which is made by using next.js .",
        img:"/images/Furniro.png",
        link:"",
        tag:["React","Node","Restful API","SCSS"]
    },
    {
        id:7,
        title:"Figma Website",
        des:"This is a figma tamplete website which is made by using next.js.",
        img:"/images/fig.png",
        link:"",
        tag:["React","Node","Restful API","SCSS"]
    },
    {
        id:8,
        title:"Governor Initiative website Clone",
        des:"This is a Governor Initiative website clone.",
        img:"/images/gov.png",
        link:"",
        tag:[]
    },



]
const Projects = () => {
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
    <section className="text-gray-600 bg-cover bg-fixed bg-center body-font" style={{backgroundImage:`url(/images/bg.jpg) `}}>
    <div data-aos="zoom-in-up" className='container pt-32'>
        <Heading title="My Projects"/>
        <div className='grid lg:gap-x-20 xl:gap-0 xl:gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center '>
            {data.map((items)=>(
                <Cards 
                key={items.id}
                title={items.title}
                des={items.des}
                img={items.img}
                tag={items.tag}
                link={items.link}
                />
            ))}
        </div>
    </div>
    </section>
  )
}

export default Projects