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
        <div className="my-4">
          <h2 className="text-2xl font-bold text-center">Our Commitment to Sustainability</h2>
            <div className="relative grid grid-cols-6 gap-y-4 gap-x-[1px] px-0  mt-10 mb-4 lg:px-64 xl:px-96 ">
      {icons.map((icon, index) => (
        <motion.div key={index} className="col-span-1 flex justify-self-center items-center"
        variants= {fadeInOutAnimationVariants}
        initial="initial"
        whileInView = "animate"
        custom = {index}

        >
          <div> <Image src={icon.src} alt={icon.alt} width={50} height={50} className="ml-2" />
            <p className="mt-2">{icon.desc}</p>
          </div>
         
        </motion.div>
      ))}
      <Link href="https://www.freepik.com/search"
className="absolute bottom-2 right-2 text-green-400 text-xs">Icon by Freepik</Link>
    </div>




        </div>
    )
    
    
    
}