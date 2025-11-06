import { RiCoupon2Fill } from "react-icons/ri";

function CouponPage() {
  const coupons = [
    {
      id: 1,
      couponName: "WELCOME 10",
      description: "Get 10% off your first purchase",
      discountType: "percentage", // or "flat"
      discountValue: 10,
      minPurchase: 0,
      maxDiscount: 50,
      expirationDate: "2025-12-31",
      isActive: true,
    },
    {
      id: 2,
      couponName: "SUMMER 25",
      description: "Summer sale - 25% off on all games",
      discountType: "percentage",
      discountValue: 25,
      minPurchase: 20,
      maxDiscount: 100,
      expirationDate: "2025-08-01",
      isActive: true,
    },
    {
      id: 3,
      couponName: "SAVE 10",
      description: "Flat $10.00 off on orders above $40",
      discountType: "flat",
      discountValue: 10,
      minPurchase: 40,
      maxDiscount: 5,
      expirationDate: "2025-06-30",
      isActive: false,
    },
    {
      id: 4,
      couponName: "BLACK FRIDAY 50",
      description: "Massive 50% off on select titles",
      discountType: "percentage",
      discountValue: 50,
      minPurchase: 0,
      maxDiscount: 200,
      expirationDate: "2025-11-30",
      isActive: true,
    },
    {
      id: 5,
      couponName: "LOYALTY 15",
      description: "15% off for returning customers",
      discountType: "percentage",
      discountValue: 15,
      minPurchase: 10,
      maxDiscount: 75,
      expirationDate: "2026-01-01",
      isActive: true,
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto px-5 lg:px-14 xl:px-24 pt-34 pb-10">
      <div>
        <h1 className="text-[2rem] sm:text-[2.5rem] font-bold text-white">My Coupons</h1>
      </div>
      <hr className="text-purple-500 my-3" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-7 my-10">
        {coupons.map((coupon) => (
          <div className="p-5 bg-white/5 text-white rounded-lg" key={coupon.id}>
            <div className="bg-gradient-to-r h-[10.5rem] p-5 flex flex-col justify-center lg:flex-row items-center gap-x-5 rounded-lg from-purple-800 via-purple-500 to-purple-800">
              <div className="basis-[25%]">
                <RiCoupon2Fill className="text-[clamp(3rem,5vw,6rem)] text-white" />
              </div>
              <div className="basis-[75%] text-center lg:text-start">
                <h4 className="text-[1.2rem] lg:text-[1.4em] font-bold py-2">{coupon.couponName}</h4>
                <p className="font-medium text-sm">{coupon.description}</p>
              </div>
            </div>
            <div className="pt-5 text-sm font-medium space-y-3">
              
              <p>Minimum Purchase: ${coupon.minPurchase}</p>
              <div className="flex justify-between flex-col xl:flex-row gap-3">
              <p>
                Expiration Date:{" "}
                <span className="text-[#ff32bb] ">{coupon.expirationDate}</span>
              </p>
              <p>Status: <span className={`${coupon.isActive ? "text-green-400" : "text-red-500"}`}>{coupon.isActive ? "Valid" : "Invalid"}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CouponPage;
