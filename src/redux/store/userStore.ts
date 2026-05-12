import { create } from "zustand";

export const useUserStore = create<IUserStore>((set) => ({
  // State to track if the user is logged in
  isUserLoggedIn: false,
  // Action to update the login status
  setIsUserLoggedIn: (value) => set({ isUserLoggedIn: value }),
}));

interface IUserStore {
  isUserLoggedIn: Boolean;
  setIsUserLoggedIn: (value: Boolean) => void;
}
