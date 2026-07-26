import {
  IoMdAddCircleOutline,
  IoMdCheckmarkCircleOutline,
} from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { useState } from "react";
import { CustomToast } from "../custom/CustomToast";

const GamesData = [
  {
    id: "elden-ring",
    url: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg?t=1721682743",
    title: "Elden Ring",
    originalPrice: 79.99,
    salePrice: 49.99,
    rating: 4.9,
    genre: "Action RPG",
    badge: "Bestseller",
    badgeColor: "from-amber-500 to-orange-500",
  },
  {
    id: "cs2",
    url: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1719426374",
    title: "Counter Strike 2",
    originalPrice: 0,
    salePrice: 0,
    rating: 4.7,
    genre: "Tactical Shooter",
    badge: "Free to Play",
    badgeColor: "from-emerald-500 to-teal-500",
  },
  {
    id: "first-descendent",
    url: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2074920/header.jpg?t=1722399088",
    title: "First Descendent",
    originalPrice: 49.99,
    salePrice: 29.99,
    rating: 4.2,
    genre: "Co-op Shooter",
    badge: "Hot",
    badgeColor: "from-red-500 to-rose-500",
  },
  {
    id: "diablo-4",
    url: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2344520/header.jpg?t=1721311623",
    title: "Diablo IV",
    originalPrice: 69.99,
    salePrice: 39.99,
    rating: 4.5,
    genre: "Action RPG",
    badge: "Sale",
    badgeColor: "from-purple-500 to-violet-600",
  },
  {
    id: "ys-x",
    url: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2731870/header.jpg?t=1729875676",
    title: "Ys X: Nordics",
    originalPrice: 59.99,
    salePrice: 44.99,
    rating: 4.6,
    genre: "Action JRPG",
    badge: "New",
    badgeColor: "from-blue-500 to-cyan-500",
  },
  {
    id: "rust",
    url: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg?t=1715591843",
    title: "RUST",
    originalPrice: 39.99,
    salePrice: 19.99,
    rating: 4.3,
    genre: "Survival",
    badge: "Popular",
    badgeColor: "from-fuchsia-500 to-pink-500",
  },
];

function GameCard({ game }) {
  const [inCart, setInCart] = useState(false);

  const handleCart = (e) => {
    e.stopPropagation();
    setInCart(true);
    CustomToast({
      title: "Added to cart",
      description: `${game.title} added to cart successfully`,
    });
  };

  const discount =
    game.originalPrice > 0
      ? Math.round(
          ((game.originalPrice - game.salePrice) / game.originalPrice) * 100,
        )
      : 0;

  return (
    <div
      className="group relative flex flex-col w-full cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[10/4]">
        <img
          src={game.url}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge */}
        <div className="absolute top-2.5 left-2.5">
          <span
            className={`bg-gradient-to-r ${game.badgeColor} text-white text-[0.6rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg`}
          >
            {game.badge}
          </span>
        </div>

        {/* Discount badge */}
        {discount > 0 && (
          <div className="absolute top-2.5 right-2.5">
            <span className="bg-black/70 backdrop-blur-sm text-green-400 text-[0.65rem] font-bold px-2 py-1 rounded-lg border border-green-500/30">
              -{discount}%
            </span>
          </div>
        )}

        {/* Quick add button on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleCart}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-white/25 transition-colors shadow-xl"
          >
            {inCart ? (
              <IoMdCheckmarkCircleOutline className="text-green-400 text-base" />
            ) : (
              <IoMdAddCircleOutline className="text-base" />
            )}
            {inCart ? "Added!" : "Quick Add"}
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        {/* Genre + Rating */}
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-[0.65rem] font-semibold uppercase tracking-widest">
            {game.genre}
          </span>
          <div className="flex items-center gap-1">
            <FaStar className="text-amber-400 text-[0.65rem]" />
            <span className="text-gray-300 text-[0.7rem] font-semibold">
              {game.rating}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-white font-bold text-[1rem] leading-snug line-clamp-1">
          {game.title}
        </h3>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-white/5">
          <div className="flex items-baseline gap-2">
            {game.originalPrice > 0 ? (
              <>
                <span className="text-gray-500 text-xs line-through">
                  ${game.originalPrice.toFixed(2)}
                </span>
                <span className="text-white font-black text-base">
                  ${game.salePrice.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-emerald-400 font-black text-base">
                Free
              </span>
            )}
          </div>

          <button
            onClick={handleCart}
            className="flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all duration-200 shadow-lg shadow-purple-500/20"
          >
            {inCart ? (
              <IoMdCheckmarkCircleOutline className="text-sm" />
            ) : (
              <IoMdAddCircleOutline className="text-sm" />
            )}
            {inCart ? "Added" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PopularGames() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-6">
      {GamesData.map((game, index) => (
        <GameCard key={index} game={game} />
      ))}
    </div>
  );
}
