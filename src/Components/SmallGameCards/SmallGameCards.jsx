import { useState } from "react";
import { FaPlus } from "react-icons/fa"

function SmallGameCards({game}) {
  const [toolTip, setToolTip] = useState(false);
  return (
    <div className="rounded-xl group cursor-pointer">
      <div className="relative w-full aspect-[4/5]">
        <img
          src={game.background_image}
          alt={game.name}
          className="object-cover w-full h-full rounded-lg transition-all duration-150 group-hover:opacity-70"
        />
        <span
          className="bg-gradient-to-r from-purple-400 hidden group-hover:block to-purple-600 p-2 shadow-sm shadow-black rounded-full absolute top-2 right-2"
          onMouseEnter={() => {
            setToolTip(true);
          }}
          onMouseLeave={() => {
            setToolTip(false);
          }}
        >
          <FaPlus className="text-white text-xs" />
        </span>
        {toolTip && (
          <div className="absolute top-1 right-10 rounded-md py-2 px-5 font-medium text-xs bg-gray-900 text-white">
            Add to Wishlist
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between text-white py-3 text-left aspect-[6/3] md:aspect-[5/3]">
        <div>
          <p className="text-[#ff32bb] font-medium text-xs">Base Game</p>
          <h3 className="text-[1.05rem] font-medium">{game.name}</h3>
        </div>
        <h2 className="text-[1rem] font-semibold text-gray-300">Free</h2>
      </div>
    </div>
  );
}

export default SmallGameCards;
