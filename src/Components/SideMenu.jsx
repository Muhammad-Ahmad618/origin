import { IoStorefront } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import { IoLibrarySharp } from "react-icons/io5";
import { RiCoupon2Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { BsBellFill } from "react-icons/bs";
import { TiNews } from "react-icons/ti";
import { IoTrophy } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


  const SideMenuContent = [
    { icon: <IoStorefront />, label: "Store" , path : "/Store"
     },
    { icon: <TiNews />, label: "News", path : "/" },
    { icon: <IoMdAddCircle />, label: "WishList", path : "WishList" },
    { icon: <IoLibrarySharp />, label: "My Library", path : "/" },
    { icon: <IoWallet />, label: "Wallet", path : "/" },
    { icon: <RiCoupon2Fill />, label: "Coupon",  path : "/" },
    { icon: <IoMdSettings />, label: "Settings",  path : "/" },
    { icon: <IoLogOut />, label: "Sign Out",  path : "/" },
  ];

export default function SideMenu({ isOpen }) {

  const [menuItems, setMenuItems] = useState(SideMenuContent)

    useEffect(() =>{

  const InjectMenuItem = () => {
     
    if(window.innerWidth <= 768 ){
       
      setMenuItems([...SideMenuContent,{icon:<BsBellFill/>, label:"Notification" }])
    }
    else{
      setMenuItems(SideMenuContent)
    }
  }

  InjectMenuItem()

  window.addEventListener('resize', InjectMenuItem)

  return () => window.removeEventListener('resize', InjectMenuItem)

  },[])

  return (
    <div
      className={`absolute left-0 top-[4rem] bg-black min-h-[100vh] max-w-[18rem] z-10 w-full transition-all duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="px-6 pt-12">
        <div className="flex items-center gap-x-3">
          <FaUserCircle className="text-[3rem] text-gray-300" />
          <div className="w-full">
            <h4 className="text-gray-300 text-sm font-medium">
              SensitiveMetal99x0
            </h4>
            <div className="text-gray-300 flex justify-between">
              <p className="text-xs">Level 01</p>
              <span className="flex items-center gap-x-1 text-sm">
                {" "}
                <p>0</p> <IoTrophy className="text-gray-300" />
              </span>
            </div>
          </div>
        </div>
        <hr className="mt-6" />
      </div>
      <ul className="text-white space-y-2 py-5">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            end
            className= {({isActive}) => `flex items-center gap-x-4 px-6 text-[1.3rem] rounded-lg py-3 cursor-pointer hover:bg-[#727272] ${isActive ? 'text-purple-500' : 'text-white'}`}
          >
            {item.icon}
            <p className="text-base font-medium">{item.label}</p>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
