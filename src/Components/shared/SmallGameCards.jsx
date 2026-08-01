import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import useWishlistStore from "../../context/WishlistStore";
import { FaCheck } from "react-icons/fa6";
import { CustomToast } from "../custom/CustomToast";
import { useNavigate } from "react-router-dom";

function SmallGameCards({ game }) {
  const [toolTip, setToolTip] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const addToWishList = useWishlistStore((state) => state.addToWishList);
  const isInWishList = useWishlistStore((state) => state.isInWishList(game.id));
  const removeFromWishList = useWishlistStore(
    (state) => state.removeFromWishList,
  );
  const navigate = useNavigate();

  const handleWishList = (e) => {
    e.stopPropagation();
    if (isInWishList) {
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

  const handleNavigation = () => {
    navigate(`${game.id}`);
  };

  return (
    <div
      className="group relative cursor-pointer rounded-xl"
      onClick={handleNavigation}
    >
      {/* Glow ring on hover */}
      <div className="pointer-events-none absolute -inset-0.5 rounded-xl bg-gradient-to-b from-purple-500/40 to-fuchsia-500/0 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg border border-white/10">
          {/* Skeleton shimmer while loading */}
          {!loaded && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-purple-950/60 via-purple-900/30 to-purple-950/60" />
          )}

          <img
            src={game.background_image}
            alt={game.name}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            className={`h-full w-full object-cover transition-all duration-300 ease-out group-hover:scale-105 group-hover:opacity-60 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Bottom gradient scrim for legibility */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Wishlist button */}
          <button
            type="button"
            className={`absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-200 ${
              isInWishList
                ? "border-purple-300/40 bg-purple-500/80 shadow-md shadow-purple-900/50"
                : "border-white/20 bg-black/40 opacity-0 group-hover:opacity-100 hover:bg-purple-600/70"
            }`}
            onMouseEnter={() => setToolTip(true)}
            onMouseLeave={() => setToolTip(false)}
            onClick={handleWishList}
          >
            {isInWishList ? (
              <FaCheck className="text-xs text-white" />
            ) : (
              <FaPlus className="text-xs text-white" />
            )}
          </button>

          {toolTip && (
            <div className="absolute top-2 right-11 whitespace-nowrap rounded-md border border-white/10 bg-black/80 px-3 py-1.5 text-[0.7rem] font-medium text-white backdrop-blur-md">
              {isInWishList ? "Remove from wishlist" : "Add to wishlist"}
            </div>
          )}

          {/* Price badge, appears on hover */}
          <span className="absolute bottom-2 left-2 rounded-md border border-white/10 bg-black/50 px-2 py-1 text-xs font-semibold text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
            ${game.price}
          </span>
        </div>

        <div className="flex flex-col justify-between py-3 text-left text-white">
          <div>
            <p className="text-xs font-medium tracking-wide text-fuchsia-400">
              Base Game
            </p>
            <h3 className="mt-0.5 line-clamp-2 min-h-[2.75rem] text-[1.05rem] font-medium leading-snug transition-colors duration-200 group-hover:text-purple-200">
              {game.name}
            </h3>
          </div>
          <h2 className="mt-1 font-medium text-white/90">${game.price}</h2>
        </div>
      </div>
    </div>
  );
}

export default SmallGameCards;
