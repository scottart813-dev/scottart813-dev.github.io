import { useState, useEffect } from 'react';
import { Palette, Mail, Phone, ExternalLink, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const popTurnTransition = {
    type: "spring",
    stiffness: 400,
    damping: 15
  };

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0a0824]/90 border-b-4 border-black py-2 shadow-[0_4px_0_0_rgba(0,0,0,0.3)]' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo and Name */}
        <motion.button 
          id="btn-logo-home"
          onClick={() => scrollToSection('hero-section')} 
          className="flex items-center gap-2.5 text-left focus:outline-none group cursor-pointer"
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={popTurnTransition}
        >
          <div className="w-10 h-10 border-2 border-black bg-brand-fuchsia flex items-center justify-center shadow-[3px_3px_0px_0px_#000000]">
            <Palette className="w-5 h-5 text-black" />
          </div>
          <div>
            <span className="font-display font-bold tracking-tight text-white block text-sm sm:text-base leading-none">Ng Cu En</span>
            <span className="font-mono text-[9px] tracking-widest uppercase text-brand-cyan block mt-1 group-hover:text-brand-fuchsia transition-colors">SCOTT ART</span>
          </div>
        </motion.button>

        {/* Desktop Navigation */}
        <nav id="nav-desktop-menu" className="hidden md:flex items-center gap-6">
          {[
            { id: 'gallery-section', label: 'Works' },
            { id: 'contact-section', label: 'Contact' }
          ].map((item) => (
            <motion.button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-xs font-mono font-bold uppercase text-white/70 hover:text-brand-cyan focus:outline-none cursor-pointer py-1 px-2 border-2 border-transparent hover:border-black hover:bg-black/40 hover:shadow-[2px_2px_0px_0px_var(--color-brand-fuchsia)]"
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.9 }}
              transition={popTurnTransition}
            >
              {item.label}
            </motion.button>
          ))}
        </nav>

        {/* Action Button & Contact Shortcuts */}
        <div className="hidden md:flex items-center gap-4">
          <motion.a
            id="header-artstation-link"
            href="https://www.artstation.com/scottng"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-bold uppercase text-black bg-brand-cyan border-2 border-black shadow-[2px_2px_0px_0px_#000000]"
            whileHover={{ scale: 1.08, rotate: -3, y: -2, shadow: "4px 4px 0px 0px #000000" }}
            whileTap={{ scale: 0.95, rotate: 2 }}
            transition={popTurnTransition}
          >
            <span>ArtStation</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </motion.a>
          
          <motion.button
            id="header-cta-button"
            onClick={() => scrollToSection('contact-section')}
            className="px-5 py-2 text-xs font-display font-bold uppercase bg-brand-fuchsia text-black border-2 border-black shadow-[3px_3px_0px_0px_#000000] cursor-pointer"
            whileHover={{ scale: 1.08, rotate: 3, y: -2 }}
            whileTap={{ scale: 0.95, rotate: -2 }}
            transition={popTurnTransition}
          >
            Inquire
          </motion.button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="flex md:hidden items-center gap-3">
          <motion.a
            id="mobile-header-artstation-link"
            href="https://www.artstation.com/scottng"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-black bg-brand-cyan border-2 border-black shadow-[2px_2px_0px_0px_#000000]"
            whileHover={{ scale: 1.1, rotate: -4 }}
            whileTap={{ scale: 0.9 }}
            transition={popTurnTransition}
          >
            <ExternalLink className="w-4 h-4" />
          </motion.a>
          
          <motion.button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white bg-black border-2 border-white/20 hover:border-brand-fuchsia focus:outline-none"
            whileHover={{ scale: 1.1, rotate: 4 }}
            whileTap={{ scale: 0.9 }}
            transition={popTurnTransition}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="nav-mobile-drawer" className="md:hidden absolute top-full left-0 w-full bg-[#0a0824] border-b-4 border-black px-4 py-6 flex flex-col gap-4 shadow-2xl">
          {[
            { id: 'gallery-section', label: 'Selected Works' },
            { id: 'contact-section', label: 'Contact' }
          ].map((item) => (
            <motion.button
              key={item.id}
              id={`mobile-link-${item.id.split('-')[0]}`}
              onClick={() => scrollToSection(item.id)}
              className="text-left py-2.5 px-4 text-xs font-mono font-bold uppercase text-white bg-white/5 border-2 border-black shadow-[2px_2px_0px_0px_#000000]"
              whileHover={{ scale: 1.03, rotate: -1, x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.label}
            </motion.button>
          ))}

          <div className="h-[2px] bg-black my-2"></div>

          {/* Quick Contact info in mobile header */}
          <div className="flex flex-col gap-2.5 px-3 font-mono text-xs text-white/60">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-brand-cyan" />
              <span>scottart813@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-brand-cyan" />
              <span>+60126087001</span>
            </div>
          </div>

          <motion.button
            id="mobile-cta-button"
            onClick={() => scrollToSection('contact-section')}
            className="mt-2 w-full py-3 text-center text-xs font-display font-bold uppercase bg-brand-fuchsia text-black border-2 border-black shadow-[3px_3px_0px_0px_#000000]"
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            Inquire
          </motion.button>
        </div>
      )}
    </header>
  );
}
