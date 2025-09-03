import React from "react";
import { IoStorefront } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { IoLibrarySharp } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { TiNews } from "react-icons/ti";
import { BiSolidCategory } from "react-icons/bi";
import { IoTrophy } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

export default function SideMenu({SideMenu}) {

  const SideMenuContent = [
    { icon: <IoStorefront />, label: "Store"},
    { icon: <TiNews/>, label: "News" },
    { icon: <BiSolidCategory/>, label: "Category" },
    { icon: <FaCartShopping />, label: "Cart"},
    { icon: <IoMdAddCircle />, label: "WishList" },
    { icon: <IoLibrarySharp />, label: "My Library" },
    { icon: <IoWallet />, label: "Wallet" },
    
  ];

  return (
    <div className={`absolute left-0 top-[4rem] bg-black h-[91vh] max-w-[18rem] z-10 w-full transition-all duration-300 ${SideMenu ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="px-6 pt-12"> 
        <div className="flex items-center gap-x-3">
        <FaUserCircle className="text-[3rem] text-gray-300"/>
        <div className="w-full">
        <h4 className="text-gray-300 text-sm font-medium">SensitiveMetal99x0</h4>
        <div className="text-gray-300 flex justify-between">
          <p className="text-xs">Level 01</p>
          <span className="flex items-center gap-x-1 text-sm"> <p>0</p> <IoTrophy className="text-gray-300"/></span>
        </div>
        </div>
        </div>
        <hr className="mt-6"/>
      </div>
      <ul className="text-white space-y-2 py-5">
        {SideMenuContent.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-x-4 px-6 text-[1.3rem] rounded-lg py-4 cursor-pointer hover:bg-[#727272]"
          >
            {item.icon}
            <p className="text-base font-medium">{item.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
