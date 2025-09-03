import { SiOrigin } from "react-icons/si"
import { Link } from "react-router-dom";
import VortexButton from "../Components/VortexButton";

export default function Navbar({handleSignIn}) {

  return (
    <nav className="bg-[#080808] flex justify-between items-center px-7 py-4 shadow-md shadow-black fixed w-full z-20">
    <div className='flex items-center gap-x-16'>   
    <div className="text-white flex items-center hover:text-purple-500 ease-in-out duration-150 cursor-pointer">
      <SiOrigin className="text-[2rem] sm:text-[2.5rem] rotate-45" />
      <h3 className="text-[1.2rem] sm:text-[1.3rem] lg:text-[1.5rem] font-bold">rigin</h3>
    </div>

    <ul className="text-white hidden gap-x-5 text-xs min-[790px]:flex lg:text-sm 2xl:text-base lg:gap-x-10">
      <li className="py-2  hover:text-purple-500 ease-in duration-200">
        <Link>Community</Link>
      </li>
      <li className="py-2  hover:text-purple-500 ease-in duration-200">
        <Link>Support</Link>
      </li>
      <li className="py-2  hover:text-purple-500 ease-in duration-200">
        <Link>About</Link>
      </li>
    </ul>
    </div> 
    <div className='flex gap-x-5 items-center'>
     <VortexButton label="Sign In" click={handleSignIn}/>
     <button className='bg-gray-600 px-5 py-2 rounded-md text-white font-medium hover:bg-gray-500 text-xs lg:text-sm 2xl:text-base  hidden sm:block'>Download</button>
    </div>
  </nav>
  )
}
