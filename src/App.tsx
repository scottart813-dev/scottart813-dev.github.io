import { useState } from 'react';
import { AnimatePresence } from 'motion/react';

import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import ProjectDetailModal from './components/ProjectDetailModal';
import Contact from './components/Contact';

import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    // Lock background scroll when modal is active
    document.body.style.overflow = 'hidden';
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    // Restore background scroll
    document.body.style.overflow = '';
  };

  return (
    <div className="relative min-h-screen bg-studio-dark text-zinc-100 flex flex-col font-sans selection:bg-brand-cyan selection:text-indigo-950">
      {/* Structural fine grids and line dividers */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* Main Layout Header */}
      <Header />

      {/* Primary layout body */}
      <main className="flex-grow">
        {/* Intro Section - Displays Name, coordinates, text details alongside visual avatar */}
        <Hero />

        {/* Selected Projects Gallery */}
        <Gallery onSelectProject={handleSelectProject} />

        {/* Detailed direct contact panel */}
        <Contact />
      </main>

      {/* Detail Showcase Lightroom Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={handleCloseProject}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
