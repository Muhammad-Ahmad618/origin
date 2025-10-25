import useCartStore from "../../Store/CartStore";
import { MdWindow } from "react-icons/md";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { BsTrash } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";

function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const navigate = useNavigate();

  const handleShopButton = () => {
    navigate("/Store");
  };

  return (
    <div className="py-34 px-5 lg:mx-24">
      <div className="flex justify-between items-end mb-3 flex-wrap gap-x-5">
        <h1 className="text-white font-black text-[2.5rem]">My Cart</h1>
        <div className="flex gap-x-6">
          <div className="flex gap-x-3 items-center">
            <h3 className="font-medium text-white">Total Items</h3>
            <span className="text-white px-5 py-0.5 text-sm  rounded-2xl font-medium bg-black border border-white">
              {cart.length}
            </span>
          </div>
          <div className="text-white flex gap-x-3 items-center">
            <h3 className="font-medium">Account Balance</h3>
            <span className="border border-white text-sm px-3 py-0.5 rounded-2xl font-medium bg-black">
              $ 0.00
            </span>
          </div>
        </div>
      </div>
      <hr className="text-purple-400" />

      {cart.length === 0 ? (
        <div className="text-white mt-24 flex flex-col items-center gap-y-5">
          <FaCartPlus className="text-[4rem]" />
          <h1 className="text-[2.5rem] font-bold">Your Cart is Empty</h1>
          <CustomButton label="Shop For Games" btnClick={handleShopButton} />
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row my-12 gap-5">
          <div className="basis-[70%] space-y-5">
            {cart.map((game) => (
              <div
                className="p-5 rounded-xl bg-white/5 text-white flex gap-x-5"
                key={game.id}
              >
                <div className="basis-[35%]">
                  <img
                    src={game.background_image}
                    alt="thumbail"
                    className="aspect-[8/5] object-cover rounded-md"
                  />
                </div>
                <div className="space-y-5 basis-[65%]">
                  <div className="flex justify-between items-center">
                    <div className="bg-white/5 inline-block px-2 py-1 rounded-md">
                      <h4 className="text-[#ff32bb] text-xs font-bold">
                        Base Game
                      </h4>
                    </div>
                    <h2 className="text-[1.4rem] font-bold">Free</h2>
                  </div>
                  <h1 className="text-[1.7rem] font-bold">{game.name}</h1>
                  <span className="font-medium text-sm flex items-end gap-x-2">
                    PlatForm : <MdWindow className="text-[1.1rem] " />
                  </span>
                  <div className="flex justify-end">
                    <CustomButton
                      label="Remove"
                      icon={<BsTrash />}
                      styling="bg-white/10 hover:bg-white/20"
                      btnClick={() => removeFromCart(game)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="basis-[30%] max-h-[18rem] p-5 rounded-xl bg-white/5 backdrop-blur-md">
            <h2 className="text-[1.5rem] font-bold text-white text-center  ">
              Game Summary
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
