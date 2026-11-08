import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const next = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-[#080808] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 border-b border-white/[0.06] pb-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-accent uppercase">
              // 10 · COLLABORATION FEEDBACK
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-display tracking-tight text-off-white">
              Good Collaborations Leave <br className="hidden sm:inline" />
              <span className="text-neutral-400">Lasting Impressions.</span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.02] hover:border-accent hover:text-accent text-white flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.02] hover:border-accent hover:text-accent text-white flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Box */}
        <div className="relative max-w-4xl mx-auto p-6 sm:p-10 rounded-2xl bg-[#121212] border border-white/[0.06]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <p className="text-lg sm:text-xl md:text-2xl font-display font-medium text-white leading-relaxed">
                "{activeTestimonial.quote}"
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-5 border-t border-white/[0.06]">
                <div className="space-y-0.5">
                  <h4 className="text-sm sm:text-base font-bold font-display text-white">
                    {activeTestimonial.author}
                  </h4>
                  <p className="text-xs font-mono text-neutral-400">
                    {activeTestimonial.role} · <span className="text-accent">{activeTestimonial.brand}</span>
                  </p>
                </div>

                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                  {activeTestimonial.category}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="flex justify-center gap-1.5 pt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-6 bg-accent' : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
