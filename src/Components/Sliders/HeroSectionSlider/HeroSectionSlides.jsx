import { IoAddCircleOutline } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import useWishlistStore from "../../../Store/WishlistStore";
import { CustomToast } from "../../custom/CustomToast";

function HeroSectionSlides({ game }) {
  const inWishList = useWishlistStore((state) => state.isInWishList(game.id));
  const addToWishList = useWishlistStore((state) => state.addToWishList);
  const removeFromWishList = useWishlistStore(
    (state) => state.removeFromWishList,
  );

  const handleWishList = () => {
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

  return (
    <div
      className="aspect-[4/5] sm:aspect-[9/5] md:aspect-[11/5] bg-cover bg-center bg-no-repeat rounded-2xl relative flex items-end overflow-hidden"
      style={{ backgroundImage: `url(${game.background_image})` }}
    >
      {/* Layered gradient overlays for depth */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(ellipse 130% 100% at bottom left,
                        rgba(0, 0, 0, 1) 10%,
                        rgba(0, 0, 0, 0.85) 45%,
                        rgba(0, 0, 0, 0.5) 65%,
                        transparent 100%)`,
        }}
      />
      {/* Top vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent rounded-2xl" />

      {/* "Now Showing" label — top left */}
      <div className="absolute top-5 left-5 sm:top-7 sm:left-8">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-purple-300 text-[0.65rem] font-bold uppercase tracking-widest">Featured</span>
        </div>
      </div>

      {/* Rating badge — top right */}
      <div className="absolute top-5 right-5 sm:top-7 sm:right-8 hidden sm:flex items-center gap-1.5 bg-black/40 backdrop-blur-sm border border-white/10 px-2.5 py-1.5 rounded-xl">
        <FaStar className="text-amber-400 text-xs" />
        <span className="text-white text-xs font-bold">
          {game.price > 50 ? "9.0" : game.price > 30 ? "8.5" : "7.8"}
        </span>
      </div>

      {/* Content */}
      <div className="relative w-full p-6 sm:p-8 md:p-10">
        <div className="text-white max-w-[34rem] space-y-3 sm:space-y-4 w-full">
          {/* Genre tag */}
          <span className="inline-block text-[0.6rem] font-bold uppercase tracking-widest text-purple-300 bg-purple-500/15 border border-purple-500/20 px-2.5 py-1 rounded-full">
            Action / Adventure
          </span>

          <h1 className="font-black text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] leading-tight">
            {game.name}
          </h1>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-2">
            {game.tagline}
          </p>

          {/* Price */}
          {game.price > 0 && (
            <div className="flex items-baseline gap-3">
              <span className="text-gray-500 text-sm line-through">${(game.price * 1.3).toFixed(2)}</span>
              <span className="text-2xl font-black text-white">${game.price}</span>
              <span className="bg-green-500/15 border border-green-500/30 text-green-400 text-[0.65rem] font-bold px-2 py-0.5 rounded-md">
                SAVE 23%
              </span>
            </div>
          )}

          <div className="hidden sm:flex gap-3 pt-2">
            <button className="bg-gradient-to-r from-purple-700 via-purple-500 to-blue-600 px-6 py-2.5 rounded-xl font-bold cursor-pointer hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/30 text-sm flex items-center gap-2">
              <FaShoppingCart className="text-sm" />
              Buy Now
            </button>
            <button
              className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-medium bg-white/8 backdrop-blur-md border border-white/15 cursor-pointer hover:bg-white/15 transition-colors text-sm"
              onClick={handleWishList}
            >
              {inWishList ? (
                <IoIosCheckmarkCircleOutline className="text-[1.1rem] text-green-400" />
              ) : (
                <IoAddCircleOutline className="text-[1.1rem]" />
              )}
              {inWishList ? "Wishlisted" : "Add to Wishlist"}
            </button>
          </div>

          {/* Mobile buttons */}
          <div className="flex sm:hidden gap-2 pt-1">
            <button className="flex-1 bg-gradient-to-r from-purple-700 to-blue-600 px-4 py-2 rounded-xl font-bold text-sm">
              Buy Now
            </button>
            <button
              className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl font-medium bg-white/10 border border-white/15 text-sm"
              onClick={handleWishList}
            >
              {inWishList ? (
                <IoIosCheckmarkCircleOutline className="text-green-400" />
              ) : (
                <IoAddCircleOutline />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSectionSlides;
