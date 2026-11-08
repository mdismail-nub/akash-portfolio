import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { services } from '../data/services';

export const Services: React.FC = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const activeService = services[activeServiceIndex];

  return (
    <section id="services" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-[#0a0a0a] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 border-b border-white/[0.06] pb-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-accent uppercase">
              // 07 · THE CRAFT · SERVICES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-display tracking-tight text-off-white">
              Different Mediums. <br className="hidden sm:inline" />
              <span className="text-neutral-400">One Creative Vision.</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
              Tailored visual production services for restaurants, consumer brands, and modern digital platforms.
            </p>
          </div>

          <div className="text-[10px] sm:text-[11px] font-mono text-neutral-400 uppercase tracking-widest bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/[0.08]">
            05 Disciplines
          </div>
        </div>

        {/* Interactive Services Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: Service Items */}
          <div className="lg:col-span-7 space-y-2.5">
            {services.map((service, index) => {
              const isActive = activeServiceIndex === index;
              return (
                <div
                  key={service.number}
                  onMouseEnter={() => setActiveServiceIndex(index)}
                  onClick={() => setActiveServiceIndex(index)}
                  className={`p-4 sm:p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#141414] border-accent/40 shadow-lg'
                      : 'bg-transparent border-white/[0.05] hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-baseline gap-3">
                      <span className={`text-xs font-mono font-bold tracking-widest ${isActive ? 'text-accent' : 'text-neutral-600'}`}>
                        {service.number}
                      </span>
                      <h3 className={`text-base sm:text-lg md:text-xl font-display font-bold transition-colors ${isActive ? 'text-white' : 'text-neutral-400'}`}>
                        {service.title}
                      </h3>
                    </div>

                    <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors shrink-0 ${isActive ? 'bg-accent text-background' : 'text-neutral-500'}`}>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Expanded Content details */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pt-2.5 space-y-2 mt-2 border-t border-white/[0.06]"
                      >
                        <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                          {service.shortDesc}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                          {service.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-[11px] font-mono text-neutral-300">
                              <Check className="w-3 h-3 text-accent shrink-0" />
                              <span className="truncate">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Preview */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-[#141414] shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.number}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="relative w-full h-full"
                >
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 space-y-1">
                    <span className="text-[10px] font-mono text-accent uppercase tracking-widest block">
                      {activeService.number} // CAPABILITY
                    </span>
                    <h4 className="text-lg font-bold font-display text-white">
                      {activeService.title}
                    </h4>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
