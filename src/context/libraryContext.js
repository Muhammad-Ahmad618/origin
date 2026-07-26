import { create } from "zustand";

const useLibraryStore = create((set, get) => ({
  library: [],

  addToLibrary: (game) =>
    set((state) => {
      if (state.library.find((cartItem) => cartItem.id === game.id)) {
        return { library: state.library };
      } else {
        return {
          library: [
            ...state.library,
            {
              ...game,
              favorite: game.favorite ?? false,
              installed: game.installed ?? false,
            },
          ],
        };
      }
    }),

  removeFromLibrary: (game) =>
    set((state) => ({
      library: state.library.filter((cartItem) => cartItem.id !== game.id),
    })),

  isInLibrary: (id) => get().library.some((cartItem) => cartItem.id === id),

  toggleFavorite: (id) =>
    set((state) => ({
      library: state.library.map((game) =>
        game.id === id ? { ...game, favorite: !game.favorite } : game
      ),
    })),

  toggleInstalled: (id) =>
    set((state) => ({
      library: state.library.map((game) =>
        game.id === id ? { ...game, installed: !game.installed } : game
      ),
    })),

  clearLibrary: () => set({ library: [] }),
}));

export default useLibraryStore;
