import create from "zustand";

export const useBookStore = create((set) => ({
  myBooks: [],
  setBooks: (list: any) => {
    set({ myBooks: [...list] });
  },
  filterBooks: () => {
    set((state: any) => ({
      myBooks: state.myBooks.filter((data: any) => data.id === 1),
    }));
  },
}));
