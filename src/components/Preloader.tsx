import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Check if user already saw preloader in this session
    const hasLoadedBefore = sessionStorage.getItem('akash_portfolio_loaded');
    if (hasLoadedBefore) {
      setIsFinished(true);
      onComplete();
      return;
    }

    const duration = 1100;
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(currentProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        sessionStorage.setItem('akash_portfolio_loaded', 'true');
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(onComplete, 400);
        }, 100);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.6, ease: [0.77, 0, 0.175, 1] }
          }}
          className="fixed inset-0 z-[99999] flex flex-col justify-between p-6 sm:p-10 md:p-16 bg-[#080808] text-[#F5F5F0] select-none"
        >
          {/* Top metadata */}
          <div className="flex justify-between items-center text-[10px] sm:text-xs tracking-[0.2em] text-neutral-500 uppercase font-mono">
            <span>DHAKA · BD</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              PORTFOLIO
            </span>
          </div>

          {/* Central wordmark - strictly AKASH, no ® */}
          <div className="flex flex-col items-center justify-center text-center my-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="space-y-3"
            >
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-display tracking-tight text-off-white">
                AKASH
              </h1>
              <p className="text-[10px] sm:text-xs tracking-[0.25em] text-neutral-400 uppercase font-mono">
                Visual Storyteller · Cinematographer
              </p>
            </motion.div>
          </div>

          {/* Bottom progress bar */}
          <div className="w-full space-y-2.5 max-w-xs sm:max-w-md mx-auto">
            <div className="flex justify-between items-end text-[10px] sm:text-[11px] font-mono text-neutral-500">
              <span className="tracking-widest uppercase">LOADING ARCHIVE</span>
              <span className="text-accent font-semibold">{progress}%</span>
            </div>
            <div className="w-full h-[1.5px] bg-neutral-800 overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
