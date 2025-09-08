import React, {useState, useEffect, useRef} from "react";
import { LuMenu } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { SiOrigin } from "react-icons/si"
import { RiCoupon2Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import SideMenu from "./SideMenu";

export default function StoreNavBar() {
  const [userMenu, setUserMenu] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  const [notificationTab, setNotificationTab] = useState(false);

  const notificationRef = useRef(null);
  const notificationButtonRef = useRef(null);
  const userMenuRef = useRef(null);
  const userIconRef = useRef(null)

  const toggleSideMenu = () => {
    setSideMenu(!sideMenu);
  };

  const toggleUserMenu = () => {
    setUserMenu(!userMenu);
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

      // Close user menu when clicking outside
      if (
        userMenuRef.current && 
        !userMenuRef.current.contains(event.target)&&
        !userIconRef.current.contains(event.target)
      ) {
        setUserMenu(false);
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const PopUpContent = [
    {icon: <FaUser/>, label: "SensitiveMetal99x0"},
    {icon: <RiCoupon2Fill/>, label: "Coupon"},
    {icon: <IoMdSettings/>, label: "Settings"},
    {icon: <IoLogOut/>, label: "Sign Out"},
  ];

  return (
    <div className="bg-black shadow-sm shadow-black p-4 flex items-center justify-between fixed w-full z-20">
      <LuMenu 
        className="text-white text-[1.7rem] hover:text-purple-600 cursor-pointer" 
        onClick={toggleSideMenu} 
      />

      <div className="px-10 flex items-center justify-between w-full">
        <div className="text-white flex items-center hover:text-purple-600 ease-in-out duration-150 cursor-pointer">
          <SiOrigin className="text-[2rem] sm:text-[2.5rem] rotate-45" />
          <h3 className="text-[1.2rem] sm:text-[1.3rem] font-medium">
            rigin
          </h3>
        </div>
        
        <div className="w-full flex bg-[#262626] max-w-[24rem] justify-between items-center py-2 px-2 rounded-sm">
          <IoIosSearch className="text-gray-400 text-[1.2rem] hover:text-gray-800 mr-3"/>
          <input 
            type="search" 
            name="Search" 
            className="max-w-[22rem] w-full bg-[#262626] text-gray-400 text-sm font-medium outline-none" 
            placeholder="Search Store"
          />
        </div>
         
        <div className="flex items-center gap-x-8 relative">
          <div ref={notificationButtonRef}>
            <BsBellFill 
              className="text-[1.4rem] text-white hover:text-purple-600 cursor-pointer" 
              onClick={toggleNotifications}
            /> 
          </div>
        
          <div 
            className={`w-[19rem] h-[30rem] bg-[#262626] absolute top-10 right-16 rounded-md duration-300 transition-all ease-in-out ${
              notificationTab ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            ref={notificationRef}
          >
            <div className="p-4 text-white w-full space-y-4">
              <h3 className="font-medium">Notifications</h3>
              <div className="w-[95%] h-[1px] bg-gray-300"></div>
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <div className="text-center space-y-5 text-gray-500 mb-14">
                <FaBell className="text-[3rem] w-full m-auto"/>
                <h3 className="font-semibold">No Notifications</h3>
              </div>
            </div>   
          </div>
          
          <div ref={userIconRef}>
          <FaUserCircle 
            className="text-[1.8rem] text-white hover:text-purple-600 cursor-pointer" 
            onClick={toggleUserMenu}
          />
          </div>

          <div 
            ref={userMenuRef}
            className={`bg-[#262626] absolute w-[17rem] z-10 top-10 right-0 py-2 rounded-lg shadow-sm shadow-black ${
              userMenu ? "block" : "hidden"
            }`}
          >
            <ul className="text-white">
              {PopUpContent.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-x-4 px-4 text-[1.3rem] rounded-lg py-4 cursor-pointer hover:bg-[#727272]"
                >
                  {item.icon}
                  <p className="text-base font-medium">{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <SideMenu SideMenu={sideMenu}/>
      </div>
    </div>
  );
}