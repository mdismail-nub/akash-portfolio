import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Eye } from 'lucide-react';
import { projects } from '../data/projects';
import { Project } from '../types';

interface SelectedWorksProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ onSelectProject }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragX = useMotionValue(0);

  // Subtle card tilt during active dragging
  const dragRotation = useTransform(dragX, [-300, 0, 300], [-3, 0, 3]);

  const total = projects.length;
  const currentProject = projects[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCardClick = (index: number, project: Project) => {
    if (index === currentIndex) {
      onSelectProject(project);
    } else {
      setCurrentIndex(index);
    }
  };

  // Swipe drag end handler with velocity & threshold
  const handleDragEnd = (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    const threshold = 50;
    const velocityThreshold = 400;

    if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
      handleNext();
    } else if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
      handlePrev();
    }
  };

  return (
    <section
      id="works"
      ref={containerRef}
      className="relative py-20 sm:py-28 md:py-32 bg-[#080808] overflow-hidden select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-accent/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-10 sm:space-y-12 relative z-10">
        
        {/* SECTION HEADER: SELECTED WORK / 02 */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/[0.06] pb-8">
          <div className="space-y-2.5 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.22em] text-accent uppercase">
                SELECTED WORK / 02
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight text-off-white leading-[1.08]">
              Stories Made Visual.
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-neutral-400 font-sans leading-relaxed">
              A selection of brands and experiences I've brought to life.
            </p>
          </div>

          {/* Controls & Numerical Counter Header */}
          <div className="flex items-center gap-4 sm:gap-6 self-end md:self-auto">
            {/* Project Index Counter */}
            <div className="text-right font-mono">
              <div className="text-lg sm:text-xl font-black font-display text-white tracking-tight">
                {String(currentIndex + 1).padStart(2, '0')}{' '}
                <span className="text-neutral-500 font-normal text-xs sm:text-sm">
                  / {String(total).padStart(2, '0')}
                </span>
              </div>
              <div className="text-[9px] uppercase tracking-widest text-neutral-500">
                SWIPE OR DRAG
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous project"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/10 bg-white/[0.03] hover:border-accent hover:text-background hover:bg-accent text-white flex items-center justify-center transition-all duration-300 active:scale-95"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next project"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/10 bg-white/[0.03] hover:border-accent hover:text-background hover:bg-accent text-white flex items-center justify-center transition-all duration-300 active:scale-95"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-full h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-accent"
            animate={{ width: `${((currentIndex + 1) / total) * 100}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        </div>

        {/* CINEMATIC SWIPE CAROUSEL CONTAINER */}
        <div className="relative w-full py-4 overflow-visible">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            style={{ x: dragX, rotate: dragRotation }}
            className="flex items-center justify-center cursor-grab active:cursor-grabbing w-full min-h-[460px] sm:min-h-[520px] md:min-h-[580px] touch-pan-y"
          >
            <div className="relative w-full max-w-[880px] flex items-center justify-center">
              <AnimatePresence mode="popLayout">
                {/* Active Featured Card */}
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, scale: 0.94, x: 80 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.94, x: -80 }}
                  transition={{
                    type: 'spring',
                    stiffness: 320,
                    damping: 32,
                    mass: 0.8,
                  }}
                  onClick={() => onSelectProject(currentProject)}
                  className="group relative w-full h-[420px] sm:h-[480px] md:h-[540px] rounded-3xl overflow-hidden border border-white/[0.12] bg-[#121212] shadow-[0_20px_60px_rgba(0,0,0,0.9)] cursor-pointer"
                >
                  {/* Full-bleed photography */}
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    draggable={false}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Cinematic gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-black/30 group-hover:via-black/20 transition-colors duration-500" />

                  {/* Top Bar: Number + Category Tag + Minimal Arrow Button */}
                  <div className="absolute top-5 left-5 right-5 sm:top-6 sm:left-6 sm:right-6 flex justify-between items-center z-10 pointer-events-none">
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-accent font-mono text-xs font-bold flex items-center justify-center">
                        {String(currentIndex + 1).padStart(2, '0')}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-neutral-300">
                        {currentProject.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white font-mono text-[10px] uppercase tracking-wider group-hover:border-accent group-hover:text-accent transition-colors">
                        <Eye className="w-3 h-3 text-accent" />
                        VIEW STORY
                      </span>
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-accent text-background flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Bar: Title, Brand Name, and Deliverables */}
                  <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 space-y-2 z-10 text-left pointer-events-none">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-accent">
                      <span className="font-bold tracking-wider uppercase">{currentProject.brand}</span>
                      <span>·</span>
                      <span className="text-neutral-400">{currentProject.year}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-display text-white group-hover:text-accent transition-colors leading-[1.08] tracking-tight">
                      {currentProject.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-300 font-sans max-w-xl line-clamp-2 pt-1 font-normal leading-relaxed">
                      {currentProject.tagline}
                    </p>

                    {/* Metrics badge if present */}
                    {currentProject.metrics && currentProject.metrics[0] && (
                      <div className="pt-2 flex items-center gap-2">
                        <span className="text-[10px] font-mono text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20">
                          {currentProject.metrics[0].value} {currentProject.metrics[0].label}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Side Peek / Previous Card (Desktop & Tablet) */}
              <div
                onClick={handlePrev}
                className="hidden lg:block absolute -left-[280px] w-[260px] h-[440px] rounded-2xl overflow-hidden border border-white/[0.05] bg-[#101010] opacity-40 hover:opacity-75 transition-all duration-300 cursor-pointer pointer-events-auto"
                title="Previous Project"
              >
                <img
                  src={projects[(currentIndex - 1 + total) % total].image}
                  alt="Previous"
                  className="w-full h-full object-cover filter grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block truncate">
                    {projects[(currentIndex - 1 + total) % total].brand}
                  </span>
                  <h4 className="text-xs font-bold font-display text-white truncate">
                    {projects[(currentIndex - 1 + total) % total].title}
                  </h4>
                </div>
              </div>

              {/* Side Peek / Next Card (Desktop & Tablet) */}
              <div
                onClick={handleNext}
                className="hidden lg:block absolute -right-[280px] w-[260px] h-[440px] rounded-2xl overflow-hidden border border-white/[0.05] bg-[#101010] opacity-40 hover:opacity-75 transition-all duration-300 cursor-pointer pointer-events-auto"
                title="Next Project"
              >
                <img
                  src={projects[(currentIndex + 1) % total].image}
                  alt="Next"
                  className="w-full h-full object-cover filter grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block truncate">
                    {projects[(currentIndex + 1) % total].brand}
                  </span>
                  <h4 className="text-xs font-bold font-display text-white truncate">
                    {projects[(currentIndex + 1) % total].title}
                  </h4>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Thumbnail Filmstrip Quick Navigation */}
        <div className="pt-2 flex items-center justify-center gap-2 sm:gap-2.5 overflow-x-auto py-2 scrollbar-none max-w-full">
          {projects.map((proj, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={proj.id}
                onClick={() => handleCardClick(idx, proj)}
                aria-label={`Jump to project ${idx + 1}: ${proj.title}`}
                className={`group relative rounded-xl overflow-hidden transition-all duration-300 shrink-0 ${
                  isSelected
                    ? 'w-16 sm:w-20 h-10 sm:h-12 border-2 border-accent shadow-[0_0_15px_rgba(204,255,0,0.3)]'
                    : 'w-10 sm:w-12 h-10 sm:h-12 border border-white/10 opacity-50 hover:opacity-100 hover:border-white/30'
                }`}
              >
                <img
                  src={proj.image}
                  alt={proj.brand}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                <span className="absolute bottom-1 right-1 text-[8px] font-mono font-bold text-white bg-black/70 px-1 rounded">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </button>
            );
          })}
        </div>

        {/* Mobile Swipe Guidance Note */}
        <div className="flex sm:hidden justify-center items-center gap-2 text-[10px] font-mono text-neutral-500">
          <ArrowLeft className="w-3 h-3 text-accent animate-pulse" />
          <span>Swipe left or right to explore projects</span>
          <ArrowRight className="w-3 h-3 text-accent animate-pulse" />
        </div>

      </div>
    </section>
  );
};
