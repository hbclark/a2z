"use client"
import {useState,useEffect} from 'react'
import {motion,AnimatePresence} from 'framer-motion';
import Image from 'next/image';


export default function Missions(){
    const [currentIndex,setCurrentIndex] = useState(0);

    useEffect(()=>{

        const interval = setInterval(()=>{
            handleNext();
        },5000);

        return ()=>clearInterval(interval);
    },[currentIndex]);




    function handleNext(){
        if(currentIndex === contents.length - 1){
            setCurrentIndex(0);
        }
        else{
            setCurrentIndex(currentIndex+1);
        }
    }

    function handlePrev(){
        if(currentIndex === 0){
            setCurrentIndex(contents.length - 1);
        }
        else{
            setCurrentIndex(currentIndex-1);
        }
    }

    const contents = [
        {
          "id": 1,
          "title": "Environmental Stewardship",
          "description": "Committed to leading the way in environmental responsibility by minimizing waste and promoting recycling practices.",
          "image": "/images/missions/Environmental Stewardship.jpg"
        },
        {
          "id": 2,
          "title": "Sustainable Solutions",
          "description": "Providing innovative and sustainable recycling solutions to help communities and businesses reduce their ecological footprint.",
          "image": "/images/missions/Sustainable Solutions.jpg"
        },
        {
          "id": 3,
          "title": "Community Engagement",
          "description": "Engaging with local communities to educate and promote the benefits of recycling, aiming to foster a culture of sustainability.",
          "image": "/images/missions/Sustainable Solutions.jpg"
        },
        {
          "id": 4,
          "title": "Circular Economy Promotion",
          "description": "Dedicated to transforming waste into resources to support a sustainable, circular economy for future generations.",
          "image": "/images/missions/Sustainable Solutions.jpg"
        }
      ]
    return (

<ul className=" relative px-0 lg:px-60 pt-2 pb-20  lg:py-20 bg-gradient-to-b from-green-200 to-green-500 text-black w-full min-h-screen mx-auto grid place-items-center">
  <h2 className="pb-6 text-3xl font-bold uppercase tracking-wider">Our Purposes</h2>
  <div className="absolute inset-0 bg-[url('/images/missions/background_texture.png')] bg-cover opacity-10"></div>
  <AnimatePresence>
            {contents.map((content,index)=>(
              
                <motion.li key={index} className={`${
                    currentIndex === index
                      ? "flex w-full h-[85vh] lg:h-[60vh]  transition-all duration-500 ease-in-out flex-col lg:flex-row"
                      : "hidden" 
                  }`}
                  
                 

                  >
                      
                   <div className="lg:col-span-1 ">
                       <Image src={content.image}  alt={`${content.title}`} width={600} height={600} className="w-full h-full object-cover"/>
                   </div>
                   <motion.div className="lg:col-span-1 pt-4 lg:pt-0 flex flex-col -translate-x-1/2 -translate-y-1/2 justify-center  text-left items-start"
                   
                   
                   initial={{
                    opacity: index === currentIndex ? 0 : 0.5,
                    scale: index === currentIndex ? 0.5 : 0.3,
                  }}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0.5,
                    scale: index === currentIndex ? 1 : 0.3,
                  }}
                  exit={{
                    opacity: index===currentIndex? 0:0.5,
                    scale: index===currentIndex? 0:0.5,
                  
                  }}
                  transition={{
                    ease: "linear",
                    duration: 2,
                    x: { duration: 1 },
                  }}
                  
                  >
                    <div className="w-1/2 mx-auto">
                       <h2 className="text-3xl font-bold uppercase tracking-tight mb-6  ">{content.title}</h2>
                       <p className="pb-4">{content.description}</p>
                       <button className="bg-rust-400 hover:bg-rust-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300">
  Get Involved
</button>

                       </div>
                   </motion.div>
                  
               </motion.li>
                ))}

              

</AnimatePresence>
            
        
</ul>
    )
}