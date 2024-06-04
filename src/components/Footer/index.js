"use client"    
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';
export default function Footer() {
  return (
    <footer className="w-full mx-auto max-w-7xl pt-10 border-t-8 border-goldenYellow-600  pl-4 lg:pl-0  ">
        <div className=" pb-10 lg:pb-2 ">
        <div className="flex sm:flex-row flex-col justify-between   ">
            <section className="mb-4">
                <Image src="/images/a2z.svg" alt="A2Z Logo" width={60} height={60} className="font-bold mb-1 cursor-pointer hover:opacity-80 hover:-translate-y-[2px] transition-transform"/>
                <p className="pb-3 text-xl">Let&apos;s create a green world together!</p>
                <ul className="flex justify-start gap-3">
                    <li>
                        <Link href="https://www.facebook.com " >
                            <Image src="/images/social_media_icons/iconfinder_1_Facebook_colored_svg_5296499.png" alt="Facebook" width={30} height={30}
                            className="hover:opacity-80 hover:-translate-y-[2px] transition-transform" />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.instagram.com" >
                            <Image src="/images/social_media_icons/iconfinder_1_Instagram_colored_svg_1_5296765.png" alt="Instagram" width={30} height={30}
                             className="hover:opacity-80 hover:-translate-y-[2px] transition-transform" />
                        </Link>
                        </li>
                    <li>
                        <Link href="https://www.twitter.com" >
                            <Image src="/images/social_media_icons/iconfinder_1_Twitter_colored_svg_5296514.png" alt="Twitter" width={30} height={30} 
                             className="hover:opacity-80 hover:-translate-y-[2px] transition-transform"/>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.youtube.com" >
                            <Image src="/images/social_media_icons/iconfinder_1_Youtube_colored_svg_5296521.png" alt="Linkedin" width={30} height={30} 
                             className="hover:opacity-80 hover:-translate-y-[2px] transition-transform"/>
                        </Link>
                    </li>
                </ul>

                
            </section>
            <section className="mb-3 lg:mb-0">
                <h2 className="text-xl border-goldenYellow-400 border-b-2 mb-2 ">Quick Links</h2>
                <ul>
                    <motion.li className="flex pb-2 text-gray-800 hover:text-gray-600 hover:underline hover:-translate-y-[2px] transition-transform"
                    initial={{ x: -20, opacity: 0 }}  whileInView={{x:0, opacity: 1}} transition={{duration: 0.2,ease: "easeInOut"}} whileHover={{y:-2}}
                    
                    ><FaArrowRight className="mt-1 mr-1 text-retroBlue-700 "/><Link href="/">Home</Link></motion.li>
                    <motion.li className="flex py-1 text-gray-800 hover:text-gray-600 hover:underline hover:-translate-y-[2px] transition-transform"
                     initial={{ x: -20, opacity: 0 }}  whileInView={{x:0, opacity: 1}} transition={{duration: 0.2,ease: "easeInOut"}} whileHover={{y:-2}}><FaArrowRight className="mt-1 mr-1 text-retroBlue-700"/><Link href="/purpose">Purpose</Link></motion.li>
                    <motion.li className="flex py-1 text-gray-800 hover:text-gray-600 hover:underline hover:-translate-y-[2px] transition-transform"
                     initial={{ x: -20, opacity: 0 }}  whileInView={{x:0, opacity: 1}} transition={{duration: 0.2,ease: "easeInOut"}} whileHover={{y:-2}}><FaArrowRight className="mt-1 mr-1 text-retroBlue-700 "/><Link href="/about">About Us</Link></motion.li>
                    <motion.li className="flex py-1 text-gray-800 hover:text-gray-600 hover:underline hover:-translate-y-[2px] transition-transform"
                     initial={{ x: -20, opacity: 0 }}  whileInView={{x:0, opacity: 1}} transition={{duration: 0.2,ease: "easeInOut"}} whileHover={{y:-2}}><FaArrowRight className="mt-1 mr-1 text-retroBlue-700 "/><Link href="/contact">Contact Us</Link></motion.li>
                </ul>
            </section>
            <section>
                <p className="mb-4 "><span className="border-b-2 border-goldenYellow-400 text-xl">Our NewsLetter</span></p>
                <form className="flex gap-2 w-max-full sm:flex-row flex-col">
                    <input type="email" placeholder="Email" className="block px-2 w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-retroBlue-500 sm:text-sm sm:leading-6 border-retroBlue-300"/>
                    <button className="bg-goldenYellow-600 text-black px-2 py-1 border-1 border-transparent rounded-md hover:text-goldenYellow-900 hover:outline-1 hover:outline hover:outline-goldenYellow-500 hover:bg-transparent transition-transform">Subscribe</button>
                </form>
            </section>
            <section></section>
        </div>
        </div>
        <div className="bg-gray-200">
        <div
        className="bg-gray-100 flex sm:flex-row flex-col justify-between lg:px-40 py-6 "
        >
            <p>Copyright &copy; {new Date().getFullYear()} A2Z ALl rights reserver</p>
            <ul className="flex sm:flex-row flex-col justify-between gap-4">
                <li className="text-gray-800 hover:text-gray-600 hover:underline hover:-translate-y-[2px] transition-transform"><Link href="/privacy">Privacy Policy</Link></li>
                <li className="text-gray-800 hover:text-gray-600 hover:underline hover:-translate-y-[2px] transition-transform"><Link href="/terms">Terms and Conditions</Link></li>
            </ul>
        </div>
        </div>
        
    </footer>
  )
}
