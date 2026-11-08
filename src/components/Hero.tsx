import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Film, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { projects } from '../data/projects';

interface HeroProps {
  onExploreClick: () => void;
  onCollaborateClick: () => void;
  onSelectProject?: (project: Project) => void;
}

interface HeroGalleryItem {
  id: string;
  projectId: string;
  title: string;
  brand: string;
  category: string;
  image: string;
  year: string;
}

const HERO_GALLERY_ITEMS: HeroGalleryItem[] = [
  {
    id: 'woodhouse',
    projectId: 'woodhouse-grill',
    title: 'Tomahawk & Coastal Feast',
    brand: 'Woodhouse Grill',
    category: 'Restaurant & Food',
    image: '/images/woodhouse-grill-seafood.jpg',
    year: '2026',
  },
  {
    id: 'steak-marrow',
    projectId: 'steak-and-marrow-brisket',
    title: 'Smoked Brisket Symphony',
    brand: 'Steak & Marrow',
    category: 'Food Cinematography',
    image: '/images/smoked-beef-brisket.jpg',
    year: '2026',
  },
  {
    id: 'nivora',
    projectId: 'nivora-creameries',
    title: 'Mango Cream Swirl',
    brand: 'NIVORA',
    category: 'Product Photography',
    image: '/images/nivora-mango-dessert.jpg',
    year: '2026',
  },
  {
    id: 'nori',
    projectId: 'sushi-asian-fusion',
    title: 'Artisan Sushi & Asian Feast',
    brand: 'Nori Asian Kitchen',
    category: 'Cinematography',
    image: '/images/sushi-asian-feast.jpg',
    year: '2026',
  },
  {
    id: 'nongor',
    projectId: 'nongor-outdoor',
    title: 'Alfresco Dining & Grills',
    brand: 'Nongor',
    category: 'Brand Promotion',
    image: '/images/nongor-outdoor-feast.jpg',
    year: '2026',
  },
];

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onCollaborateClick,
  onSelectProject,
}) => {
  // Default active featured card is index 0
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (item: HeroGalleryItem) => {
    if (onSelectProject) {
      const matched = projects.find((p) => p.id === item.projectId);
      if (matched) {
        onSelectProject(matched);
        return;
      }
    }
    onExploreClick();
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-32 pb-8 px-4 sm:px-6 md:px-12 bg-[#080808] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[700px] h-[350px] sm:h-[450px] bg-accent/[0.025] rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container: Text-First + Expandable Image Gallery */}
      <div className="relative z-10 max-w-6xl mx-auto w-full my-auto flex flex-col items-center text-center space-y-8 sm:space-y-10 py-6">
        
        {/* 1. Professional Identity Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.22em] uppercase text-neutral-400 break-words">
            CONTENT CREATOR · CINEMATOGRAPHER · BRAND PROMOTER
          </span>
        </motion.div>

        {/* 2. Large Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black font-display tracking-tight text-off-white leading-[1.06]">
            Turning Brands <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-off-white via-white to-neutral-400">
              Into Visual Stories.
            </span>
          </h1>
        </motion.div>

        {/* 3. Short Supporting Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl mx-auto font-sans font-normal leading-relaxed"
        >
          I create cinematic content and visual experiences that help brands connect with people.
        </motion.p>

        {/* 4. EXPANDABLE PORTFOLIO IMAGE GALLERY (Desktop & Tablet Horizontal Stack / Mobile Swipe) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="w-full pt-2 sm:pt-4"
        >
          {/* Desktop & Tablet Expandable Horizontal Gallery */}
          <div
            onMouseLeave={() => setActiveIndex(0)}
            className="hidden md:flex items-stretch gap-3 lg:gap-3.5 h-[360px] lg:h-[400px] w-full"
          >
            {HERO_GALLERY_ITEMS.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => handleCardClick(item)}
                  style={{
                    flex: isActive ? '3.5' : '1',
                    transition: 'flex 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-[#121212] border transition-all duration-500 shadow-xl ${
                    isActive ? 'border-accent/40 shadow-2xl' : 'border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  {/* Photo */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Overlays */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isActive
                        ? 'bg-gradient-to-t from-black/90 via-black/30 to-black/30 opacity-100'
                        : 'bg-black/50 group-hover:bg-black/30 opacity-90'
                    }`}
                  />

                  {/* Inactive State Subtle Bottom Brand Label */}
                  {!isActive && (
                    <div className="absolute bottom-4 inset-x-2 text-center pointer-events-none transition-opacity duration-300">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-300 truncate block px-1 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/5">
                        {item.brand}
                      </span>
                    </div>
                  )}

                  {/* Active State Rich Content Reveal */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between z-10 text-left pointer-events-none"
                      >
                        {/* Top Metadata & Action Pill */}
                        <div className="flex justify-between items-center">
                          <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-wider text-accent font-semibold">
                            {item.category}
                          </span>

                          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-background font-mono text-[10px] font-bold uppercase tracking-wider shadow-lg">
                            <span>EXPLORE</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        {/* Bottom Title & Brand */}
                        <div className="space-y-1">
                          <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-300 block">
                            {item.brand} · {item.year}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold font-display text-white leading-snug">
                            {item.title}
                          </h3>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Mobile Touch-Friendly Swipe Carousel */}
          <div className="md:hidden flex gap-3 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none max-w-full">
            {HERO_GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => handleCardClick(item)}
                className="w-[78vw] max-w-[320px] aspect-[4/3] shrink-0 snap-center rounded-2xl overflow-hidden relative border border-white/10 bg-[#121212] cursor-pointer shadow-lg active:scale-[0.98] transition-transform"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="absolute top-3 left-3 right-3 flex justify-between items-center text-[9px] font-mono">
                  <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-accent uppercase tracking-wider font-semibold">
                    {item.category}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-accent text-background flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-left space-y-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-300 block">
                    {item.brand}
                  </span>
                  <h3 className="text-base font-bold font-display text-white leading-snug truncate">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 5. Portfolio and Collaboration CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1"
        >
          <button
            onClick={onExploreClick}
            className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-accent text-background font-mono text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(204,255,0,0.35)] active:scale-95"
          >
            <span>EXPLORE MY WORK</span>
            <Film className="w-3.5 h-3.5 transition-transform group-hover:rotate-12" />
          </button>

          <button
            onClick={onCollaborateClick}
            className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-off-white border border-white/10 font-mono text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-300 hover:border-accent hover:text-accent active:scale-95"
          >
            <span>LET'S COLLABORATE</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* 6. Small Credibility Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex items-center justify-center gap-2 text-[11px] font-mono text-neutral-500"
        >
          <span className="text-accent font-semibold">200+</span>
          <span>Brands Collaborated Across Bangladesh · Dhaka & Beyond</span>
        </motion.div>

      </div>

      {/* 7. Natural Transition Indicator into Content After the Hero */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex justify-between items-center pt-4 border-t border-white/[0.06]">
        <div className="text-[10px] sm:text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
          SELECTED WORK / 200+ BRAND COLLABORATIONS
        </div>

        <a
          href="#stats"
          className="group flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] text-neutral-400 hover:text-accent transition-colors"
        >
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown className="w-3.5 h-3.5 text-accent transition-transform group-hover:translate-y-0.5" />
        </a>
      </div>
    </section>
  );
};
