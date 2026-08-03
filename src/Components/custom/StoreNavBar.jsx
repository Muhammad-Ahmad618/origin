import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useCartStore from "../../context/CartStore";
import { LuMenu } from "react-icons/lu";
import { IoCart } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { SiOrigin } from "react-icons/si";
import { GoBellFill } from "react-icons/go";
import { FaRegBell } from "react-icons/fa6";
import SideMenu from "./SideMenu";

export default function StoreNavBar() {
  const [sideMenu, setSideMenu] = useState(false);
  const [notificationTab, setNotificationTab] = useState(false);
  const cartCount = useCartStore((state) => state.cart.length);
  const notificationRef = useRef(null);
  const notificationButtonRef = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleCart = useCallback(() => navigate("cart"), [navigate]);

  const toggleSideMenu = useCallback(() => setSideMenu((prev) => !prev), []);

  const toggleNotifications = useCallback(
    () => setNotificationTab((prev) => !prev),
    [],
  );

  useEffect(() => {
    setSideMenu(false);
  }, [pathname]);

  useEffect(() => {
    if (!notificationTab) return;

    const handleOutsideClick = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target) &&
        !notificationButtonRef.current.contains(event.target)
      ) {
        setNotificationTab(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [notificationTab]);

  return (
    <div className="bg-black shadow-sm shadow-black p-4 flex items-center justify-between top-0 fixed w-full z-20">
      <LuMenu
        className="text-white text-[1.7rem] hover:text-purple-600 cursor-pointer"
        onClick={toggleSideMenu}
      />

      <div className="px-5 sm:px-10 flex items-center justify-between w-full">
        <div className="text-white flex items-center hover:text-purple-600 ease-in-out duration-150 cursor-pointer">
          <SiOrigin className="text-[2rem] sm:text-[2.5rem] rotate-45" />
          <h3 className="text-[1.2rem] sm:text-[1.3rem] font-medium">rigin</h3>
        </div>

        <div className="w-full flex bg-none md:bg-[#262626] md:max-w-[24rem] justify-end md:justify-between items-center py-2 px-2 rounded-full">
          <IoIosSearch className="text-white text-[2rem] md:text-[1.2rem] hover:text-gray-800 mr-3" />
          <input
            type="search"
            name="Search"
            className="max-w-[22rem] w-full bg-[#262626] hidden md:block text-gray-100 text-sm outline-none"
            placeholder="Search Store"
          />
        </div>

        <div className="flex items-center gap-x-8 relative">
          <div ref={notificationButtonRef} className="hidden md:block">
            <GoBellFill
              className="text-[1.6rem] text-white hover:text-purple-600 cursor-pointer"
              onClick={toggleNotifications}
            />
          </div>

          <div
            className={`absolute top-10 right-16 hidden h-[30rem] w-[19rem] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] shadow-2xl shadow-purple-950/50 backdrop-blur-2xl duration-300 ease-in-out transition-all md:block ${
              notificationTab
                ? "translate-y-0 opacity-100 pointer-events-auto"
                : "-translate-y-2 opacity-0 pointer-events-none"
            }`}
            ref={notificationRef}
          >
            {/* ambient glow inside the panel */}
            <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-purple-600/15 blur-[80px]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/40 to-transparent" />

            <div className="relative w-full space-y-4 p-4 text-white">
              <h3 className="font-medium">Notifications</h3>
              <div className="h-px w-full bg-white/10" />
            </div>
            <div className="relative flex h-full w-full items-center justify-center">
              <div className="mb-14 text-center">
                <div className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-purple-300/20 bg-purple-950/40">
                  <FaRegBell className="text-2xl text-purple-300" />
                </div>
                <h3 className="font-semibold text-white">No notifications</h3>
                <p className="mt-1 text-sm text-purple-100/50">
                  You're all caught up.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <span className="w-4 h-4 bg-purple-500 text-white flex items-center justify-center font-bold text-[0.65rem] rounded-full absolute -right-1 -top-1.5">
              {cartCount === 0 ? "0" : cartCount}
            </span>
            <IoCart
              className="text-white text-[1.8rem] cursor-pointer hover:text-purple-400"
              onClick={() => {
                handleCart();
              }}
            />
          </div>
        </div>
        <SideMenu isOpen={sideMenu} setSideMenu={setSideMenu} />
      </div>
    </div>
  );
}
