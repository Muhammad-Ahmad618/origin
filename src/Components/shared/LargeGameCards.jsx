import { useEffect, useState } from "react";
import {
  FaPlus,
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
} from "react-icons/fa";
import CartBtn from "../custom/AddToCartBtn";
import useWishlistStore from "../../context/WishlistStore";
import useCartStore from "../../context/CartStore";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import { CustomToast } from "../custom/CustomToast";

export default function LargeGameCards({ game }) {
  const [toolTip, setToolTip] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const addToWishList = useWishlistStore((state) => state.addToWishList);
  const inWishList = useWishlistStore((state) => state.isInWishList(game.id));
  const removeFromWishList = useWishlistStore(
    (state) => state.removeFromWishList,
  );
  const isInCart = useCartStore((state) => state.isInCart(game.id));
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    setLoaded(false);
  }, [game?.background_image]);

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("cart");
  };

  const handleWishList = (e) => {
    e.stopPropagation();
    if (inWishList) {
      CustomToast({
        title: "Removed from wishlist",
        description: "Game removed from wishlist successfully",
      });
      removeFromWishList(game);
    } else {
      CustomToast({
        title: "Added to wishlist",
        description: "Game added to wishlist successfully",
      });
      addToWishList(game);
    }
  };

  const handleAddToCart = () => {
    addToCart(game);
    setTimeout(() => {
      CustomToast({
        title: "Added to cart",
        description: "Game added to cart successfully",
      });
    }, 2000);
  };

  const handleDetailPageNaviagtion = () => {
    navigate(`${game.id}`);
  };

  const renderPlatformIcons = (platformStr) => {
    if (!platformStr) return <FaWindows className="text-gray-400" />;

    const icons = [];
    const lower = platformStr.toLowerCase();

    if (lower.includes("pc") || lower.includes("windows")) {
      icons.push(
        <FaWindows
          key="pc"
          title="Windows"
          className="text-gray-400 text-xs sm:text-sm"
        />,
      );
    }
    if (lower.includes("playstation") || lower.includes("ps")) {
      icons.push(
        <FaPlaystation
          key="ps"
          title="PlayStation"
          className="text-gray-400 text-xs sm:text-sm"
        />,
      );
    }
    if (lower.includes("xbox")) {
      icons.push(
        <FaXbox
          key="xbox"
          title="Xbox"
          className="text-gray-400 text-xs sm:text-sm"
        />,
      );
    }
    if (
      lower.includes("mac") ||
      lower.includes("macos") ||
      lower.includes("apple")
    ) {
      icons.push(
        <FaApple
          key="mac"
          title="macOS"
          className="text-gray-400 text-xs sm:text-sm"
        />,
      );
    }

    if (icons.length === 0) {
      return (
        <span className="text-[10px] text-gray-400 border border-gray-800 px-1 py-0.5 rounded truncate max-w-[4rem]">
          {platformStr}
        </span>
      );
    }

    return <div className="flex items-center gap-1">{icons}</div>;
  };

  return (
    <div className="flex flex-col w-full text-white bg-white/[0.03] border border-white/10 hover:border-purple-500/50 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/10 transition-all duration-300 h-full group">
      {/* Game Image Container */}
      <div
        className="group/img cursor-pointer relative aspect-[8/5] overflow-hidden bg-white/5"
        onClick={handleDetailPageNaviagtion}
      >
        <span
          className="bg-black/60 backdrop-blur-md hover:bg-purple-600 p-2.5 shadow-md rounded-full absolute top-3 right-3 z-10 transition-all duration-200 cursor-pointer"
          onMouseEnter={() => setToolTip(true)}
          onMouseLeave={() => setToolTip(false)}
          onClick={handleWishList}
        >
          {inWishList ? (
            <FaCheck className="text-white text-xs sm:text-sm" />
          ) : (
            <FaPlus className="text-white text-xs sm:text-sm" />
          )}
        </span>
        {toolTip && (
          <div className="absolute top-3.5 right-12 rounded-md py-1.5 px-4 bg-black/90 backdrop-blur-sm text-xs font-semibold text-white z-10 shadow-lg border border-white/5 animate-fade-in">
            {inWishList ? "Remove From WishList" : "Add To WishList"}
          </div>
        )}
        <img
          src={game?.background_image}
          alt={game?.name}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Hover details badge */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            View Details
          </span>
        </div>
      </div>

      {/* Game Detail Container */}
      <div className="p-4 flex flex-col flex-grow bg-gradient-to-b from-white/[0.01] to-transparent justify-between">
        <div className="space-y-2 mb-4">
          <h3
            className="text-base sm:text-lg font-bold cursor-pointer hover:text-purple-400 transition-colors line-clamp-1"
            onClick={handleDetailPageNaviagtion}
            title={game.name}
          >
            {game.name}
          </h3>
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-bold text-[#ff32bb] truncate max-w-[70%] uppercase tracking-wider">
              {game?.publishers || game?.developers || "Origin Games"}
            </p>
            {renderPlatformIcons(game.platform)}
          </div>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-2 pt-1 h-[3rem] overflow-hidden">
            {game.description?.replace(/<[^>]*>?/gm, "") ||
              "No description available."}
          </p>
        </div>

        {/* Price & Action Row */}
        <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-auto">
          <span className="text-sm sm:text-base font-black text-white bg-purple-950/40 border border-purple-500/20 px-2.5 py-1 rounded-md">
            ${game.price || "0.00"}
          </span>
          <CartBtn
            btnClick={handleAddToCart}
            isInCart={isInCart}
            Navigation={handleNavigation}
            width="max-w-[7.5rem] sm:max-w-[8.5rem] w-full"
            height="h-[2.2rem] sm:h-[2.4rem]"
          />
        </div>
      </div>
    </div>
  );
}
