"use client"


import {useState,useEffect} from 'react';
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";
import clsx from 'clsx';

import {motion,useScroll,useTransform,AnimatePresence} from 'framer-motion';

function Slider({title,img,description,button}){
    const {scrollY} = useScroll();
    const yText = useTransform(scrollY,[0,50,100,200],[1,1.1,1.1,1.2])
    const opacityText = useTransform(scrollY,[0,200,300],[1,1,1])
    
    return (
        <motion.div 
        initial ={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:1}}
        style={{'--image-url':`url(${img})`}}
        className="relative w-full h-full  text-retroBlue-200 
            z-10 overflow-hidden
            bg-[image:var(--image-url)]
            bg-no-repeat bg-center bg-cover bg-fixed
            before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-r
            before:from-[rgba(0,0,0,0.5)]
            before:to-[rgba(0,0,0,0.7)]
            before:opacity-75
            before:z-[-5]">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white ">
            <motion.h1 className="mb-4 text-4xl font-bold max-w-xl sm:mb-7"
            initial={{scale:1,opacity:1}}
            style={{scale:yText,opacity:opacityText}}
            transition={{opacity:{ease: "easeInOut",duration:0.5},scaleY:{ease: "easeInOut",duration:0.5}}}
            >{title}</motion.h1>

            <motion.p className="max-w-2xl mb-4 sm:mb-7"
            initial={{scale:1,opacity:1}}
            style={{scale:yText,opacity:opacityText}}
            transition={{opacity:{ease: "easeInOut",duration:0.5},scaleY:{ease: "easeInOut",duration:0.5}}}>{description}
            
            </motion.p> 
            <motion.button className=" mx-auto w-max  bg-retroBlue-700 px-2 py-2 rounded-md hover:text-white hover:bg-transparent hover:outline hover:outline-1 hover:outline-retroBlue-600"
            initial={{scale:1,opacity:1}}
            style={{scale:yText,opacity:opacityText}}
            transition={{opacity:{ease: "easeInOut",duration:0.5},scaleY:{ease: "easeInOut",duration:0.5}}}>{button}</motion.button>
           </div>
        
           {/* <button className="z-10 block absolute top-1/2 right-2 mr-2 -translate-y-1/2 cursor-pointer  text-[rgba(255,255,255,0.3)] px-4 py-2 rounded-full bg-transparent outline outline-1 outline-gray-100/10 hover:outline-gray-100/50 hover:scale-110 hover:text-[rgba(255,255,255,0.6)] hover:bg-[rgba(255,255,255,0.4]" onClick={onClickButton}><IoIosArrowForward /></button>
        <button className="z-10 absolute top-1/2 left-2 mr-2 -translate-y-1/2 cursor-pointer  text-[rgba(255,255,255,0.3)] px-4 py-2 rounded-full bg-transparent outline outline-1 outline-gray-100/10 hover:outline-gray-100/50 hover:scale-110 hover:text-[rgba(255,255,255,0.6)] hover:bg-[rgba(255,255,255,0.4]" onClick={onClickButton}>
            <IoIosArrowBack 
        className="text-[rgba(255,255,255,0.3] hover:text-[255,255,255,0.4]"/></button> */}
 

        </motion.div>
    )
}

export default function Carousel() {
    const [isClicked, setIsClicked] = useState(true);
    const MotionSlider = motion(Slider);
    // useEffect(()=>{
    //     const timer = setInterval(()=>{
    //         setIsClicked(!isClicked);
    //         console.log('hello')
    //     },3000)
    //     return ()=>clearInterval(timer)
    // }
    // )
    
    
    function handleClick(){
        setIsClicked(isClicked=>!isClicked)
        
    }
  return (
    <>
    
<div className="relative  w-full h-full z-1')]">
<button className="z-20 block absolute top-1/2 right-2 mr-2 -translate-y-1/2 cursor-pointer  text-[rgba(255,255,255,0.6)] px-4 py-2 rounded-full bg-transparent outline outline-1 outline-gray-100/60 hover:outline-gray-100/90 hover:scale-110 hover:text-[rgba(255,255,255,0.9)] hover:bg-[rgba(255,255,255,0.4]" onClick={handleClick}><IoIosArrowForward /></button>

        <button className="z-20 absolute top-1/2 left-2 mr-2 -translate-y-1/2 cursor-pointer  text-[rgba(255,255,255,0.6)] px-4 py-2 rounded-full bg-transparent outline outline-1 outline-gray-100/60 hover:outline-gray-100/90 hover:scale-110 hover:text-[rgba(255,255,255,0.9)] hover:bg-[rgba(255,255,255,0.4]" onClick={handleClick}>
            <IoIosArrowBack 
        className="text-[rgba(255,255,255,0.3] hover:text-[255,255,255,0.4]"/></button>
    <AnimatePresence mode="wait" initial={false}>
    {isClicked?(
    <MotionSlider key="0" 
    img ={'/images/Recycling-images/pexels-pixabay-247763.jpg'} onClickButton = {handleClick} title={"World's Leading Waste Management Pollution Solution"} description={"Pollution of the Reduce, Reuse, and Recycle waste process steps Recycle waste process steps discover service."} button={"Discover More"}/>):
    (<MotionSlider  key="1" 
    onClickButton ={handleClick} title={"Reviving Our Planet, One Recycle at a Time"} description={"Join us in our mission to transform waste into resources. At [Company Name], we believe in a sustainable future, where every piece of material has a second life. "} img={'/images/Recycling-images/A2Z.png'} button={"Discover More"}  />)}
   </AnimatePresence>
</div>


    </>
  )

}
