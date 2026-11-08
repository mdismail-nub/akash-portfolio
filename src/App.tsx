import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Collaborations } from './components/Collaborations';
import { SelectedWorks } from './components/SelectedWorks';
import { Services } from './components/Services';
import { About } from './components/About';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CustomCursor } from './components/CustomCursor';
import { useLenis } from './hooks/useLenis';
import { Project } from './types';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Initialize Lenis smooth scroll
  useLenis();

  // Track active section for navigation indication
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'stats', 'collaborations', 'works', 'services', 'about', 'process', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-off-white relative selection:bg-accent selection:text-background">
      {/* Cinematic 35mm film grain overlay */}
      <div className="film-grain" />

      {/* Custom desktop cursor */}
      <CustomCursor />

      {/* Cinematic Initial Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Floating Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Storytelling Sections */}
      <main>
        {/* Section 03: Hero */}
        <Hero
          onExploreClick={() => scrollToSection('works')}
          onCollaborateClick={() => scrollToSection('contact')}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Section 04: The Numbers Behind the Stories */}
        <Stats />

        {/* Section 05: Trusted Collaborations */}
        <Collaborations />

        {/* Section 06: Selected Works - The Visual Archive */}
        <SelectedWorks onSelectProject={(project) => setSelectedProject(project)} />

        {/* Section 07: The Craft - Services & Capabilities */}
        <Services />

        {/* Section 08: About Akash - Behind the Lens */}
        <About />

        {/* Section 09: Creative Workflow Timeline */}
        <Process />

        {/* Section 10: Testimonials & Endorsements */}
        <Testimonials />

        {/* Section 11: Final Call to Action */}
        <FinalCTA />
      </main>

      {/* Section 12: Footer */}
      <Footer />

      {/* Dedicated Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactClick={() => {
          setSelectedProject(null);
          scrollToSection('contact');
        }}
      />
    </div>
  );
};

export default App;
