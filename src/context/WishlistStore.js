import { create } from "zustand";

const useWishlistStore = create((set, get) => ({

    wishList:[],

    addToWishList:(item) => set((state) => {
       
    if(state.wishList.find((wishListItem) => (wishListItem.id === item.id))){
      
        return {wishList:state.wishList}
    }
    else{
        return {wishList:[...state.wishList, item]}
    }   
    }),

    removeFromWishList:(item) => set((state) => ({
       
     wishList: state.wishList.filter((wishListItem) => (wishListItem.id !== item.id))
     
    })),

    isInWishList: (id) => (get().wishList.some((wishListitem) => wishListitem.id === id)),

    clearWishList:() => set(() => ({
        wishList: []
    }))

}))

export default useWishlistStore;