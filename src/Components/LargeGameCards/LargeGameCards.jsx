import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import CartBtn from "../Add_to_cart_Btn";
import useWishlistStore from "../../Store/WishlistStore";
import useCartStore from "../../Store/CartStore";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";

export default function LargeGameCards({ game }) {
  const [toolTip, setToolTip] = useState(false);

  const addToWishList = useWishlistStore((state) => state.addToWishList);
  const inWishList = useWishlistStore((state) => state.isInWishList(game.id));
  const removeFromWishList = useWishlistStore(
    (state) => state.removeFromWishList
  );
  const isInCart = useCartStore((state) => state.isInCart(game.id));
  const addToCart = useCartStore((state) => state.addToCart);

  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate('Cart')
  }

  const handleWishList = () => {
    if (inWishList) {
      removeFromWishList(game);
    } else {
      addToWishList(game);
    }
  };

  const handleAddToCart = () => {
    addToCart(game);
  };

  return (
    <div className="flex flex-col gap-x-4 w-full text-white">
      {/* Game Image Container */}
      <div className="group aspect-[8/5] cursor-pointer relative">
        <span
          className="bg-gradient-to-r from-purple-400 hidden group-hover:block to-purple-600 p-2 shadow-sm shadow-black rounded-full absolute top-2 right-2 z-10"
          onMouseEnter={() => {
            setToolTip(true);
          }}
          onMouseLeave={() => {
            setToolTip(false);
          }}
          onClick={handleWishList}
        >
          {inWishList ? (
            <FaCheck className="text-white text-xs" />
          ) : (
            <FaPlus className="text-white text-xs" />
          )}
        </span>
        {toolTip && (
          <div className="absolute top-1 right-10 rounded-md py-2 px-5 bg-black text-xs font-medium text-white z-10">
            {inWishList ? "Remove From WishList" : "Add To WishList"}
          </div>
        )}
        <img
          src={game.background_image}
          alt={game.name}
          className="rounded-md w-full h-full object-cover group-hover:opacity-80 transition-all duration-300"
        />
      </div>

      {/* Game Detail Container */}

      <div className="py-4 w-full h-full">
        <h1
          className="text-[1.3rem] sm:text-[1.5rem] font-bold cursor-pointer"
          style={{ textShadow: "1px 1px 2px black" }}
        >
          {game.name}
        </h1>
        <p className="text-xs sm:text-sm font-medium text-[#ff32bb] line-clamp-1">
          {game.publishers} | {game.developers}
        </p>
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 my-4">
          {game.description}
        </p>
        <CartBtn btnClick={handleAddToCart} isInCart={isInCart} Navigation={handleNavigation}/>
      </div>
    </div>
  );
}
