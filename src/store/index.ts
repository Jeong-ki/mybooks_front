import create from "zustand";

export const useFilterStore = create((set) => ({
  average: 0,
  setAverage: (average: number) => set({ average }),
}));
