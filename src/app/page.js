import Image from "next/image";
import Carousel from "@/components/Carousel";

import {Achievements,CallToAction,Contact, NavBar,PricePlan } from "@/components";

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
   <Contact />
   </>
  );
}
