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
          alt: "Carbon Footprint"
        },
        {
          src: ecoFriendly,
          alt: "Eco Friendly"
        },
        {
          src: greenEnergy,
          alt: "Green Energy"
        },
        {
          src: organic,
          alt: "Organic"
        },
        {
          src: planetEarth,
          alt: "Planet Earth"
        },
        {
          src: recovery,
          alt: "Recovery"
        },
        {
          src: recycleSymbol,
          alt: "Recycle Symbol"
        },
        {
          src: sustainableEnergy,
          alt: "Sustainable Energy"
        },
        {
          src: zeroWaste,
          alt: "Zero Waste"
        },
        {
          src: recycling,
          alt: "Recycling"
        },
        {
          src: recycleIcon,
          alt: "Recycle Icon"
        }
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
        <div>
            <div className="relative grid grid-cols-6 gap-y-4 gap-x-[1px] px-0 lg:px-[700px] mt-10 mb-4  ">
      {icons.map((icon, index) => (
        <motion.div key={index} className="col-span-1 flex justify-self-center items-center"
        variants= {fadeInOutAnimationVariants}
        initial="initial"
        whileInView = "animate"
        custom = {index}

        >
          <Image src={icon.src} alt={icon.alt} width={50} height={50} />
        </motion.div>
      ))}
    </div>


<Link href="https://www.freepik.com/search"
className="absolute bottom-2 right-2 text-green">Icon by Freepik</Link>

        </div>
    )
    
    
    
}