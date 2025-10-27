import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cart: [],

  addToCart: (item) =>
    set((state) => {
      if (state.cart.find((cartItem) => cartItem.id === item.id)) {
        return { cart: state.cart };
      } else {
        return { cart: [...state.cart, item] };
      }
    }),

  removeFromCart: (item) =>
    set((state) => ({
      cart: state.cart.filter((cartItem) => cartItem.id !== item.id),
    })),

  isInCart: (id) => get().cart.some((CartItem) => CartItem.id === id),

  clearCart: () => set({ cart: [] }),

  getTotalPrice: () => {
    return get().cart.reduce((total, item) => total + item.price, 0) 
  },
}));

export default useCartStore;
