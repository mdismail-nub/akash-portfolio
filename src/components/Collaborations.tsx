import React, { useState } from 'react';
import { restaurantBrands, consumerBrands } from '../data/brands';
import { BrandItem } from '../types';

export const Collaborations: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'restaurants' | 'consumer'>('all');

  return (
    <section id="collaborations" className="relative py-20 sm:py-28 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 border-b border-white/[0.06] pb-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-accent uppercase">
              // 05 · TRUSTED COLLABORATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-display tracking-tight text-off-white">
              Good Stories Bring <br className="hidden sm:inline" />
              <span className="text-neutral-400">Great Brands Together.</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
              Akash has partnered with over 200 restaurants, food ventures, and consumer brands across Bangladesh.
            </p>
          </div>

          {/* Clean Segmented Control */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/[0.08] max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-off-white text-background font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All ({restaurantBrands.length + consumerBrands.length})
            </button>
            <button
              onClick={() => setActiveTab('restaurants')}
              className={`px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === 'restaurants'
                  ? 'bg-off-white text-background font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Restaurants ({restaurantBrands.length})
            </button>
            <button
              onClick={() => setActiveTab('consumer')}
              className={`px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === 'consumer'
                  ? 'bg-off-white text-background font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Consumer ({consumerBrands.length})
            </button>
          </div>
        </div>

        {/* Marquee Row 1: Restaurants */}
        {(activeTab === 'all' || activeTab === 'restaurants') && (
          <div className="space-y-2.5">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
              RESTAURANTS & HOSPITALITY
            </div>
            <div className="relative w-full overflow-hidden py-1 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <div className="flex w-max gap-3 sm:gap-4 animate-marquee hover:[animation-play-state:paused]">
                {[...restaurantBrands, ...restaurantBrands].map((brand, idx) => (
                  <BrandPill key={`${brand.name}-${idx}`} brand={brand} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Marquee Row 2: Consumer Brands */}
        {(activeTab === 'all' || activeTab === 'consumer') && (
          <div className="space-y-2.5 pt-2">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
              CONSUMER & LIFESTYLE BRANDS
            </div>
            <div className="relative w-full overflow-hidden py-1 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <div className="flex w-max gap-3 sm:gap-4 animate-marquee-reverse hover:[animation-play-state:paused]">
                {[...consumerBrands, ...consumerBrands, ...consumerBrands].map((brand, idx) => (
                  <BrandPill key={`${brand.name}-${idx}`} brand={brand} />
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

interface BrandPillProps {
  brand: BrandItem;
}

const BrandPill: React.FC<BrandPillProps> = ({ brand }) => {
  return (
    <div className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-accent/40 hover:bg-white/[0.05] transition-all duration-300 cursor-pointer min-w-[170px] sm:min-w-[200px]">
      <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-accent transition-colors shrink-0" />
      <div className="min-w-0">
        <h4 className="text-xs sm:text-sm font-display font-bold text-neutral-300 group-hover:text-off-white transition-colors truncate">
          {brand.name}
        </h4>
        <p className="text-[9px] sm:text-[10px] font-mono text-neutral-500 group-hover:text-neutral-400 truncate">
          {brand.tagline}
        </p>
      </div>
    </div>
  );
};
