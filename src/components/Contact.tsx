import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, ExternalLink, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate API pipeline transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const springTransition = {
    type: "spring",
    stiffness: 400,
    damping: 15
  };

  return (
    <section id="contact-section" className="py-24 bg-studio-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[4px] bg-black" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Panel: Contact Info & Narrative (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <div className="inline-block px-4 py-2 bg-black border-4 border-black text-brand-fuchsia font-mono text-[10px] font-bold uppercase tracking-wider mb-6 shadow-[3px_3px_0px_0px_var(--color-brand-cyan)]">
                <span>CONNECT & HIRE</span>
              </div>


            </div>

            {/* Structured Info Widgets */}
            <div className="space-y-6">
              {/* Email Widget */}
              <div className="flex items-start gap-4 p-4 border-4 border-black bg-[#0c0d2b] shadow-[4px_4px_0px_0px_#000000]">
                <div className="w-10 h-10 border-2 border-black bg-black flex items-center justify-center text-brand-cyan flex-shrink-0 shadow-[2px_2px_0px_0px_#000000]">
                  <Mail className="w-4 h-4 text-brand-cyan" />
                </div>
                <div>
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-brand-fuchsia block mb-1">[ PRESS & GENERAL ]</span>
                  <a href="mailto:scottart813@gmail.com" className="text-xs sm:text-sm text-white hover:text-brand-cyan transition-colors font-mono font-bold">
                    scottart813@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Widget */}
              <div className="flex items-start gap-4 p-4 border-4 border-black bg-[#0c0d2b] shadow-[4px_4px_0px_0px_#000000]">
                <div className="w-10 h-10 border-2 border-black bg-black flex items-center justify-center text-brand-cyan flex-shrink-0 shadow-[2px_2px_0px_0px_#000000]">
                  <Phone className="w-4 h-4 text-brand-cyan" />
                </div>
                <div>
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-brand-fuchsia block mb-1">[ VOICE & CHAT ]</span>
                  <a href="tel:+60126087001" className="text-xs sm:text-sm text-white hover:text-brand-cyan transition-colors font-mono font-bold">
                    +60126087001
                  </a>
                </div>
              </div>

              {/* Location Widget */}
              <div className="flex items-start gap-4 p-4 border-4 border-black bg-[#0c0d2b] shadow-[4px_4px_0px_0px_#000000]">
                <div className="w-10 h-10 border-2 border-black bg-black flex items-center justify-center text-brand-cyan flex-shrink-0 shadow-[2px_2px_0px_0px_#000000]">
                  <MapPin className="w-4 h-4 text-brand-cyan" />
                </div>
                <div>
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-brand-fuchsia block mb-1">[ STUDIO LOCATION ]</span>
                  <span className="text-xs sm:text-sm text-white/90 font-mono font-bold">KUALA LUMPUR, MALAYSIA</span>
                </div>
              </div>
            </div>

            {/* Footer brand signature */}
            <div className="mt-12 pt-6 border-t-4 border-black text-left font-mono text-[9px] font-bold text-white/40">
              <span>© {new Date().getFullYear()} NG CU EN (SCOTT ART). ALL RIGHTS PROTECTED.</span>
            </div>
          </div>

          {/* Right Panel: Clean Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#0c0d2b] border-4 border-black p-6 sm:p-8 text-left relative overflow-hidden shadow-[8px_8px_0px_0px_var(--color-brand-cyan)]">
              <h3 className="font-display text-xs font-bold text-white mb-6 uppercase tracking-wider">
                [ TRANSMIT DIRECT MESSAGES ]
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="font-mono text-[9px] font-bold uppercase tracking-widest text-white/50 block mb-2">Your Name *</label>
                  <input
                    id="contact-form-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full bg-black border-4 border-black p-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-brand-cyan transition-colors shadow-[2px_2px_0px_0px_#000000]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="font-mono text-[9px] font-bold uppercase tracking-widest text-white/50 block mb-2">Your Email Address *</label>
                  <input
                    id="contact-form-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-black border-4 border-black p-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-brand-cyan transition-colors shadow-[2px_2px_0px_0px_#000000]"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="font-mono text-[9px] font-bold uppercase tracking-widest text-white/50 block mb-2">Subject</label>
                  <input
                    id="contact-form-subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Project Inquiry, Collaborative proposal, etc."
                    className="w-full bg-black border-4 border-black p-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-brand-cyan transition-colors shadow-[2px_2px_0px_0px_#000000]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="font-mono text-[9px] font-bold uppercase tracking-widest text-white/50 block mb-2">Your Message *</label>
                  <textarea
                    id="contact-form-message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Detail your requirements, project timelines, files at hand..."
                    className="w-full bg-black border-4 border-black p-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-brand-cyan transition-colors resize-none shadow-[2px_2px_0px_0px_#000000]"
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  id="contact-form-submit-btn"
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="w-full py-3.5 bg-brand-fuchsia text-black disabled:bg-black/40 disabled:text-white/20 font-display text-[10px] font-bold uppercase tracking-wider border-4 border-black shadow-[4px_4px_0px_0px_#000000] flex items-center justify-center gap-2 cursor-pointer"
                  whileHover={{ scale: 1.03, rotate: -1.5, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springTransition}
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING BITS...</span>
                  ) : submitted ? (
                    <span className="flex items-center gap-1.5 text-black font-bold">
                      <CheckCircle2 className="w-4 h-4 text-black stroke-[3]" /> TRANSMITTED
                    </span>
                  ) : (
                    <>
                      <span>TRANSMIT MESSAGE</span>
                      <Send className="w-3.5 h-3.5 stroke-[3]" />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Message status overlay feedback */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-black border-4 border-brand-cyan text-brand-cyan font-mono text-[10px] font-bold uppercase shadow-[4px_4px_0px_0px_#000000] leading-relaxed"
                >
                  TRANSMITTED SUCCESSFULLY. Ng Cu En will respond to your coordinates within 12 business hours.
                </motion.div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
