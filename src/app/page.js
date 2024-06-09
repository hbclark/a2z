import Image from "next/image";
import Carousel from "@/components/Carousel";

import {Achievements,CallToAction,Contact, Events,FAQ,NavBar,PricePlan,Missions,GreenIcons } from "@/components";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
   <>
   <div className="w-full h-screen">
    <NavBar />  
   <Carousel />
  
   </div>
   <Events />
   <div id="purpose"><Missions />
   <PricePlan /></div>
   
   <div id="about"><Achievements />
   <Testimonials />
   <GreenIcons /></div>
   
   <CallToAction />
   <div id="contact"><Contact />
   <FAQ />  </div>
   
   </>
  );
}
