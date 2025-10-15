function WishlistPage() {
  return (
    <div className="min-h-screen py-34 mx-24">
      <div className="space-y-5 text-white">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-[2.5rem] font-black text-white">My WishList</h2>
          </div>
          <div>
            <div className="flex gap-x-6">
              <div className="flex gap-x-3 items-center">
                <h3 className="font-medium text-white">Total Items</h3>
                <span className="text-white px-5 py-0.5 text-sm  rounded-2xl font-medium bg-black border border-white">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center gap-x-5">
            <div className="bg-gray-700 inline-block max-w-[23rem] w-full px-2 rounded-lg">
                <input type="text" className="text-gray-200 w-full py-1.5 px-2 focus:outline-0" placeholder="Search"/>
            </div>
          <div className="relative flex gap-x-2 items-center">
          <h5>Sort By:</h5>
           <select className="border border-white rounded-md bg-black text-sm font-medium py-1.5">
            <option >On Sale</option>
            <option >Recently Added</option>
            <option >Alphabetical</option>
            <option >Price:Low to High</option>
            <option >Price:High to Low</option>
           </select>
          </div>
        </div>
        <hr className="text-purple-500" />
      </div>
    </div>
  );
}

export default WishlistPage;
