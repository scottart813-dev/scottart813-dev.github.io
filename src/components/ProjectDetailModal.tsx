import { useState } from 'react';
import { motion } from 'motion/react';
import { X, Calendar, User, Briefcase, LayoutGrid, CheckCircle2, Copy } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  if (!project) return null;

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const springTransition = {
    type: "spring",
    stiffness: 400,
    damping: 15
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 overflow-hidden">
      {/* Immersive Backdrop Blur Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#06041c]/90 cursor-pointer"
      />

      {/* Main Dialog Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 15 }}
        transition={springTransition}
        className="bg-[#0c0d2b] border-4 border-black w-full max-w-5xl h-full max-h-[90vh] flex flex-col relative overflow-hidden shadow-[8px_8px_0px_0px_#000000] z-10"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b-4 border-black flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 bg-brand-cyan text-black font-mono text-[9px] tracking-wider font-bold uppercase border-2 border-black shadow-[2px_2px_0px_0px_#000000]">
              {project.categoryLabel}
            </span>
            <span className="font-mono text-white/30 text-xs">/</span>
            <span className="font-mono text-brand-fuchsia text-[10px] font-bold tracking-wider uppercase">{project.client}</span>
          </div>
          
          <motion.button
            id="close-modal-btn"
            onClick={onClose}
            className="p-1.5 bg-brand-fuchsia border-2 border-black text-black hover:bg-white shadow-[2px_2px_0px_0px_#000000] cursor-pointer"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-5 h-5 stroke-[3]" />
          </motion.button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 text-left">
            
            {/* Left Column: Visual Assets & Tech Specs */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* Main Large Render Image */}
              <div className="aspect-video border-4 border-black bg-indigo-950 shadow-[4px_4px_0px_0px_#000000] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Color Swatches and Palette Spec */}
              <div className="bg-black/30 p-5 border-4 border-black shadow-[4px_4px_0px_0px_#000000]">
                <h4 className="font-mono text-[10px] font-bold tracking-wider text-brand-cyan uppercase mb-4 flex items-center gap-1.5">
                  <LayoutGrid className="w-4 h-4 text-brand-cyan" />
                  <span>Color Space Specification</span>
                </h4>
                
                <div className="grid grid-cols-4 gap-3">
                  {project.colorPalette.map((hex) => (
                    <motion.button
                      id={`color-swatch-${hex}`}
                      key={hex}
                      onClick={() => copyToClipboard(hex)}
                      className="flex flex-col gap-2 items-center p-2 bg-[#0c0d2b] border-2 border-black shadow-[2px_2px_0px_0px_#000000] hover:shadow-[3px_3px_0px_0px_var(--color-brand-fuchsia)] text-center cursor-pointer"
                      whileHover={{ scale: 1.08, rotate: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div
                        style={{ backgroundColor: hex }}
                        className="w-full aspect-square border-2 border-black shadow-inner"
                      />
                      <div className="flex items-center gap-1 text-[9px] font-mono font-bold text-white/70">
                        <span>{hex}</span>
                        <Copy className="w-2.5 h-2.5 text-brand-cyan" />
                      </div>
                    </motion.button>
                  ))}
                </div>

                {copiedHex && (
                  <div className="mt-3 text-[10px] font-mono font-bold text-center text-black bg-brand-cyan py-1.5 border-2 border-black shadow-[2px_2px_0px_0px_#000000] animate-fade-in">
                    HEX {copiedHex} COPIED!
                  </div>
                )}
              </div>

              {/* Tools list */}
              <div>
                <h4 className="font-mono text-[10px] font-bold uppercase tracking-wider text-white/50 mb-3">
                  Production Software
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-black text-brand-cyan font-mono text-[10px] font-bold uppercase border-2 border-black shadow-[2px_2px_0px_0px_#000000]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Creative Brief & Content */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                {/* Main Creative Title */}
                <h3 className="font-display text-sm sm:text-base md:text-lg font-normal text-white mb-6 uppercase leading-relaxed">
                  {project.title}
                </h3>

                {/* Scope & Role Metadata Grid */}
                <div className="grid grid-cols-2 gap-4 border-b-4 border-black pb-6 mb-6">
                  <div className="flex items-start gap-2.5">
                    <User className="w-4 h-4 text-brand-cyan mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-mono text-[9px] text-white/40 block font-bold uppercase">Role</span>
                      <span className="text-xs text-white/90 font-bold uppercase font-mono">{project.role}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Calendar className="w-4 h-4 text-brand-cyan mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-mono text-[9px] text-white/40 block font-bold uppercase">Year</span>
                      <span className="text-xs text-white/90 font-bold uppercase font-mono">{project.year}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Briefcase className="w-4 h-4 text-brand-cyan mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-mono text-[9px] text-white/40 block font-bold uppercase">Client</span>
                      <span className="text-xs text-white/90 font-bold uppercase font-mono">{project.client}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-mono text-[9px] text-white/40 block font-bold uppercase">Deliverable</span>
                      <span className="text-xs text-white/90 font-bold uppercase font-mono">FINISHED ASSETS</span>
                    </div>
                  </div>
                </div>

                {/* Narrative Sections */}
                <div className="space-y-6">
                  <div>
                    <h5 className="font-mono text-[10px] uppercase tracking-wider text-brand-fuchsia font-bold mb-2">
                      [ CREATIVE CHALLENGE & BRIEF ]
                    </h5>
                    <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-sans">
                      {project.longDescription}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-mono text-[10px] uppercase tracking-wider text-brand-fuchsia font-bold mb-2">
                      [ DELIVERABLE CORE VALUE ]
                    </h5>
                    <ul className="space-y-2.5 text-white/80 text-xs sm:text-sm font-sans">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-cyan font-bold">•</span>
                        <span>Asymmetric grid alignments to draw instant focal hierarchy.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-cyan font-bold">•</span>
                        <span>Carefully balanced negative space for strong legibility.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-cyan font-bold">•</span>
                        <span>Custom pixel layouts crafted at crisp vector alignments.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Closing footer action */}
              <div className="mt-8 pt-6 border-t-4 border-black flex justify-end">
                <motion.a
                  id="modal-inquire-btn"
                  href={`mailto:scottart813@gmail.com?subject=Inquiry regarding: ${project.title}`}
                  className="px-5 py-3 bg-brand-fuchsia text-black font-display text-[10px] uppercase font-bold border-4 border-black shadow-[4px_4px_0px_0px_#000000] text-center"
                  whileHover={{ scale: 1.05, rotate: -2, y: -2, shadow: "6px 6px 0px 0px #000000" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Inquire Designs
                </motion.a>
              </div>
            </div>
            
          </div>
        </div>
      </motion.div>
    </div>
  );
}
