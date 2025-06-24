import { create } from "zustand";

interface ICreateTweetStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useCreateTweetStore = create<ICreateTweetStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useCreateTweetStore;
