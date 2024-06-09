"use client"
import {useState} from  "react";
import { AnimatePresence,motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRightLong,FaArrowLeftLong} from "react-icons/fa6";

export default function Testimonials(){
    const testimonials = [{
        id:1,
        title:"user 1",
        description:"user1",
        img:"/images/Events/Community Recycling Day.jpg",
        userName:"user1"
    },{id:2,
        title:"user 2",
        description:"user2",
        img:"/images/Events/Tech Disposal Drive.jpg",
        userName:"user2"}]

    const [activeIndex,setActiveIndex] = useState(0);
    
    function handleNext(){
        setActiveIndex(prevIndex => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
        
    }

    function handlePrev(){
        setActiveIndex(prevIndex => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    }
    
    
    
    return (<div className="relative w-full h-lvh bg-green-400">
        

        

        <ul>
            
            
        <AnimatePresence  mode="wait">
          {testimonials.map(({id,title,description,img,userName},index)=>(
            activeIndex === index&&(
            <motion.div 
            initial={{opacity:0,x:"-100%"}} animate={{opacity:1,x:0}} exit={{opacity:0,x:0}} transition={{ duration: 0.5,}}
            key={id} className="grid grid-cols-1 lg:grid-cols-2 h-[200px] lg:h-[550px]">
                <div  >
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>{userName}</p>
                </div>
                <div className="relative">
                    <Image src={img} alt = {title} fill/>
                </div>
            </motion.div>)

          ))}
        
           
           
            </AnimatePresence>
        </ul>
        <button onClick ={handleNext} className="absolute p-3 top-1/2 right-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-600 hover:border-gray-900 z-1"  ><FaArrowRightLong /></button>
        <button onClick = {handlePrev} className="absolute p-3 top-1/2 left-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-600 hover:border-gray-900 z-1"><FaArrowLeftLong /></button>
    </div>)

}