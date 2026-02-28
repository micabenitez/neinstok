import React, { useState, useEffect, useRef } from "react";
import { useStore } from "@nanostores/react";
import {
  isPlayerOpen,
  activeProject,
  closePlayer,
  isPlaying,
  togglePlay,
  openPlayer
} from "../stores/playerStore";
import { projectsData } from '@/data/projects';

export const ProjectPlayer: React.FC = () => {
  const isOpen = useStore(isPlayerOpen);
  const project = useStore(activeProject);
  const playing = useStore(isPlaying);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [isAfter, setIsAfter] = useState(false);

  const formatTime = (timeInSeconds: number) => {
    if (!timeInSeconds || isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const changeProject = (direction: 'next' | 'prev') => {
    if (!project) return;
    const currentIndex = projectsData.findIndex(p => p.title === project.title);
    if (currentIndex === -1) return;

    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % projectsData.length;
    } else {
      newIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
    }
    openPlayer(projectsData[newIndex]);
  };

  useEffect(() => {
    if (project && audioRef.current) {
      if (audioRef.current.src !== window.location.origin + project.audio) {
          audioRef.current.src = project.audio;
          audioRef.current.preload = "auto";
          
          if (playing) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
              playPromise.catch(error => console.log("Autoplay:", error));
            }
          }
      }
    }
  }, [project]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.play().catch(console.error);
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration || 1;
      setProgress((current / duration) * 100);
    }
  };

  const handleEnded = () => {
    changeProject('next');
  };

  useEffect(() => {
    if (isOpen && showInfo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen, showInfo]);

  if (!isOpen || !project) return null;

  return (
    <div className={`fixed inset-0 z-50 flex flex-col justify-end ${showInfo ? "pointer-events-auto" : "pointer-events-none"}`}>
      
      <audio 
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        preload="auto" 
      />

      <div
        className={`absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity duration-500 ease-in-out ${
          showInfo ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setShowInfo(false)}
      />

      <div className={`relative z-10 w-full flex-1 flex flex-col justify-center px-4 md:px-20 text-white transition-all duration-500 ease-in-out ${
          showInfo ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none hidden"
        }`}>
        
        <button onClick={closePlayer} className="absolute top-6 right-8 text-gray-400 hover:text-white transition-colors">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div className="max-w-6xl mx-auto w-full mb-24">
          <p className="text-xs font-bold tracking-widest text-gray-400 mb-4 uppercase">_Detalles del Proyecto</p>
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">    
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-2 uppercase">{project.title}</h1>
              <h2 className="text-2xl text-gray-400 font-light mb-8">{project.subtitle}</h2>
              <div className="flex items-center gap-2 mb-8 text-sm font-bold tracking-wide text-gray-200">
                <span>{project.category || "MEZCLA & MASTERING"}</span>
              </div>
              <p className="text-gray-400 italic text-lg leading-relaxed">"{project.description}"</p>
            </div>

            <div className="hidden md:block text-right">
              <p className="text-xs font-bold text-gray-500 uppercase mb-2 tracking-widest">Control de Calidad</p>
              <h3 className="text-xl font-bold mb-4">Comparativa A/B</h3>

              <div className="flex items-center justify-end bg-gray-900 rounded-lg p-1 w-fit ml-auto border border-gray-800">
                <button
                  onClick={() => setIsAfter(false)}
                  className={`px-4 py-1 text-xs font-bold transition-all rounded ${!isAfter ? "text-white bg-gray-800" : "text-gray-400 hover:text-white"}`}
                >ANTES</button>
                <div className="w-px h-4 bg-gray-700 mx-1"></div>
                <button
                  onClick={() => setIsAfter(true)}
                  className={`px-4 py-1 text-xs font-bold transition-all rounded ${isAfter ? "text-white bg-red-600" : "text-gray-400 hover:text-white"}`}
                >DESPUÉS</button>
              </div>
              
              <p className="text-[10px] text-gray-600 mt-2 italic max-w-50 ml-auto">
                {isAfter ? "Escuchando versión final masterizada." : "Escuchando mezcla original sin procesos."}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-50 w-full bg-black border-t border-gray-900 px-6 py-4 shadow-2xl pointer-events-auto">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 md:gap-8">
              <div className="flex items-center gap-4 w-1/4">
                  <img src={project.image} alt="Cover" className="w-12 h-12 rounded-md shadow-lg object-cover" />
                  <div className="hidden md:block overflow-hidden">
                      <h4 className="text-white font-bold truncate text-sm">{project.title}</h4>
                      <p className="text-gray-500 text-xs truncate">{project.subtitle}</p>
                  </div>
              </div>

              <div className="flex-1 flex flex-col items-center max-w-xl">
                  <div className="flex items-center gap-6 mb-2">
                      <button onClick={() => changeProject('prev')} className="text-gray-400 hover:text-white">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
                      </button>
                      
                      <button onClick={togglePlay} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform">
                          {playing ? (
                               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                          ) : (
                               <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                          )}
                      </button>

                      <button onClick={() => changeProject('next')} className="text-gray-400 hover:text-white">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>
                      </button>
                  </div>
                  
                  <div className="w-full flex items-center gap-3 text-[10px] text-gray-500 font-mono">
                      <span className="w-8 text-right">{audioRef.current ? formatTime(audioRef.current.currentTime) : "0:00"}</span>
                      <div 
                        className="relative flex-1 h-1 bg-gray-800 rounded-full group cursor-pointer"
                        onClick={(e) => {
                            if (!audioRef.current) return;
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            audioRef.current.currentTime = (x / rect.width) * audioRef.current.duration;
                        }}
                      > 
                          <div className="absolute -top-2 -bottom-2 w-full"></div>
                          <div className="absolute top-0 left-0 h-full bg-red-600 rounded-full" style={{ width: `${progress}%` }}>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-md  transition-opacity duration-200"></div>
                          </div>
                      </div>
                      <span className="w-8">{audioRef.current && !isNaN(audioRef.current.duration) ? formatTime(audioRef.current.duration) : "0:00"}</span>
                  </div>
              </div>

              <div className="w-1/4 flex justify-end items-center gap-3">               
                 <div className="hidden lg:flex flex-col items-center mr-2">
                    <span className="text-[9px] font-bold text-gray-500 mb-1">{isAfter ? 'DESPUÉS' : 'ANTES'}</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={isAfter}
                        onChange={() => setIsAfter(!isAfter)}
                      />
                      <div className="w-8 h-4 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-red-600"></div>
                    </label>
                  </div>

                 <button
                    onClick={() => setShowInfo(!showInfo)}
                    className={`p-2 rounded-full border transition-all duration-300 flex items-center gap-2 ${showInfo ? "bg-white text-black border-white" : "bg-transparent text-gray-400 border-gray-600 hover:border-white hover:text-white"}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${showInfo ? "rotate-180" : "rotate-0"}`}><polyline points="18 15 12 9 6 15"></polyline></svg>
                  </button>
                  <button onClick={closePlayer} className="hover:text-red-500 text-gray-400 p-1 ml-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
              </div>
          </div>
      </div>
    </div>
  );
};