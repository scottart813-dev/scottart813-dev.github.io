import { motion } from 'motion/react';
import { Mail, Phone, ExternalLink, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { AVATAR_IMAGE, AVATAR_WAVING_IMAGE } from '../data';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const springTransition = {
    type: "spring",
    stiffness: 400,
    damping: 15
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-grid-pattern overflow-hidden"
    >
      {/* Absolute Pixel Star/Glow Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-6 h-6 bg-brand-cyan/20 border border-brand-cyan animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[15%] w-8 h-8 bg-brand-fuchsia/20 border border-brand-fuchsia animate-pulse"></div>
        <div className="absolute top-[50%] right-[5%] w-4 h-4 bg-white/20 border border-white animate-pulse"></div>
        <div className="absolute top-[20%] right-[30%] w-[40%] h-[40%] bg-indigo-900/40 rounded-none blur-[140px] opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Bio and Text Info */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Availability Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-black border-4 border-black text-brand-cyan font-mono text-[11px] font-bold uppercase tracking-wider mb-6 w-fit shadow-[4px_4px_0px_0px_var(--color-brand-fuchsia)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 bg-brand-cyan"></span>
            </span>
            <span>SCOTT_ART // ONLINE</span>
          </motion.div>

          {/* Designer Name & Brand Title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-normal tracking-wide text-white mb-6 leading-normal sm:leading-relaxed">
              <span className="text-brand-fuchsia">GRAPHIC</span>
              <br />DESIGNER.
            </h1>
          </motion.div>

          {/* Intro with Waving Avatar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 mb-8 max-w-xl sm:max-w-2xl items-center sm:items-start text-left"
          >
            {/* Waving Avatar Image */}
            <div className="relative z-10 w-28 h-28 sm:w-80 sm:h-80 border-0 border-black bg-transparent overflow-hidden flex-shrink-0 -mr-4 sm:-mr-45 sm:-mt-48 -translate-x-28 translate-y-16">
              <img
                src={AVATAR_WAVING_IMAGE}
                alt="Ng Cu En Waving Avatar"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Intro paragraph */}
            <p className="relative z-0 text-white/80 text-xs sm:text-sm leading-relaxed font-sans flex-1 -ml-4 sm:-ml-6 pl-4 sm:pl-6">
              Hi, I'm <strong className="text-brand-cyan font-bold">Ng Cu En</strong>. I am a visual creator with 4 years of experience delivering high-quality 3D game models at Ammobox Studio, now pursuing a dedicated career in graphic design. Leveraging my professional studio background, I have developed a strong body of graphic design work that showcases my eye for layout, typography, and color theory. I believe great design solves communication problems, whether through a 3D asset or a 2D digital graphic. I am adaptable, reliable, and ready to bring a fresh, multidisciplinary perspective to your design team.
            </p>
          </motion.div>

          {/* Direct contact summary grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 mb-8 max-w-xl border-t-4 border-b-4 border-black"
          >
            <motion.div 
              className="flex items-center gap-3 bg-[#0c0d2b] border-4 border-black p-4 shadow-[4px_4px_0px_0px_#000000]"
              whileHover={{ scale: 1.05, rotate: -2, shadow: "6px 6px 0px 0px #000000" }}
              transition={springTransition}
            >
              <div className="w-10 h-10 border-2 border-black bg-brand-cyan flex items-center justify-center text-black flex-shrink-0 shadow-[2px_2px_0px_0px_#000000]">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="font-mono text-[9px] text-white/40 block uppercase tracking-wider">Inquiries</span>
                <a href="mailto:scottart813@gmail.com" className="text-xs sm:text-sm text-white hover:text-brand-cyan transition-colors font-bold block truncate max-w-[160px] sm:max-w-[200px]">
                  scottart813@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center gap-3 bg-[#0c0d2b] border-4 border-black p-4 shadow-[4px_4px_0px_0px_#000000]"
              whileHover={{ scale: 1.05, rotate: 2, shadow: "6px 6px 0px 0px #000000" }}
              transition={springTransition}
            >
              <div className="w-10 h-10 border-2 border-black bg-brand-cyan flex items-center justify-center text-black flex-shrink-0 shadow-[2px_2px_0px_0px_#000000]">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="font-mono text-[9px] text-white/40 block uppercase tracking-wider">Direct Line</span>
                <a href="tel:+60126087001" className="text-xs sm:text-sm text-white hover:text-brand-cyan transition-colors font-bold block">
                  +60126087001
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Action Callouts */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-5"
          >
            {/* View Portfolio Button styled EXACTLY like the magenta START button in the image */}
            <motion.button
              id="hero-view-works-btn"
              onClick={() => handleScrollTo('gallery-section')}
              className="px-6 py-4 bg-brand-fuchsia text-black font-display text-xs uppercase border-4 border-black shadow-[4px_4px_0px_0px_#000000] cursor-pointer flex items-center gap-2 font-bold"
              whileHover={{ scale: 1.08, rotate: -3, y: -2, shadow: "6px 6px 0px 0px #000000" }}
              whileTap={{ scale: 0.95, rotate: 2 }}
              transition={springTransition}
            >
              <span>View_Works</span>
              <ArrowRight className="w-4 h-4 text-black stroke-[3]" />
            </motion.button>

            <motion.button
              id="hero-planner-btn"
              onClick={() => handleScrollTo('contact-section')}
              className="px-6 py-4 bg-black text-white hover:text-brand-cyan font-mono text-xs uppercase border-4 border-black shadow-[4px_4px_0px_0px_var(--color-brand-cyan)] cursor-pointer font-bold"
              whileHover={{ scale: 1.08, rotate: 3, y: -2, shadow: "6px 6px 0px 0px var(--color-brand-cyan)" }}
              whileTap={{ scale: 0.95, rotate: -2 }}
              transition={springTransition}
            >
              Contact_Me
            </motion.button>

            <motion.a
              id="hero-artstation-link"
              href="https://www.artstation.com/scottng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 border-2 border-black bg-white/5 font-mono text-[10px] uppercase text-white/50 hover:text-brand-cyan shadow-[2px_2px_0px_0px_#000000]"
              whileHover={{ scale: 1.08, rotate: -2, y: -1 }}
              whileTap={{ scale: 0.95 }}
              transition={springTransition}
            >
              <span>ArtStation</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </motion.a>
          </motion.div>
        </div>

        {/* Right Column: Avatar Graphic Section */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
            whileHover={{ scale: 1.04, rotate: 2 }}
            transition={springTransition}
          >
            {/* Background design accents */}
            <div className="absolute -top-4 -left-4 w-6 h-6 border-t-4 border-l-4 border-brand-cyan" />
            <div className="absolute -bottom-4 -right-4 w-6 h-6 border-b-4 border-r-4 border-brand-fuchsia" />

            {/* Main Avatar Card Frame */}
            <div className="w-[300px] sm:w-[350px] bg-[#0c0d2b] border-4 border-black p-5 shadow-[8px_8px_0px_0px_var(--color-brand-cyan)] relative overflow-hidden text-left">
              
              {/* Image Frame with block border */}
              <div className="relative aspect-square border-4 border-black bg-indigo-950 overflow-hidden shadow-[4px_4px_0px_0px_#000000]">
                <img
                  src={AVATAR_IMAGE}
                  alt="Ng Cu En (Scott Ng) - Graphic Designer Portrait"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* 8-bit Name tag overlaying the image */}
                <div className="absolute top-3 left-3 bg-black border-2 border-brand-fuchsia px-2 py-0.5 shadow-[2px_2px_0px_0px_#000000]">
                  <span className="font-mono text-[9px] uppercase font-bold text-brand-fuchsia">SCOTT NG</span>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-2 -right-2 bg-brand-fuchsia text-black border-4 border-black p-3 shadow-[4px_4px_0px_0px_#000000] scale-90 z-20">
                <p className="text-[8px] uppercase font-bold tracking-wider mb-0.5">Exp</p>
                <p className="text-base font-display font-bold">4+ Yrs</p>
              </div>

              {/* Designer Details / Captions under Avatar */}
              <div className="mt-5 pt-4 border-t-4 border-black">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-display text-sm tracking-tight text-white leading-none">Ng Cu En</h3>
                  <div className="flex items-center gap-1.5 text-brand-cyan font-mono text-[10px] font-bold uppercase">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>Verified</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-black text-brand-cyan font-mono text-[10px] font-bold uppercase border-2 border-black shadow-[2px_2px_0px_0px_#000000]">
                    Typography
                  </span>
                  <span className="px-2.5 py-1 bg-black text-brand-fuchsia font-mono text-[10px] font-bold uppercase border-2 border-black shadow-[2px_2px_0px_0px_#000000]">
                    Branding
                  </span>
                  <span className="px-2.5 py-1 bg-black text-white font-mono text-[10px] font-bold uppercase border-2 border-black shadow-[2px_2px_0px_0px_#000000]">
                    ConceptArt
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
