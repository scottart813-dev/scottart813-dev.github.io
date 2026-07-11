import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, ArrowUpRight, Palette } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

interface GalleryProps {
  onSelectProject: (project: Project) => void;
}

type FilterCategory = 'all' | 'branding' | 'editorial' | 'concept' | 'uiux';

export default function Gallery({ onSelectProject }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  const filterTabs = [
    { id: 'all', label: 'All Works' },
    { id: 'branding', label: 'Brand Identity' },
    { id: 'editorial', label: 'Poster & Editorial' },
    { id: 'concept', label: 'Concept & Digital Art' },
    { id: 'uiux', label: 'UI/UX Interactive' }
  ];

  const springTransition = {
    type: "spring",
    stiffness: 400,
    damping: 15
  };

  return (
    <section id="gallery-section" className="py-24 bg-studio-dark relative">
      {/* Background divider decorative lines */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-black" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-3 text-brand-cyan font-mono text-xs uppercase tracking-wider font-bold">
              <Layers className="w-4 h-4 text-brand-cyan" />
              <span>[ VISUAL_DATABASE ]</span>
            </div>
            <h2 className="font-display text-lg sm:text-2xl md:text-3xl font-normal text-white tracking-wide uppercase leading-normal">
              SELECTED CREATIONS
            </h2>
          </div>
          <p className="text-white/60 text-xs sm:text-sm max-w-sm mt-4 md:mt-0 leading-relaxed font-mono text-left md:text-right">
            SELECT A PROJECT RECORD TO INSPECT STRUCTURAL GRIDS, COLOR PALETTES, AND CREATIVE SCHEMES.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-3 border-b-4 border-black pb-8 mb-12 overflow-x-auto scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <motion.button
                id={`filter-tab-${tab.id}`}
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as FilterCategory)}
                className={`px-4 py-2.5 text-xs font-mono font-bold uppercase border-4 border-black cursor-pointer ${
                  isActive
                    ? 'bg-brand-cyan text-black shadow-[3px_3px_0px_0px_#000000]'
                    : 'bg-[#0c0d2b] text-white hover:bg-black shadow-[3px_3px_0px_0px_var(--color-brand-fuchsia)]'
                }`}
                whileHover={{ scale: 1.08, rotate: isActive ? -2 : 3, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={springTransition}
              >
                {tab.label}
              </motion.button>
            );
          })}
        </div>

        {/* Dynamic Project Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                id={`project-card-${project.id}`}
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={springTransition}
                whileHover={{ scale: 1.04, rotate: -2, y: -4 }}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer flex flex-col bg-[#0c0d2b] border-4 border-black shadow-[6px_6px_0px_0px_#000000] hover:shadow-[8px_8px_0px_0px_var(--color-brand-cyan)] transition-all duration-300"
              >
                {/* Thumbnail Image Wrapper */}
                <div className="aspect-video relative overflow-hidden border-b-4 border-black bg-indigo-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category tag overlay */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black text-brand-cyan text-[9px] font-mono font-bold tracking-widest uppercase border-2 border-black shadow-[2px_2px_0px_0px_#000000]">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Dark mask overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-brand-fuchsia border-2 border-black flex items-center justify-center text-black transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 shadow-[3px_3px_0px_0px_#000000]">
                      <ArrowUpRight className="w-6 h-6 stroke-[3]" />
                    </div>
                  </div>
                </div>

                {/* Card details */}
                <div className="p-6 flex-1 flex flex-col justify-between text-left">
                  <div>
                    {/* Tags and Metadata */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="font-mono text-[9px] uppercase tracking-wider text-white/70 bg-black px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000000]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-sm sm:text-base font-normal text-white mb-3 group-hover:text-brand-cyan transition-colors">
                      {project.title.toUpperCase()}
                    </h3>

                    {/* Short Description */}
                    <p className="text-white/70 text-xs leading-relaxed mb-6 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer palette and tech specs */}
                  <div className="flex items-center justify-between pt-4 border-t-2 border-black">
                    <div className="flex items-center gap-1.5">
                      <Palette className="w-3.5 h-3.5 text-white/40" />
                      <div className="flex gap-1.5">
                        {project.colorPalette.map((hex, index) => (
                          <div
                            key={index}
                            style={{ backgroundColor: hex }}
                            className="w-3.5 h-3.5 border border-black shadow-sm"
                            title={hex}
                          />
                        ))}
                      </div>
                    </div>

                    <span className="font-mono text-[9px] font-bold text-white/50 uppercase tracking-widest">
                      {project.year} // {project.client.toUpperCase().split(' ')[0]}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
