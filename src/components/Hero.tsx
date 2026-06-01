import React from 'react';
import { LucideIcon } from './LucideIcon';

interface HeroProps {
  onApplyClick: () => void;
  onTourClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onApplyClick, onTourClick }) => {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[640px] lg:h-[680px] flex items-center bg-gradient-to-br from-[#fdfdfd] to-[#f1f5f9] overflow-hidden pt-28 pb-12 lg:py-0"
    >
      {/* Absolute graphic elements */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-brand-orange/5 rounded-full blur-[140px] pointer-events-none"></div>
      
      {/* Decorative grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none"></div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Column Description */}
        <div className="w-full lg:w-1/2 pr-0 lg:pr-8 flex flex-col items-start text-left z-10">
          
          <div className="mb-4">
            <span className="inline-block bg-brand-orange text-white text-[10px] md:text-11px font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">
              Govt & WAEC Approved
            </span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#2D3748] tracking-tight leading-[1.15] mb-6">
            Building <span className="text-brand-orange">Tomorrow's</span> Leaders Today
          </h1>

          <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-lg leading-relaxed font-sans font-light">
            From Creche to College, we provide quality education that develops academic excellence, character, creativity, and leadership. Experience top-tier learning in the heart of Lagos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={onApplyClick}
              className="group px-7 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-lg font-semibold text-sm tracking-wide transition-all shadow-md hover:shadow-brand-orange/25 flex items-center justify-center gap-2 transform active:scale-95 duration-200"
            >
              Apply for Admission
              <LucideIcon name="ArrowRight" size={16} className="group-hover:translate-x-1.5 transition-transform" />
            </button>
            
            <button
              onClick={onTourClick}
              className="px-7 py-3.5 border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white rounded-lg font-semibold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
            >
              <LucideIcon name="Calendar" size={16} />
              Book a School Tour
            </button>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-200/80 w-full flex flex-row items-center gap-4">
            <div className="flex -space-x-3.5">
              <div className="w-9 h-9 rounded-full border-2 border-white bg-slate-300 overflow-hidden shadow-sm">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover" alt="Student" />
              </div>
              <div className="w-9 h-9 rounded-full border-2 border-white bg-slate-400 overflow-hidden shadow-sm">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover" alt="Student" />
              </div>
              <div className="w-9 h-9 rounded-full border-2 border-white bg-slate-500 overflow-hidden shadow-sm">
                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover" alt="Student" />
              </div>
              <div className="w-9 h-9 rounded-full border-2 border-white bg-brand-orange flex items-center justify-center text-[10px] text-white font-bold shadow-sm">
                1k+
              </div>
            </div>
            <span className="text-xs sm:text-sm font-medium text-slate-500">
              Join 1,000+ Students in our Lagos Campuses
            </span>
          </div>
        </div>

        {/* Right Column Layout */}
        <div className="w-full lg:w-1/2 relative h-[360px] sm:h-[420px] lg:h-[480px] hidden md:flex items-center justify-start lg:justify-end">
          {/* Main Visual Card */}
          <div className="relative w-full max-w-[500px] h-[350px] sm:h-[380px] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl skew-x-0 lg:rotate-2 transition-transform duration-500 hover:rotate-0">
            <div 
              className="w-full h-full bg-cover bg-center flex items-end p-6"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.45)), url('https://i.imgur.com/JLBO0VN.png')`
              }}
            >
              <div className="text-white">
                <p className="font-extrabold text-xl sm:text-2xl leading-snug">Excellence in Education</p>
                <p className="text-xs opacity-90 font-mono mt-1">Arida Ikotun, Lagos Campus</p>
              </div>
            </div>
          </div>

          {/* Floating Stat Box 1 */}
          <div className="absolute top-12 left-4 lg:left-0 bg-white/95 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border border-slate-100 z-20 flex flex-col items-start translate-x-[-10px] transform hover:scale-105 transition-transform duration-300">
            <p className="text-brand-orange font-black text-2xl leading-none">95%</p>
            <p className="text-[9px] uppercase tracking-widest font-bold text-slate-500 mt-1">Parent Satisfaction</p>
          </div>

          {/* Floating Stat Box 2 */}
          <div className="absolute bottom-8 right-12 bg-white/95 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border border-slate-100 z-20 flex flex-col items-start translate-x-[10px] transform hover:scale-105 transition-transform duration-300">
            <p className="text-brand-orange font-black text-2xl leading-none">15+</p>
            <p className="text-[9px] uppercase tracking-widest font-bold text-slate-500 mt-1">Years of Excellence</p>
          </div>
        </div>

      </div>

      {/* Floating Scroll indicator */}
      <div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 cursor-pointer z-10" 
        onClick={() => handleScrollToSection('about')}
      >
        <span className="text-[10px] text-slate-400 font-sans tracking-widest uppercase">Explore More</span>
        <div className="w-5 h-8 border border-slate-300 rounded-full p-0.5 flex justify-center">
          <div className="w-1 bg-brand-orange rounded-full h-1.5 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
