"use client "
import Image from   "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
export default function CallToAction(){
    return <div className=" px-0 mt-10 flex flex-col lg:flex-row lg:px-96 bg-gradient-to-b from-green-500 to-green-600">
        <div className="absolute inset-0 bg-[url('/images/missions/background_texture.png')] bg-cover opacity-10"></div>
<div className="my-auto w-full bg-emerald-500">
    <Image src="/images/recycle concept.jpg" alt="cta" width={600} height={600}
    className=" object-cover   " />

</div>
<div className=" my-auto  text-white px-2 lg:pl-64 py-4 lg:py-0 ">
    <div className="absolute inset-0 bg-[url('/images/missions/background_texture.png')] bg-cover opacity-10"></div>
    <h3 className=" mb-6 text-3xl font-bold capitalize">The planet&apos;s future is ours</h3>
    <dp>Our actions today are shape tomorrow&apos;s earth. By making sustainable choice, we can ensure a vibrant future for our planet</dp>
    <button className="px-3 py-2 mt-4  rounded-lg bg-retroBlue-500 text-white flex flex-row
    hover:text-black hover:bg-transparent transition-transform hover:scale-105 items-center
    hover:outline-none hover:outline hover:outline-retroBlue-500 
    ">Act Now <IoIosArrowRoundForward className="ml-1  text-2xl   "/></button>
</div>
    </div>
}