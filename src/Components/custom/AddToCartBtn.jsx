import { IoCart } from "react-icons/io5";
import { SpinnerCircularFixed } from "spinners-react";
import { useState } from "react";

export default function AddToCartBtn({
  btnClick,
  isInCart,
  Navigation,
  width,
  height,
}) {
  const [loading, setLoading] = useState(false);

  const handleClick = async (e) => {
    e.stopPropagation();
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
      setTimeout(() => setLoading(false), 2000);
    }
  };

  return (
    <>
      <button
        className={`bg-purple-600 ${width} justify-center ${height} text-xs font-medium md:text-sm rounded-sm self-end transition-all duration-300 hover:bg-purple-800 flex items-center gap-x-3 cursor-pointer`}
        onClick={handleClick}
      >
        {loading ? (
          <SpinnerCircularFixed
            size={25}
            thickness={160}
            speed={200}
            color="rgba(255, 255, 255, 1)"
            secondaryColor="rgba(0, 0, 0, 0.44)"
          />
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
