"use client"
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {
    carbonFootprint,
    ecoFriendly,
    greenEnergy,
    organic,
    planetEarth,
    recovery,
    recycleSymbol,
    sustainableEnergy,
    zeroWaste,
    recycling,
    recycleIcon  
  } from "@/assets/greenIcons/index.js";
  

export default function GreenIcons(){
    const icons = [
        {
          src: carbonFootprint,
          alt: "Carbon Footprint",
          desc:"Reduce Carbon Emissions"
        },
        {
          src: ecoFriendly,
          alt: "Eco Friendly",
          desc:"Eco-Friendly Solutions"

        },
        {
          src: greenEnergy,
          alt: "Green Energy",
          desc:"Renewable Energy"
        },
        
       
        {
          src: recovery,
          alt: "Recovery",
          desc:"Recycling & Reuse"
        },
      
        {
          src: sustainableEnergy,
          alt: "Sustainable Energy",
          desc:"Sustainable Energy"
          
        },
        
        
       
    ]

    const fadeInOutAnimationVariants = {
        initial: { opacity: 0, y: 100 },
        animate:(i)=>({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                type: "spring",
            }
        }),
        }
    

    return (
        <div className="my-4 relative">
          <h2 className="text-2xl font-bold text-center">Our Commitment to Sustainability</h2>
        <div className=" grid grid-cols-1 lg:grid-cols-5 gap-y-4 gap-x-[1px] px-2 justify-self-center  lg:px-64 mt-10 mb-4 max-w-7xl mx-auto ">
      {icons.map((icon, index) => (
        <motion.div key={index} className="col-span-1 flex  flex-col   justify-center  gap-x-20  "
        variants= {fadeInOutAnimationVariants}
        initial="initial"
        whileInView = "animate"
        custom = {index}

        >
           <Image src={icon.src} alt={icon.alt} width={50} height={50} className="ml-2 " />
            <p className="mt-2">{icon.desc}</p>
          
         
        </motion.div>
      ))}
     
    </div>

    {/* <Link href="https://www.freepik.com/search"
className="absolute bottom-2 right-2 text-black text-xs">Icon by Freepik</Link> */}


        </div>
    )
    
    
    
}