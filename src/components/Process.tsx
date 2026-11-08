import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { processSteps } from '../data/process';

export const Process: React.FC = () => {
  return (
    <section id="process" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-[#0a0a0a] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 border-b border-white/[0.06] pb-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-accent uppercase">
              // 09 · CREATIVE WORKFLOW & TIMELINE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-display tracking-tight text-off-white">
              From An Idea to a <br className="hidden sm:inline" />
              <span className="text-neutral-400">Visual Story.</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
              A structured 4-step creative production pipeline to deliver scroll-stopping visuals on schedule.
            </p>
          </div>

          <div className="text-[10px] sm:text-[11px] font-mono text-neutral-400 uppercase tracking-widest bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/[0.08]">
            End-to-End Execution
          </div>
        </div>

        {/* 4-Step Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-5 rounded-2xl bg-[#121212] border border-white/[0.06] hover:border-accent/40 transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              {/* Step Number */}
              <div className="flex justify-between items-baseline border-b border-white/[0.06] pb-3">
                <span className="text-xl sm:text-2xl font-black font-display text-accent">
                  {step.number}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                  {step.title}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5">
                <h3 className="text-sm sm:text-base font-bold font-display text-white leading-snug">
                  {step.headline}
                </h3>
                <p className="text-[11px] sm:text-xs text-neutral-400 font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="space-y-1 pt-2 border-t border-white/[0.06]">
                {step.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-[10px] sm:text-[11px] text-neutral-300 font-mono">
                    <Check className="w-3 h-3 text-accent shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
