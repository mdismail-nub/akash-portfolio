import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, Mail } from 'lucide-react';
import { SocialLinks } from './SocialLinks';

export const Footer: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Dhaka',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const email = 'ajakash594@gmail.com';
  const whatsappNumber = '8801537272406';
  const whatsappDisplay = '+880 1537-272406';

  return (
    <footer className="relative bg-[#050505] text-off-white border-t border-white/[0.06] pt-14 pb-8 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Top Tier: Clean Wordmark - Strictly AKASH */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-5 border-b border-white/[0.06] pb-8">
          <div className="space-y-1.5">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-white leading-none">
              AKASH
            </h2>
            <p className="text-xs sm:text-sm font-mono text-neutral-400">
              Creating Visual Stories. Building Brand Connections.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] hover:bg-accent text-neutral-300 hover:text-background border border-white/10 transition-colors font-mono text-xs uppercase tracking-wider"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Middle Tier: Info Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-xs font-mono items-start">
          
          {/* Col 1: Location & Time */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-neutral-500 uppercase tracking-widest block text-[10px]">
              // LOCATION & TIME
            </span>
            <p className="text-neutral-300 font-sans text-sm">Dhaka, Bangladesh</p>
            <p className="text-neutral-500 text-[11px]">
              DHAKA TIME: <span className="text-accent">{time || '06:00 PM'} (GMT+6)</span>
            </p>
            <p className="text-neutral-500 text-[11px] pt-1 font-sans">
              Available for brand shoots & campaigns nationwide.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-neutral-500 uppercase tracking-widest block text-[10px]">
              // NAVIGATION
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-neutral-400">
              <a href="#hero" className="hover:text-accent transition-colors">Home</a>
              <a href="#works" className="hover:text-accent transition-colors">Selected Work</a>
              <a href="#services" className="hover:text-accent transition-colors">Services</a>
              <a href="#about" className="hover:text-accent transition-colors">About</a>
              <a href="#process" className="hover:text-accent transition-colors">Process</a>
              <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
            </div>
            
            <div className="pt-2 flex flex-col space-y-1.5">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366] transition-colors flex items-center gap-1.5 text-neutral-300"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp: {whatsappDisplay}</span>
              </a>
              <a
                href={`mailto:${email}`}
                className="hover:text-accent transition-colors flex items-center gap-1.5 text-neutral-300"
              >
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>{email}</span>
              </a>
            </div>
          </div>

          {/* Col 3: Social Media Icon-Only UI */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-neutral-500 uppercase tracking-widest block text-[10px]">
              // SOCIAL CHANNELS
            </span>
            <p className="text-neutral-400 text-[11px] font-sans pb-1">
              Connect on Instagram, Facebook, TikTok & YouTube:
            </p>
            <SocialLinks className="gap-2 sm:gap-2.5" />
          </div>

        </div>

        {/* Bottom Tier: Copyright */}
        <div className="pt-5 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] sm:text-[11px] font-mono text-neutral-600">
          <div>© {new Date().getFullYear()} AKASH. All visual rights reserved.</div>
          <div>Every Brand Has a Story. I Make It Visual.</div>
        </div>

      </div>
    </footer>
  );
};
