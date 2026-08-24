import React, { useState, useEffect, useRef } from "react";
import { useAudioStore } from "../stores/playerStore";

export const ProjectPlayer: React.FC = () => {
  // Desestructuramos absolutamente todo desde nuestro único Store de Zustand
  const {
    isOpen, 
    activeProject: project, 
    isPlaying, 
    isAfter, 
    showInfo,
    closePlayer, 
    togglePlay, 
    setPlaying, 
    setShowInfo, 
    setIsAfter,
    nextProject, 
    prevProject, 
    updateTime
  } = useAudioStore();

  const audioRef = useRef<HTMLAudioElement>(null);
  const savedTimeRef = useRef<number>(0);
  const isChangingSourceRef = useRef<boolean>(false);
  const prevProjectTitleRef = useRef<string>("");
  const [progress, setProgress] = useState(0);

  const formatTime = (timeInSeconds: number) => {
    if (!timeInSeconds || isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Efecto para manejar el cambio de proyecto y el switch entre ANTES/DESPUÉS
  useEffect(() => {
    if (!project || !audioRef.current) return;

    const newSource = isAfter && project.audioAfter ? project.audioAfter : project.audio;

    if (audioRef.current.getAttribute('src') !== newSource) {
      isChangingSourceRef.current = true;
      
      // Evaluamos si estamos cambiando de canción o haciendo un switch A/B
      if (prevProjectTitleRef.current !== project.song) {
        // Es una canción nueva: reseteamos el tiempo a 0
        savedTimeRef.current = 0;
        // Actualizamos nuestra memoria con el nuevo proyecto
        prevProjectTitleRef.current = project.song; 
      } else {
        // Es la misma canción (Switch A/B): guardamos el tiempo actual
        savedTimeRef.current = audioRef.current.currentTime;
      }
      
      audioRef.current.src = newSource;
      audioRef.current.load();
    }
  }, [isAfter, project]);

  // Sincronizar el tiempo cuando el nuevo audio se carga
  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;

    // Restaurar el tiempo guardado en el ref
    audioRef.current.currentTime = savedTimeRef.current;
    
    // Si estaba reproduciendo, continuar la reproducción
    if (isPlaying) {
      audioRef.current.play().catch(error => {
        console.warn("Autoplay bloqueado:", error);
        setPlaying(false);
      });
    }
    
    isChangingSourceRef.current = false;
  };

  // Efecto para sincronizar isPlaying del store con el elemento de audio real
  useEffect(() => {
    if (!audioRef.current || isChangingSourceRef.current) return;
    
    if (isPlaying) {
      audioRef.current.play().catch(() => setPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    if (audioRef.current && !isChangingSourceRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration || 1;
      setProgress((current / duration) * 100);
      updateTime(current);
    }
  };

  // Efecto original para bloquear el scroll cuando la info está abierta
  useEffect(() => {
    if (isOpen && showInfo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen, showInfo]);

  if (!isOpen || !project) return null;

  return (
    <div className={`fixed inset-0 z-50 flex flex-col justify-end md:items-stretch md:px-0 md:pb-0 ${showInfo ? "items-center bg-[#151515] px-0 pb-1 pointer-events-auto" : "items-stretch px-0 pb-0 pointer-events-none"}`}>
      
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={nextProject}
        preload="auto"
      />

      <div
          className={`absolute inset-0 bg-[#151515] backdrop-blur-md transition-opacity duration-500 ease-in-out ${
          showInfo ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setShowInfo(false)}
      />

      <div className={`mobile-player-shell relative z-10 flex flex-col justify-end overflow-hidden text-white md:contents ${
        showInfo
          ? "h-[calc(100%-4px)] w-[calc(100%-24px)] rounded-[22px] border border-gray-800 bg-[#090909]"
          : "h-auto w-full border-0 bg-transparent"
      }`}>
        <div className={`relative flex min-h-0 w-full flex-1 flex-col justify-start overflow-y-auto px-4 pt-5 pb-6 transition-all duration-500 ease-in-out md:h-auto md:flex-1 md:justify-center md:overflow-y-auto md:px-20 md:py-0 ${
          showInfo ? "translate-y-0 opacity-100" : "pointer-events-none hidden translate-y-10 opacity-0"
        }`}>
        <button onClick={() => setShowInfo(false)} className="absolute right-2 top-2 p-1 text-gray-300 transition-colors hover:text-white md:right-8 md:top-6 md:p-2">
          <svg className="h-7 w-7 md:h-8 md:w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div className="mx-auto mb-8 w-full max-w-6xl md:mb-24">
          <p className="mb-2 text-[9px] font-bold tracking-wide text-gray-500 uppercase md:mb-4 md:text-xs md:tracking-widest">_Detalles del Proyecto</p>
          
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:gap-10">    
            <div className="flex-1">
              <h1 className="mb-0.5 text-3xl font-bold uppercase leading-none sm:text-4xl md:mb-2 md:text-4xl">{project.song}</h1>
              <h2 className="mb-4 text-xs font-light text-gray-400 md:mb-8 md:text-2xl">{project.subtitle}</h2>
              <div className="mb-2 flex items-center gap-2 text-[10px] font-bold tracking-wide text-gray-200 md:mb-8 md:text-sm">
                <span>{project.category || "MEZCLA & MASTERING"}</span>
              </div>
            <p className="max-w-2xl text-xs font-semibold italic text-justify leading-tight text-gray-500 md:text-sm md:leading-relaxed whitespace-pre-line [&_a]:text-red-500 [&_a]:underline"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
            </div>

            <div className="m w-full border-t border-gray-800 pt-3 text-left md:w-auto md:border-0 md:pt-0 md:text-right">
              <p className="mb-1 text-[9px] font-bold tracking-wide text-gray-500 uppercase md:mb-2 md:text-xs md:tracking-widest">Control de Calidad</p>
              <h3 className="mb-2 text-sm font-bold md:mb-4 md:text-xl">Comparativa A/B</h3>

              <div className="flex w-full items-center justify-end rounded-lg border border-gray-800 bg-gray-900 p-1 md:ml-auto md:w-fit">
                <button
                  onClick={() => setIsAfter(false)}
                  className={`flex-1 rounded px-4 py-1 text-[10px] font-bold transition-all md:flex-none md:text-xs ${!isAfter ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white"}`}
                >PROCESADO</button>
                <div className="w-px h-4 bg-gray-700 mx-1"></div>
                <button
                  onClick={() => setIsAfter(true)}
                  className={`flex-1 rounded px-4 py-1 text-[10px] font-bold transition-all md:flex-none md:text-xs ${isAfter ? "bg-red-600 text-white" : "text-gray-400 hover:text-white"}`}
                >ORIGINAL</button>
              </div>
              
              <p className="mt-2 max-w-xl text-sm text-center italic text-gray-600 md:ml-auto md:text-md">
                {isAfter ? "Escuchando versión final masterizada." : "Escuchando mezcla original sin procesos."}
              </p>
            </div>
          </div>
        </div>
      </div>

        <div className="relative z-50 h-36 w-full flex-none border-t border-gray-800 bg-black px-3.5 py-3 shadow-2xl pointer-events-auto md:h-auto md:border-t md:border-gray-900 md:px-6 md:py-4">
          <div className="max-w-7xl mx-auto grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-3 md:flex md:justify-between md:gap-8">
            <div className="col-start-1 row-start-1 flex min-w-0 items-center gap-2 md:w-1/4 md:gap-4">
                  <img src={project.image} alt="Cover" className="w-12 h-12 rounded-md shadow-lg object-cover" />
              <div className="min-w-0 overflow-hidden">
                      <h4 className="text-white font-bold truncate text-md ">{project.song}</h4>
                      <p className="text-gray-500 text-xs truncate">{project.subtitle}</p>
                  </div>
              </div>

            <div className="col-span-2 row-start-2 flex w-full min-w-0 flex-1 flex-col items-center md:order-0 md:max-w-xl">
              <div className="order-2 mt-2 md:mb-2 flex items-center gap-8 md:order-0">
                      <button onClick={prevProject} className="text-gray-400 hover:text-white">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
                      </button>
                      
                      <button onClick={togglePlay} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform">
                          {isPlaying ? (
                               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                          ) : (
                               <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                          )}
                      </button>

                      <button onClick={nextProject} className="text-gray-400 hover:text-white">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>
                      </button>
                  </div>
                  
                  <div className="order-1 flex w-full items-center gap-3 font-mono text-[10px] text-gray-500 md:order-0">
                      <span className="w-8 text-right">{audioRef.current ? formatTime(audioRef.current.currentTime) : "0:00"}</span>
                      <div 
                        className="relative h-1 flex-1 cursor-pointer rounded-full bg-gray-800 group"
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

              <div className="col-start-2 row-start-1 flex items-center justify-end gap-3 md:w-1/4">               
                <div className="flex md:flex-col gap-2 md:gap-1 items-center justif-center md:mr-2">
                  <span className="text-[10px] md:text-[12px] font-bold text-gray-500 ">{isAfter ? 'PROCESADO' : 'ORIGINAL'}</span>
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
                 <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowInfo(!showInfo)}
                    className={`cursor-pointer md:p-2 rounded-full md:border transition-all duration-300 flex items-center gap-2 ${showInfo ? "bg-white text-black border-white" : "bg-transparent text-gray-400 border-gray-600 hover:border-white hover:text-white"}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`hidden md:block transition-transform duration-300 animate-bounce ${showInfo ? "rotate-180" : "rotate-0"}`}><polyline points="18 15 12 9 6 15"></polyline></svg>
                  </button>
                  <button onClick={closePlayer} className="hover:text-red-500 text-gray-400 md:p-1 md:ml-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                  </div>       
            </div>
          </div>
      </div>
    </div>
    </div>
  );
};