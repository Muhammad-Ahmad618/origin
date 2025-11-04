import { useState } from "react";
import { FaPlus } from "react-icons/fa"
import useWishlistStore from "../../Store/WishlistStore";
import { FaCheck } from "react-icons/fa6"

function SmallGameCards({game}) {

  const [toolTip, setToolTip] = useState(false);
  const addToWishList = useWishlistStore(state => state.addToWishList)
  const isInWishList = useWishlistStore(state => state.isInWishList(game.id))
  const removeFromWishList = useWishlistStore(state => state.removeFromWishList)

  const handleWishList = () => {
    
    if(isInWishList){
      removeFromWishList(game)
    }
    else{
    addToWishList(game)
    }
  }

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
          onClick={handleWishList}
        >
         { isInWishList ? <FaCheck className="text-white text-sm"/> : <FaPlus className="text-white text-xs" />  }
        </span>
        {toolTip && (
          <div className="absolute top-1 right-10 rounded-md py-2 px-5 font-medium text-xs bg-gray-900 text-white">
            {isInWishList ? "Remove From WishList" : "Add To WishList"}
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between text-white py-3 text-left aspect-[6/3] md:aspect-[6/3]">
        <div>
          <p className="text-[#ff32bb] font-medium text-xs">Base Game</p>
          <h3 className="text-[1.05rem] font-medium">{game.name}</h3>
        </div>
        <h2 className="font-medium text-white">${game.price}</h2>
      </div>
    </div>
  );
}

export default SmallGameCards;
