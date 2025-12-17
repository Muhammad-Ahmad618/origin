import { SiOrigin } from "react-icons/si"
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { BsTwitch } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";

const LinkSection = [
       
    {
      heading:"Explore",
      links:["Career Oppertunities","Our Team","About Us", "Blogs"]
    }
    ,
    {
        heading:"Discover",
        links:["Latest Release","Comming Soon","Most Popular", "Best Selling"]
    },
    {
        heading:"Support",
        links:["Customer Support","Contact Us","FAQs"]
    },
      
    {
       heading:"Connect",
       links:["Events and Tournaments","Community Forum"]
    }

]


export default function Footer() {
  return (
    <div className='bg-black py-5 md:py-10 min-h-[28rem] flex flex-col justify-between mt-14 h-full'>
        
        <div className='flex justify-around items-start gap-y-12 flex-col md:flex-row pt-0 md:pt-10 h-full'>
        <div className='pt-10 min-[408px]:space-x-0  space-x-5 md:pt-0 md:space-y-10 flex justify-between flex-wrap gap-y-5 min-[500px]:gap-y-0 items-center w-full px-5  lg:px-14 md:w-auto md:block xl:px-20'>
        
        <div className="text-white flex items-center hover:text-purple-600 ease-in-out duration-150 cursor-pointer">
          <SiOrigin className=" text-[2.2rem] md:text-[3rem] rotate-45" />
          <h3 className="text-[1.4rem] lg:text-[2rem] font-bold">rigin</h3>
        </div>
        <div className='flex items-center gap-x-5 md:space-y-5 md:block'> 
        <h4 className='text-white text-sm md:text-[1.2rem] font-medium'>Follow Us</h4>
        <ul className='flex text-white gap-x-7 text-lg md:text-xl xl:text-2xl' >
            <li><FaFacebook className='cursor-pointer hover:text-purple-400' /></li>
            <li><FaXTwitter className='cursor-pointer hover:text-purple-400'/></li>
            <li><FaDiscord className='cursor-pointer hover:text-purple-400'/></li>
            <li><BsTwitch  className='cursor-pointer hover:text-purple-400'/></li>
        </ul>
        </div>
        </div>

        <div className='text-white flex justify-start gap-y-8 flex-wrap px-5 h-auto pb-14 min-[595px]:h-[20rem] min-[408px]:justify-evenly gap-x-10 md:gap-x-8 w-full lg:gap-x-12'>
           
           {LinkSection.map((section, index) => (
            <div className='space-y-7' key={index}>
                <h4 className=' text-base md:text-[1.2rem] lg:text-[1.4rem] font-bold bg-gradient-to-r from-purple-800 to-purple-400 bg-clip-text text-transparent'>{section.heading}</h4>
                {section.links.map((link, linkIndex) => (
                <ul className=' space-y-5 lg:space-y-6 text-[0.7rem] lg:text-sm text-gray-300 ' key={linkIndex}>
                    <li><a href='/' className='flex items-center font-medium hover:text-purple-500'><IoChevronForward/> {link}</a></li>
                </ul>
                ))}
            </div>
         ))}
        </div>

        </div>
        
        <div className='max-w-[20rem] mx-auto w-full'>
        <h3 className='text-gray-300 text-center cursor-pointer hover:text-purple-500 hover:underline  text-[0.7rem] lg:text-sm'>© 2025, Origin, Inc. All rights reserved.</h3>
        </div>
      
    </div>
  )
}
