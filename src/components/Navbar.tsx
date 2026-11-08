import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { SocialLinks } from './SocialLinks';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#works', id: 'works' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 sm:py-3.5 bg-[#080808]/90 backdrop-blur-md border-b border-white/[0.06] shadow-xl'
            : 'py-4 sm:py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Wordmark - strictly AKASH */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="group flex items-baseline gap-1.5 text-off-white hover:text-accent transition-colors"
          >
            <span className="text-xl sm:text-2xl font-black font-display tracking-tight text-white group-hover:text-accent transition-colors">
              AKASH
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative text-[11px] tracking-[0.16em] uppercase font-mono transition-colors py-1 ${
                    isActive ? 'text-accent font-semibold' : 'text-neutral-400 hover:text-off-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/8801537272406?text=Hi%20Akash%2C%20I%20would%20like%20to%20discuss%20a%20visual%20collaboration"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-off-white text-background text-[11px] font-mono font-bold tracking-[0.14em] uppercase overflow-hidden transition-all duration-300 hover:bg-accent hover:shadow-[0_0_20px_rgba(204,255,0,0.35)] active:scale-95"
            >
              <span>LET'S COLLABORATE</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 text-off-white hover:border-accent hover:text-accent transition-colors shrink-0"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 pt-24 md:hidden overflow-y-auto"
          >
            <div className="space-y-6">
              <div className="text-[10px] font-mono tracking-[0.2em] text-neutral-500 uppercase">
                // MENU
              </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * index }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-off-white hover:text-accent transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-600" />
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10 mt-auto">
              <a
                href="https://wa.me/8801537272406?text=Hi%20Akash%2C%20I%20would%20like%20to%20discuss%20a%20visual%20collaboration"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-accent text-background font-mono font-bold tracking-wider uppercase text-xs shadow-lg"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>CHAT ON WHATSAPP</span>
              </a>

              {/* Mobile Social Links Icon-only Row */}
              <div className="pt-2">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block pb-2">
                  SOCIAL CHANNELS
                </span>
                <SocialLinks className="gap-2 justify-center" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
