"use client"

import { RiDeleteBinLine } from "react-icons/ri";
import { PiGreaterThanThin } from "react-icons/pi";
import {animate, motion} from "framer-motion";



export default function PricePlan(){
    const prices = [
        {id:1,title:"General waste", price:"$100", features:["Feature 1", "Feature 2", "Feature 3"],color:"retroBlue-500"},
        {id:2,title:"Biomedical waster", price:"$300", features:["Feature 1", "Feature 2", "Feature 3"],color:"goldenYellow-600"},
        {id:3,title:"Hazardous waste", price:"$600", features:["Feature 1", "Feature 2", "Feature 3"],color:"goldenYellow-800"},
       
    ]

    

    
    

   
    const moveUpVariants = {
        hidden: {opacity: 0, y: 50},
        animate: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: i * 0.5,
            },
        }),
    }
    
    return (
        <>
        <h2 className="mt-8 mb-10  text-3xl font-bold text-center"><span className="pb-2 px-2 border-b-4 border-retroBlue-500">Our Price Options</span></h2>
        
        
        <div className="px-0 my-6 lg:px-80 mx-auto grid grid-cols-1 md:grid-cols-3
        justify-center gap-4 ">
            
            {prices.map(({id,title,price,features,color}, index) => (
                <motion.div key={id}
                variants={moveUpVariants}
                initial="hidden"
                whileInView="animate"
                custom={index}
                className={`w-72 h-72 mx-auto border-t-8 border border-${color} p-4 rounded-lg shadow-lg bg-white text-center`}
                >
              <p className="mt-4 flex justify-center"> <RiDeleteBinLine className={`text-${color} text-3xl`} /></p>
            <h2 className="my-4 text-xl font-semibold">{title}</h2>
            <p className="mb-4"><span className=" text-xl font-semibold">{price}</span> / <span className="font-medium text-sm">per Month</span> </p>
            <ul>
                {features.map((feature, index) => (
                <li key={index} className="flex justify-center mx-auto pb-1
                hover:-translate-y-[2px] transition-transform cursor-pointer hover:text-goldenYellow-500  
                "><PiGreaterThanThin className="mr-3 mt-1 text-sm "/><span className="hover:border-b hover:border-goldenYellow-500">{feature}</span></li>
                ))}
            </ul>
            </motion.div>
            ))}
        </div>
        </>
    );
}
