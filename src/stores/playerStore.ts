import { create } from 'zustand';
import { projectsData } from '@/data/projects';

interface AudioStore {
  // Estado de UI
  isOpen: boolean;
  showInfo: boolean;
  
  // Estado de Datos
  activeProject: any | null;
  
  // Estado de Audio
  isPlaying: boolean;
  isAfter: boolean; // El switch A/B (Antes/Después)
  currentTime: number;

  // Acciones
  openPlayer: (project: any) => void;
  closePlayer: () => void;
  togglePlay: () => void;
  setPlaying: (val: boolean) => void;
  setShowInfo: (val: boolean) => void;
  setIsAfter: (val: boolean) => void;
  updateTime: (time: number) => void;
  nextProject: () => void;
  prevProject: () => void;
}

export const useAudioStore = create<AudioStore>((set, get) => ({
  isOpen: false,
  showInfo: false,
  activeProject: null,
  isPlaying: false,
  isAfter: false,
  currentTime: 0,

  openPlayer: (project) => set({ 
    activeProject: project, 
    isOpen: true, 
    isPlaying: true,
    isAfter: false, // Resetear a "Antes" al abrir nuevo proyecto
    currentTime: 0 
  }),

  closePlayer: () => set({ isOpen: false, isPlaying: false, showInfo: false }),

  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  
  setPlaying: (val) => set({ isPlaying: val }),

  setShowInfo: (val) => set({ showInfo: val }),

  setIsAfter: (val) => set({ isAfter: val }),

  updateTime: (time) => set({ currentTime: time }),

  nextProject: () => {
    const { activeProject } = get();
    if (!activeProject) return;
    const currentIndex = projectsData.findIndex(p => p.title === activeProject.title);
    const nextIndex = (currentIndex + 1) % projectsData.length;
    set({ activeProject: projectsData[nextIndex], currentTime: 0 });
  },

  prevProject: () => {
    const { activeProject } = get();
    if (!activeProject) return;
    const currentIndex = projectsData.findIndex(p => p.title === activeProject.title);
    const prevIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
    set({ activeProject: projectsData[prevIndex], currentTime: 0 });
  }
}));