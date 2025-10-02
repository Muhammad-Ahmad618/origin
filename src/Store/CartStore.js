import { create } from "zustand";

const useCartStore = create((set) => ({

    cart: [],

    addToCart: (item) => 
       
    set((state) => {

        if(state.cart.find((cartItem) => cartItem.id === item.id)){
           return {cart: state.cart}
        }
        else{
           return { cart:[...state.cart, item] }
        }
        
    }),
    
    removeFromCart: (id) => 
    
    set((state) => ({
        cart: state.cart.filter((cartItem) => cartItem.id !== id)
    })),
    
    clearCart: () => set({cart:[]}),

}))

export default useCartStore;