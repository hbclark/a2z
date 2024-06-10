"use client"
import { useState } from 'react';
import Image from 'next/image';
import {motion, AnimatePresence} from 'framer-motion';

import recyclingEvents from './recyclingEvents.js';

export default function Events(){
const [isHovering, setIsHovering] = useState(false);
const [currentIndex, setCurrentIndex] = useState(0);

function handleClick(e,status){
    setIsHovering(status); 
    
    setCurrentIndex(e.target.id-1);
   

}
   

    return (
        <div className="w-full mt-4">
            <h2 className="text-3xl font-bold text-center mb-6">
                Recycling Events
            </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 justify-items-center px-0 ">
           
          {recyclingEvents.map(({id, imageSrc,title, description, time, location}, index) => (
            <div key={id}
           
            className=" px-4 lg:px-0 relative w-full h-[600px] lg:h-[500px] rounded-xl">
                <div className='relative h-[200px] lg:h-full'>
                <Image
                src={imageSrc}
                alt="Description"
                onMouseEnter={(e) => handleClick(e,true)}
                onMouseLeave={(e) => handleClick(e,false)}
                
                id={id}
                fill
                />
                </div>
                <div className="block lg:hidden">
                <h3 className="text-3xl mb-2 font-bold mt-4">{title}</h3>
                    <p className="mb-6 leading-6">{description}</p>
                    <p className="text-xl font-semibold">{time}</p>
                    <p>{location}</p>
                    <button className=" w-32 mt-6 mr-4  bg-goldenYellow-700 px-2 py-2 rounded-md text-white hover:bg-transparent hover:outline hover:outline-1 hover:outline-goldenYellow-700">Learn More </button> 
                </div>
                <AnimatePresence mode="wait">
              
                <motion.div className="z-10 absolute inset-0 bg-black bg-opacity-50 flex  items-center "
                initial={{opacity: 0,scale:0.5}}
                whileHover={{opacity: 1,scale:1}}
                exit={{opacity: 0,scale:0.5}}
                transition={{duration: 0.5}}

                >
                    <div className="text-white p-4 text-left">
                    <h3 className="text-3xl mb-2 font-bold">{title}</h3>
                    <p className="mb-6 leading-6">{description}</p>
                    <p className="text-xl font-semibold">{time}</p>
                    <p>{location}</p>
                    <button className=" w-32 mt-6 mr-4  bg-goldenYellow-700 px-2 py-2 rounded-md hover:text-white hover:bg-transparent hover:outline hover:outline-1 hover:outline-goldenYellow-700">Learn More </button> 
                    </div>
                </motion.div>
                
                </AnimatePresence>
            </div>
            ))}
       
        </div>
        </div>


    )
}