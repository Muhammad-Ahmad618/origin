import {useState, useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { BsCart3 } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { SiOrigin } from "react-icons/si"
import { FaBell } from "react-icons/fa6";
import SideMenu from "./SideMenu";

export default function StoreNavBar() {
  const [sideMenu, setSideMenu] = useState(false);
  const [notificationTab, setNotificationTab] = useState(false);

  const notificationRef = useRef(null);
  const notificationButtonRef = useRef(null);
  const navigate = useNavigate()

  const handleCart = () => {
    navigate('Cart')
  }

  const toggleSideMenu = () => {
    setSideMenu(!sideMenu);
  };

  const toggleNotifications = () => {
    setNotificationTab(!notificationTab);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Check if click is outside both the notification panel and button
      if (
        notificationRef.current && 
        !notificationRef.current.contains(event.target) &&
        !notificationButtonRef.current.contains(event.target)
      ) {
        setNotificationTab(false);
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="bg-black shadow-sm shadow-black p-4 flex items-center justify-between top-0 fixed w-full z-20">
      <LuMenu 
        className="text-white text-[1.7rem] hover:text-purple-600 cursor-pointer" 
        onClick={toggleSideMenu} 
      />

      <div className="px-5 sm:px-10 flex items-center justify-between w-full">
        <div className="text-white flex items-center hover:text-purple-600 ease-in-out duration-150 cursor-pointer">
          <SiOrigin className="text-[2rem] sm:text-[2.5rem] rotate-45" />
          <h3 className="text-[1.2rem] sm:text-[1.3rem] font-medium">
            rigin
          </h3>
        </div>
        
        <div className="w-full flex bg-none md:bg-[#262626] md:max-w-[24rem] justify-end md:justify-between items-center py-2 px-2 rounded-sm">
          <IoIosSearch className="text-white md:text-gray-400 text-[1.8rem] md:text-[1.2rem] hover:text-gray-800 mr-3"/>
          <input 
            type="search" 
            name="Search" 
            className="max-w-[22rem] w-full bg-[#262626] hidden md:block text-gray-100 text-sm outline-none" 
            placeholder="Search Store"
          />
        </div>
         
        <div className="flex items-center gap-x-8 relative">
          <div ref={notificationButtonRef} className="hidden md:block">
            <FaRegBell
              className="text-[1.5rem] text-white hover:text-purple-600 cursor-pointer" 
              onClick={toggleNotifications}
            /> 
          </div>
        
          <div 
            className={`w-[19rem] h-[30rem] hidden md:block bg-black/60 backdrop-blur-md absolute top-10 right-16 rounded-3xl duration-300 transition-all ease-in-out ${
              notificationTab ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            ref={notificationRef}
          >
            <div className="p-4 text-white w-full space-y-4">
              <h3 className="font-medium ">Notifications</h3>
              <div className="w-[95%] h-[1px] bg-gray-300"></div>
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <div className="text-center mb-14">
                <FaBell className="text-[3rem] w-full m-auto mb-5 text-white"/>
                <h3 className="font-semibold text-white">No Notifications</h3>
              </div>
            </div>   
          </div>
           
           <div className="relative">
            <span className="w-4 h-4 bg-purple-500 sm:hidden text-white flex items-center justify-center font-bold text-[0.65rem] rounded-full absolute -right-1 -top-1.5">
              1
            </span>
           <BsCart3 className="text-white text-[1.6rem] cursor-pointer hover:text-purple-400" onClick={() => {handleCart()}}/>
           </div>
        </div>
        <SideMenu SideMenu={sideMenu}/>
      </div>
    </div>
  );
}