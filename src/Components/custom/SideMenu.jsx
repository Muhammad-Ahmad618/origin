import {
  IoStorefront,
  IoLibrarySharp,
  IoWallet,
  IoLogOut,
  IoTrophy,
} from "react-icons/io5";
import { IoMdAddCircle, IoMdSettings } from "react-icons/io";
import { RiCoupon2Fill } from "react-icons/ri";
import { BsBellFill } from "react-icons/bs";
import { TiNews } from "react-icons/ti";
import { FaUserCircle, FaExclamationCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppDialogBox } from "../ui/AppDialogBox";
import { useNavigate } from "react-router-dom";

const SideMenuContent = [
  { icon: <IoStorefront />, label: "Store", path: "/Store" },
  { icon: <TiNews />, label: "News", path: "News" },
  { icon: <IoMdAddCircle />, label: "WishList", path: "WishList" },
  { icon: <IoLibrarySharp />, label: "My Library", path: "/" },
  { icon: <IoWallet />, label: "Wallet", path: "wallet" },
  { icon: <RiCoupon2Fill />, label: "Coupon", path: "coupons" },
  { icon: <IoMdSettings />, label: "Settings", path: "/" },
  { icon: <IoLogOut />, label: "Sign Out" },
];

export default function SideMenu({ isOpen, setSideMenu }) {
  const [menuItems, setMenuItems] = useState(SideMenuContent);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const InjectMenuItem = () => {
      if (window.innerWidth <= 768) {
        setMenuItems([
          ...SideMenuContent,
          { icon: <BsBellFill />, label: "Notification" },
        ]);
      } else {
        setMenuItems(SideMenuContent);
      }
    };

    InjectMenuItem();

    window.addEventListener("resize", InjectMenuItem);

    return () => window.removeEventListener("resize", InjectMenuItem);
  }, []);

  return (
    <>
      <div
        className={`absolute left-0 top-[4.4rem] bg-black/80 backdrop-blur-md h-[calc(100vh-4.4rem)] max-w-[18rem] z-10 w-full transition-all duration-300 overflow-y-auto custom-scrollbar ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-6 pt-12">
          <div className="flex items-center gap-x-3">
            <FaUserCircle className="text-[3rem] text-white" />
            <div className="w-full">
              <h4 className="text-white text-sm font-medium">
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
          <div className="mt-6 h-[1px] bg-white/20"></div>
        </div>
        <ul className="text-white space-y-2 py-5 px-5">
          {menuItems.map((item, index) => {
            const innerContent = (
              <>
                {item.icon}
                <p className="text-base font-medium">{item.label}</p>
              </>
            );

            const handleClick = () => {
              if (item.label === "Sign Out") {
                setSideMenu(false);
                setOpen(true);
              }
            };

            const commonClasses =
              "flex items-center gap-x-4 px-6 text-[1.3rem] rounded-lg py-3 cursor-pointer hover:bg-white/20";

            if (item.path) {
              return (
                <NavLink
                  key={index}
                  to={item.path}
                  end
                  onClick={handleClick}
                  className={({ isActive }) =>
                    `${commonClasses} ${isActive ? "bg-white/20" : ""}`
                  }
                >
                  {innerContent}
                </NavLink>
              );
            }

            return (
              <li key={index} onClick={handleClick} className={commonClasses}>
                {innerContent}
              </li>
            );
          })}
        </ul>
      </div>

      <AppDialogBox
        setOpen={setOpen}
        title="Sign Out"
        handleClick={(e) => {
          e.stopPropagation();
          navigate("/signIn");
        }}
        open={open}
      >
        <div className="flex items-center gap-x-5">
          <div>
            <FaExclamationCircle className="text-[3rem] text-white" />
          </div>
          <div>
            <h4 className="text-lg font-semibold">Signing Out</h4>
            <p className="text-sm">Are you sure you want to sign out?</p>
          </div>
        </div>
      </AppDialogBox>
    </>
  );
}
