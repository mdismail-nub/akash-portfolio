import React from 'react';
import { motion } from 'framer-motion';

export const Stats: React.FC = () => {
  const statsList = [
    {
      value: '200+',
      label: 'Brands Collaborated',
      detail: 'Restaurants & consumer brands across Bangladesh.',
    },
    {
      value: '2+',
      label: 'Years Experience',
      detail: 'Professional cinematography, photography & styling.',
    },
    {
      value: 'Multi',
      label: 'Business Sectors',
      detail: 'Hospitality, FMCG, retail & food ventures.',
    },
    {
      value: '100%',
      label: 'Visual Content',
      detail: 'Cinematography, reels & commercial photography.',
    },
  ];

  return (
    <section id="stats" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#0a0a0a] border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pb-6 border-b border-white/[0.06]">
          <div className="space-y-1.5">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-accent uppercase">
              // 04 · THE NUMBERS BEHIND THE STORIES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-display tracking-tight text-off-white">
              Not Just Content. <br className="hidden sm:inline" />
              <span className="text-neutral-400">Over 200 Brand Stories.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
            Every project begins with a strategy to illuminate what makes a brand unique, converting viewers into engaged customers.
          </p>
        </div>

        {/* Minimalist Editorial 4-Column Divider Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x divide-white/[0.08]">
          {statsList.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`flex flex-col justify-between space-y-2.5 ${
                index !== 0 ? 'lg:pl-8' : ''
              } ${index !== statsList.length - 1 ? 'lg:pr-8' : ''}`}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-off-white tracking-tight">
                {stat.value}
              </div>
              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm font-bold font-mono tracking-wider uppercase text-accent">
                  {stat.label}
                </h3>
                <p className="text-[11px] sm:text-xs text-neutral-400 font-sans leading-relaxed">
                  {stat.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
