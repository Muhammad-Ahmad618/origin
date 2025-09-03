import React, {useContext} from "react";
import {CartContext}  from '../CartContext/CartContext'
import { IoCart } from "react-icons/io5";


export default function Add_to_cart_Btn() {

  const {handleCart} = useContext(CartContext)

  return (
    <>
      <button className="bg-purple-600 w-[7rem] sm:w-[8rem] py-1.5 text-xs font-medium md:text-sm rounded-sm self-end transition-all duration-300 hover:bg-purple-800 flex items-center justify-evenly">
        <IoCart className="text-[1rem] md:text-[1.2rem]" onClick={handleCart}/>
        Add to Cart
      </button>
    </>
  );
}
