import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    { title: '200+ Brand Collaborations', desc: 'Promotional visual campaigns across Bangladesh.' },
    { title: '2+ Years Experience', desc: 'Commercial videography, food & product styling.' },
    { title: 'Culinary Specialist', desc: 'Appetizing lighting, sizzle, steam & texture captures.' },
    { title: 'High-Retention Creative', desc: 'Storyboards engineered for high digital engagement.' },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-14">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-accent uppercase border-b border-white/[0.06] pb-5">
          <span>// 08 · ABOUT AKASH · BEHIND THE LENS</span>
        </div>

        {/* Main Editorial Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 relative max-w-[360px] sm:max-w-[420px] mx-auto lg:max-w-none w-full">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#121212] aspect-[4/5] shadow-2xl">
              <img
                src="/images/akash-portrait.jpg"
                alt="Akash - Visual Storyteller"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 space-y-0.5 text-left">
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest">
                  DIRECTOR & CREATOR
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                  Akash (@kakashi_is_eating)
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-display tracking-tight text-off-white leading-[1.1]">
                Behind Every Frame, <br />
                <span className="text-neutral-400">There's a Story.</span>
              </h2>
            </div>

            {/* Core Client Copy */}
            <div className="space-y-3.5 text-sm sm:text-base text-neutral-300 font-sans leading-relaxed border-l border-accent/40 pl-4 sm:pl-5">
              <p>
                I'm <strong className="text-white font-semibold">Akash</strong>, a content creator, brand promoter, cinematographer, and product photographer passionate about transforming ideas into visual experiences.
              </p>
              <p>
                Over the past two years, I've had the opportunity to collaborate with more than <strong className="text-white font-semibold">200 brands, restaurants, and businesses</strong>.
              </p>
              <p>
                My approach combines creative storytelling, cinematic visuals, and a strong understanding of how brands connect with people.
              </p>
              <p className="text-off-white font-medium">
                For me, every project is more than just content. It's an opportunity to create something memorable.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {highlights.map((h, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-0.5">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                    <h4 className="text-xs sm:text-sm font-bold font-display text-white">{h.title}</h4>
                  </div>
                  <p className="text-[11px] text-neutral-400 font-sans pl-5">{h.desc}</p>
                </div>
              ))}
            </div>

            {/* Inquire link */}
            <div className="pt-1">
              <a
                href="https://wa.me/8801537272406?text=Hi%20Akash%2C%20I%20would%20like%20to%20discuss%20a%20visual%20collaboration"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent hover:text-white transition-colors"
              >
                <span>CONNECT ON WHATSAPP</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
