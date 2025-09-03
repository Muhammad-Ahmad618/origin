import { useState, useEffect,createContext } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => {
    
   const[cartItems, setCartItems] = useState(() => {
    return JSON.parse(sessionStorage.getItem("cartItems")) || 0
   })
 
   useEffect(() => {
    
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems))

   },[cartItems])

   const handleCart = () => {

      setCartItems(cartItems + 1)
   }

   return(
      <CartContext.Provider value={{cartItems, handleCart}}>
        {children}
      </CartContext.Provider >
   )
}

export default CartProvider

