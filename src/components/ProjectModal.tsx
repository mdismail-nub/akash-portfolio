import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Check } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onContactClick }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  const handleWhatsAppInquiry = () => {
    if (!project) return;
    const msg = `Hello Akash! I'm interested in discussing a collaboration similar to your "${project.title}" project for ${project.brand}.`;
    const url = `https://wa.me/8801537272406?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-3xl bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-2xl my-auto text-off-white"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/[0.08] bg-[#0d0d0d]">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-[9px] sm:text-[10px] uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="text-[11px] font-mono text-neutral-400">
                  {project.year}
                </span>
              </div>

              <button
                onClick={onClose}
                aria-label="Close modal"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-accent hover:text-background flex items-center justify-center text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="max-h-[75vh] overflow-y-auto p-4 sm:p-7 space-y-6">
              
              {/* Header Title */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
                  CLIENT: <span className="text-white font-semibold">{project.brand}</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-display text-white leading-tight">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                  "{project.tagline}"
                </p>
              </div>

              {/* Main Visual Feature */}
              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900 aspect-[16/10]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Story Description & Deliverables */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-1">
                <div className="md:col-span-7 space-y-2">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                    // CREATIVE DIRECTION
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                <div className="md:col-span-5 space-y-2">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                    // DELIVERABLES
                  </h4>
                  <ul className="space-y-1.5">
                    {project.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-neutral-300 font-mono">
                        <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Banner inside Modal */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-center gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onContactClick();
                  }}
                  className="text-xs font-mono text-neutral-400 hover:text-white transition-colors"
                >
                  Fill Inquiry Form →
                </button>
                <button
                  onClick={handleWhatsAppInquiry}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-accent text-background font-mono text-xs font-bold tracking-wider uppercase transition-all hover:bg-white"
                >
                  <span>INQUIRE ON WHATSAPP</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
