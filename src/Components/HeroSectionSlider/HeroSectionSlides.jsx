import { IoAddCircleOutline } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import useWishlistStore from "../../Store/WishlistStore";

function HeroSectionSlides({game}) {

  const inWishList = useWishlistStore((state) =>
    state.isInWishList(game.id)
  );
  const addToWishList = useWishlistStore((state) => state.addToWishList);
  const removeFromWishList = useWishlistStore(
    (state) => state.removeFromWishList
  );

  const handleWishList = () => {
    if (inWishList) {
      removeFromWishList(game);
    } else {
      addToWishList(game);
    }
  };

  return (
    <div
      className="aspect-[4/5] sm:aspect-[9/5] md:aspect-[11/5] bg-cover bg-center bg-no-repeat rounded-xl relative flex items-end"
      style={{ backgroundImage: `url(${game.background_image})` }}
    >
      <div
        className="w-full h-full flex items-end bottom-0 rounded-rt-full rounded-b-xl left-0 p-10"
        style={{
          background: `radial-gradient(ellipse 120% 100% at bottom left, 
                        rgba(0, 0, 0, 1) 20%, 
                        rgba(0, 0, 0, 0.9) 60%, 
                        rgba(0, 0, 0, 0.8) 70%, 
                        rgba(0, 0, 0, 0.7) 80%, 
                        transparent 100%)`,
        }}
      >
        <div className="text-white max-w-[30rem] space-y-5 sm:space-y-2 md:space-y-5 w-full">
          <h1 className="font-bold text-[1.6rem] md:text-[2rem]">
            {game.name}
          </h1>
          <p className="text-sm md:text-base">{game.tagline}</p>
          <p className="text-base md:text-xl font-medium text-purple-400">
            {game.Price}
          </p>
          <div className="hidden sm:flex gap-x-5 my-4">
            <button className="bg-gradient-to-r from-purple-800 via-purple-500 to-blue-600 max-w-[11rem] px-3 w-full py-3 rounded-md font-medium cursor-pointer hover:opacity-90">
              Buy Now
            </button>
            <button
              className="flex items-center justify-center gap-x-2 min-w-[13rem] px-3 py-3 rounded-md font-medium bg-white/10 backdrop-blur-md cursor-pointer hover:bg-white/20"
              onClick={handleWishList}
            >
              {inWishList ? (
                <IoIosCheckmarkCircleOutline className="text-[1.3rem]" />
              ) : (
                <IoAddCircleOutline className="text-[1.3rem]" />
              )}
              {inWishList ? "Remove From WishList" : "Add to WishList"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSectionSlides;
