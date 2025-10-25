import { IoCart } from "react-icons/io5";

export default function Add_to_cart_Btn({ btnClick, isInCart, Navigation }) {
  return (
    <>
      <button
        className="bg-purple-600 min-w-[9rem] justify-center py-1.5 text-xs font-medium md:text-sm rounded-sm self-end transition-all duration-300 hover:bg-purple-800 flex items-center gap-x-3"
        onClick={isInCart ? Navigation : btnClick}
      >
        <IoCart className="text-[1rem] md:text-[1.2rem]" />
        {isInCart ? "View Cart" : "Add To Cart"}
      </button>
    </>
  );
}
