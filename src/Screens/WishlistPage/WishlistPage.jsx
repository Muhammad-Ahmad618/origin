import CustomDropDown from "../../Components/CustomDropDown/CustomDropDown";
import useWishlistStore from "../../Store/WishlistStore";
import CustomButton from "../../Components/CustomButton/CustomButton";
import useCartStore from "../../Store/CartStore";
import { IoSearch } from "react-icons/io5";
import { BsTrash } from "react-icons/bs";
import { TbGhost2Filled } from "react-icons/tb";
import { BsCart3 } from "react-icons/bs";
import { MdWindow } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const dropDownMenuItems = [
  "Recently Added",
  "Popularity",
  "Price: High to Low",
  "Price: Low to High",
  "Released",
];

function WishlistPage() {
  const wishList = useWishlistStore((state) => state.wishList);
  const removeFromWishList = useWishlistStore(
    (state) => state.removeFromWishList
  );
  const addToCart = useCartStore(state => state.addToCart)

  const navigate = useNavigate();

  const handleBrowseGamesBtn = () => {
    navigate("/Store");
  };

  return (
    <div className="min-h-screen py-34 px-5 lg:mx-24">
      <div className="space-y-5 text-white">
        <div className="flex justify-between items-center gap-5 sm:items-end flex-wrap">
          <div>
            <h2 className="text-[2rem] sm:text-[2.5rem] font-black text-white">My WishList</h2>
          </div>
          <div>
            <div className="flex gap-x-6">
              <div className="flex gap-x-3 items-center">
                <h3 className="font-medium text-white">Total Items</h3>
                <span className="text-white px-5 py-0.5 text-sm  rounded-2xl font-medium bg-black border border-white">
                  {wishList.length}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between lg:justify-end items-center gap-x-5 flex-wrap gap-y-5">
          <div className="bg-gray-700  items-center max-w-[23rem] w-full px-2 rounded-lg flex">
            <IoSearch className="text-[1.2rem]"/>
            <input
              type="text"
              className="text-gray-200 w-full py-1.5 px-2 focus:outline-0"
              placeholder="Search"
            />
          </div>
          <div className="flex gap-x-2 items-center">
            <div>
              <h5 className="text-sm font-medium">Sort By :</h5>
            </div>
            <CustomDropDown MenuItems={dropDownMenuItems} />
          </div>
        </div>
        <hr className="text-purple-500" />
        {wishList.length === 0 ? (
          <div className="flex flex-col items-center gap-y-5 mt-20 justify-center">
            <TbGhost2Filled className="text-gray-200 text-[5rem]" />
            <h2 className="text-[2rem] font-black text-center">
              You haven't added anything to your wishlist yet
            </h2>
            <CustomButton
              label="Browse Games"
              btnClick={handleBrowseGamesBtn}
            />
          </div>
        ) : (
          <div className="space-y-5">
            {wishList.map((game) => (
              <div
                className="flex flex-wrap sm:flex-nowrap gap-y-5 p-5 bg-black/30 gap-x-7 backdrop-blur-md rounded-xl"
                key={game.id}
              >
                <div className="basis-[100%] sm:basis-[30%]">
                  <img
                    src={game.background_image}
                    alt="thumbnail"
                    className="h-full w-full aspect-[9/5] object-cover rounded-md"
                  />
                </div>

                <div className="basis-[100%] sm:basis-[70%] flex flex-col justify-between gap-y-3 flex-wrap">
                  <div className="flex justify-between items-center">
                    <div className="bg-white/5 inline-block px-2 py-1 rounded-md">
                      <h4 className="text-[#ff32bb] text-xs font-bold">
                        Base Game
                      </h4>
                    </div>
                    <h2 className="text-[1.2rem] sm:text-[1.4rem] font-bold">Free</h2>
                  </div>
                  <h1 className="text-[1.5rem] sm:text-[1.7rem] lg:text-[2rem] font-bold">{game.name}</h1>
                  <span className="flex items-end gap-x-2 font-medium text-sm">
                    Platform: <MdWindow className="text-[1.2rem]" />
                  </span>
                  <div className="flex gap-x-2 justify-end items-end mt-5">
                    <CustomButton
                      label="Remove"
                      styling="bg-white/10 hover:bg-white/30"
                      icon={<BsTrash />}
                      btnClick={() => removeFromWishList(game)}
                    />
                    <CustomButton label="Add to Cart" icon={<BsCart3 />} btnClick={() => addToCart(game)}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default WishlistPage;
