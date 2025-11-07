import { FaRegCreditCard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6"
import { useForm } from "react-hook-form";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useState } from "react";

function WalletPage() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-screen-2xl min-h-screen pt-34 pb-10 text-white mx-auto px-5 lg:px-24">
      <div className="space-y-2">
        <h1 className="text-[2rem] sm:text-[2.5rem] font-bold">My Wallet</h1>
        <p className="text-gray-400">
          Manage your account balance, transactions, and payment methods
        </p>
        <hr className="text-purple-500 mt-5"/>
      </div>

      <div className="my-10 space-y-2">
        <h3 className="text-[1.5rem] font-medium">Account balance</h3>
        <p className="text-gray-400">
          Use your account balance to buy games, V-Bucks, and in-game items.
          Your balance is non-refundable
        </p>
      </div>

      <div className="flex gap-10 md:flex-row flex-col">
        <div className="basis-[40%]">
          <div className="space-y-2 bg-white/5 p-5 rounded-xl ">
            <h3 className="text-[1.5rem] font-semibold">Current Balance</h3>
            <h1 className="text-[3rem] sm:text-[4rem] ">$0.00</h1>
          </div>
        <div className="my-5 flex items-center flex-wrap-reverse gap-5">  
        <CustomButton label="View Transaction" 
        styling="border border-purple-600 rounded-md transition-all duration-300 ease-in-out py-3 hover:bg-purple-600"/>
        <CustomButton label="Add Funds" icon={<FaPlus/>} styling="bg-gradient-to-r from-purple-600 to-purple-800 transition-all duration-300 ease-in-out rounded-md py-3 hover:opacity-80 "/>
        </div>
        </div>

        <div className="basis-[60%]">
          <div className="space-y-2">
            <h4 className="text-[1.5rem] font-semibold">Your Payment Method</h4>
            <p className="text-gray-400">
              By saving your payment information, this payment method will be
              set as the default for all purchases made using your Games Account
              on PC and mobile, including purchases on the Origin Games Store.
            </p>
          </div>

          <div className="my-5">
            <h5 className="font-semibold text-[1.1rem]">
              Add a Payment Method
            </h5>
            <div>
              <div
                onClick={() => setIsOpen(true)}
                className={`bg-white/5 p-4 my-5 rounded-md border cursor-pointer ${
                  isOpen ? "min-h-fit border-purple-300" : "h-[3.5rem] border-white/20"
                } overflow-hidden`}
              >
                <div className="flex gap-x-5 items-center mb-4">
                  <FaRegCreditCard className="text-white" />
                  <p>Credit Card / Debit Card</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex justify-between flex-col sm:flex-row gap-5">
                    <div className="basis-[50%]">
                      <label className="text-xs text-gray-300 font-medium">
                        Card Number <span className="text-red-500">*</span>
                      </label>
                      <br />
                      <input
                        type="text"
                        {...register("Card Number")}
                        className="border-[0.5px] my-2 border-gray-300 p-3 w-full rounded-lg"
                        placeholder="0000 0000 0000"
                        required
                      ></input>
                    </div>
                    <div className="basis-[50%]">
                      <label className="text-xs text-gray-300 font-medium">
                        Name on Card <span className="text-red-500">*</span>
                      </label>
                      <br />
                      <input
                        type="text"
                        {...register("Card Name")}
                        className="border-[0.5px] border-gray-300 p-3 w-full rounded-lg my-2"
                        placeholder="John Doe"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="flex justify-between flex-col sm:flex-row gap-5">
                    <div className="basis-[50%]">
                      <label className="text-xs text-gray-300 font-medium">
                        Expires <span className="text-red-500">*</span>
                      </label>
                      <br />
                      <input
                        type="text"
                        {...register("Expires")}
                        className="border-[0.5px] my-2 border-gray-300 p-3 w-full rounded-lg"
                        placeholder="MM/YY"
                        required
                      ></input>
                    </div>
                    <div className="basis-[50%]">
                      <label className="text-xs text-gray-300 font-medium">
                        CVV <span className="text-red-500">*</span>
                      </label>
                      <br />
                      <input
                        type="text"
                        {...register("CVV")}
                        className="border-[0.5px] border-gray-300 p-3 w-full rounded-lg my-2"
                        placeholder="CVV"
                        required
                      ></input>
                    </div>
                  </div>
                  <p className="text-[0.8rem] my-3 leading-6 font-medium">
                    By saving your payment information, this payment method will
                    be set as the default for all purchases made using your Epic
                    Games Account on PC and mobile. You can delete your saved
                    payment information anytime on this payment screen or by
                    logging in to your Epic Games Account and selecting payment
                    management in your account setting.
                  </p>
                  <div className="my-5">
                    <input
                      type="submit"
                      value="Add Payment Method"
                      className="bg-purple-600 font-medium text-sm py-2 px-4 rounded-md cursor-pointer hover:bg-purple-800"
                    />
                    <input
                        type="button"
                      value="Cancel"
                      className="ml-5 bg-white/10 px-4 py-2 text-sm font-medium rounded-md cursor-pointer hover:bg-white/20"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(false)
                      }
                      }
                    />
                  </div>
                </form>
              </div>

              <div className="bg-white/10 flex gap-x-5 items-center p-4 my-5 rounded-md border border-white/20 cursor-pointer hover:bg-white/20">
                <FaPaypal className="text-blue-500" />
                <p>Paypal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletPage;
