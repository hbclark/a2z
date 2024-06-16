"use client "
import Image from   "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
export default function CallToAction(){
    return <div className="  mt-10  bg-gradient-to-b from-green-300 to-green-500 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto">
        {/* <div className="absolute inset-0 bg-[url('/images/missions/background_texture.png')] bg-cover opacity-10"></div> */}
<div className="my-4  w-full mx-auto ">
    <Image src="/images/recycle concept.jpg" alt="cta" width={600} height={600}
    className=" object-cover   " />

</div>
<div className=" my-auto  text-white px-2 lg:px-20  ">
    <div className="absolute inset-0 bg-[url('/images/missions/background_texture.png')] bg-cover opacity-10"></div>
    <h3 className=" mb-6 text-3xl font-bold capitalize">The planet&apos;s future is ours</h3>
    <p>Our actions today are shape tomorrow&apos;s earth. By making sustainable choice, we can ensure a vibrant future for our planet</p>
    <button className="px-3 py-2 mt-4  rounded-lg bg-retroBlue-500 text-black flex flex-row
    hover:text-black hover:bg-transparent transition-transform hover:scale-105 items-center
    hover:outline-none hover:outline hover:outline-retroBlue-500 
    ">Act Now <IoIosArrowRoundForward className="ml-1  text-2xl   "/></button>
</div>
    </div>
    </div>
}