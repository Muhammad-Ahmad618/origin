function CartPage() {
  return (
    <div className="py-34 mx-24">
      <div className="flex justify-between items-end mb-3">
        <h1 className="text-white font-black text-[2.5rem]">My Cart</h1>
        <div className="flex gap-x-6">
          <div className="flex gap-x-3 items-center">
            <h3 className="font-medium text-white">Total Items</h3>
            <span className="text-white px-5 py-0.5 text-sm  rounded-2xl font-medium bg-black border border-white">
              0
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
      <div className="flex my-12">
      <div className="basis-[70%]">


      </div>

      <div className="basis-[30%] p-5 rounded-xl bg-white/5 backdrop-blur-md">
        <h2 className="text-[1.5rem] font-bold text-white text-center  ">Game Summary</h2>


      </div>
      </div>
    </div>
  );
}

export default CartPage;
