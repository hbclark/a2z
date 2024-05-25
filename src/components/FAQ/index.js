"use client"
import AccordionCustomIcon from './AccordionCustomIcon';
import { IoIosArrowRoundForward } from "react-icons/io";
import AvatarStack  from './AvatarStack';



export default function FAQ(){
  return (
    <div className=" py-10 px-2 lg:px-96 bg-gradient-t-b from-[#33333300] to-[#000000]">
      <div className='grid grid-cols-1 lg:grid-cols-2 pt-4 gap-x-10 border-t-4 border-retroBlue-500'>
      
        <div>
        <h3 className="text-3xl font-semibold mb-4">Free Quaintly Asked Questions  </h3>
        <p className="mb-4">You can reduce pollution and help the world too.Be the change you want to see in the world: Reduce, Reuse, Recycle</p> 
       <div className="gird grid-cols-1 lg:grid-cols-2 pb-4 border-b-2 mb-4  border-black/50">
           
            <button className="w-48 mr-4  bg-goldenYellow-500 px-2 py-2 rounded-md hover:text-goldenYellow-500 hover:bg-transparent hover:outline hover:outline-1 hover:outline-goldenYellow-500">Learn More </button> 
             <button className="  w-max text-white bg-black px-2 py-2 rounded-md hover:black hover:bg-transparent hover:outline hover:outline-1 hover:text-black hover:outline-black">Our Contact </button>  
        </div> 
      

      
       <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-1">
        <AvatarStack />
        <span className="font-semibold">99.9% Customer satisfaction based on 260+ reviews.</span>
        </div>
        </div>
    
      
      
      <div>
        <AccordionCustomIcon />
      </div>
     </div>
    </div>
    
  )
}