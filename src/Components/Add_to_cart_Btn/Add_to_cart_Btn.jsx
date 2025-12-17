import { IoCart } from "react-icons/io5";
import { ClipLoader } from "react-spinners";
import { useState } from "react";

export default function Add_to_cart_Btn({ btnClick, isInCart, Navigation }) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (isInCart) {
      Navigation();
      return;
    }

    try {
      setLoading(true);
      await Promise.resolve(btnClick());
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    } finally {
      setTimeout(() => setLoading(false),2000)
    }
  };

  return (
    <>
      <button
        className="bg-purple-600 min-w-[9rem] justify-center h-[2.3rem] text-xs font-medium md:text-sm rounded-sm self-end transition-all duration-300 hover:bg-purple-800 flex items-center gap-x-3"
        onClick={handleClick}
      >
        {loading ? (
          <ClipLoader color="#fff" loading={true} size={20} />
        ) : (
          <>
            <IoCart className="text-[1rem] md:text-[1.2rem]" />
            {isInCart ? "View Cart" : "Add To Cart"}
          </>
        )}
      </button>
    </>
  );
}
