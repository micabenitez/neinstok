import { atom } from 'nanostores';

export interface ProjectData {
  title: string;
  image: string;
  audio: string;
  subtitle?: string;
  description?: string;
  category?: string;
  bgColor?: string;
  large?: boolean;
}

export const isPlayerOpen = atom(false);
export const activeProject = atom<ProjectData | null>(null);
export const isPlaying = atom(false);

export const openPlayer = (project: ProjectData) => {
  activeProject.set(project);
  isPlayerOpen.set(true);
  isPlaying.set(true);
};

export const closePlayer = () => {
  isPlayerOpen.set(false);
  isPlaying.set(false);
  setTimeout(() => activeProject.set(null), 300);
};

export const togglePlay = () => {
    isPlaying.set(!isPlaying.get());
}