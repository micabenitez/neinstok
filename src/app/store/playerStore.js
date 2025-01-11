import { create } from "zustand";

export const usePlayerStore = create((set) => ({
    isPlaying: false,
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    currentSong: {album: null, song: null},
    setCurrentSong: (currentSong) => set({ currentSong }),
}));