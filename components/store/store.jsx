import react from "react";
import create from "zustand";

export const useModalStore = create((set) => ({
  isModalOpen: false,
  setIsModalOpen: (modalChecker) => set(() => ({ isModalOpen: modalChecker })),
}));
