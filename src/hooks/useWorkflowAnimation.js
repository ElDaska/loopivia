// src/hooks/useWorkflowAnimation.js
import { useState, useEffect, useCallback } from 'react';

export const useWorkflowAnimation = (stepsCount, isVisible, initialPlayState = true) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1); // Commence à -1 pour un état initial "vierge"

  // Démarre l'animation quand la section devient visible
  useEffect(() => {
    if (isVisible) {
      setIsPlaying(initialPlayState);
      setCurrentStep(0); // Commence la première étape
    } else {
      setIsPlaying(false);
      setCurrentStep(-1); // Réinitialise à l'état vierge
    }
  }, [isVisible, initialPlayState]);
  
  // Gère la progression des étapes
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentStep(prev => (prev >= stepsCount - 1 ? 0 : prev + 1));
    }, 2000); // Rythme de l'animation

    return () => clearInterval(timer);
  }, [isPlaying, stepsCount]);

  const handlePlayPause = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const handleReset = useCallback(() => {
    setIsPlaying(false);
    setCurrentStep(0);
    // Un léger délai avant de relancer pour une meilleure expérience utilisateur
    setTimeout(() => setIsPlaying(true), 100);
  }, []);

  return { isPlaying, currentStep, handlePlayPause, handleReset };
};