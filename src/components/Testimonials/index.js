"use client"
import {useState} from  "react";
import { AnimatePresence,motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRightLong,FaArrowLeftLong} from "react-icons/fa6";

export default function Testimonials(){
    const testimonials = [{
        id:1,
        title:"user 1",
        description:	"From the pick-up drivers to the support staff your team always partners with us to make sure our needs are met.",
        img:"/images/Events/Community Recycling Day.jpg",
        userName:"Greg G",
        time:"since 2024"
    },{id:2,
        title:"user 2",
        description:"Providing our company with a way to recycle the wide variety of product we have helps with our company wide green initiative.",
        img:"/images/Events/Tech Disposal Drive.jpg",
        userName:"James P",time:"since 2023"}]

    const [activeIndex,setActiveIndex] = useState(0);
    
    function handleNext(){
        setActiveIndex(prevIndex => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
        
    }

    function handlePrev(){
        setActiveIndex(prevIndex => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    }
    
    
    
    return (<div className="relative text-white pt-4 lg:pt-0 bg-green-400 px-2 lg:px-0">
        
        <p className="py-6 text-4xl text-center font-bold">Testimonials</p>
        

        <ul className="max-w-7xl mx-auto">
           
            
        <AnimatePresence  mode="wait">
          {testimonials.map(({id,title,description,img,userName,time},index)=>(
            activeIndex === index&&(
            <motion.li 
            initial={{opacity:0,x:"-100%"}} animate={{opacity:1,x:0}} exit={{opacity:0,x:0}} transition={{ duration: 0.5,}}
            key={id} className="grid grid-cols-1  lg:grid-cols-2 ">
                <div className="order-2 lg:order-1 h-[200px] lg:h-[550px] flex px-0 lg:px-20 justify-center items-center">
                <div >
                    
                    <p className="text-xl font-semibold">&quot;{description}&quot;</p>
                    <p className="mt-4 "><span className="tex-4xl font-bold">{userName}</span><span className=" ml-2 text-xs">{time}</span></p>
                </div>
                </div>
                <div className="relative order-1 lg:order-2 h-[200px] lg:h-[550px]">
                    <Image src={img} alt = {title} fill/>
                </div>
            </motion.li>)

          ))}
        
           
           
            </AnimatePresence>
        </ul>
        <button onClick ={handleNext} className="absolute p-3 top-1/2 right-4 -translate-x-1/2 -translate-y-1/2 rounded-full border text-slate-600 border-slate-600 hover:border-gray-900 z-1"  ><FaArrowRightLong className="text-slate-600" /></button>
        <button onClick = {handlePrev} className="absolute p-3 top-1/2 left-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-600 hover:border-gray-900 z-1"><FaArrowLeftLong /></button>
    </div>)

}