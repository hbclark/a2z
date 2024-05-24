import Image from "next/image";
import Carousel from "@/components/Carousel";
import NavBar from "@/components/NavBar";
import {Achievements,CallToAction, PricePlan } from "@/components";

export default function Home() {
  return (
   <>
   <div className="w-full h-screen">
    <NavBar />  
   <Carousel />
  
   </div>
   <CallToAction />
   <Achievements />
   <PricePlan />
   
   </>
  );
}
