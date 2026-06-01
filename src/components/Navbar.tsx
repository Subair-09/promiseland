import React, { useState, useEffect } from 'react';
import { SCHOOL_INFO } from '../data';
import { LucideIcon } from './LucideIcon';

interface NavbarProps {
  onApplyClick: () => void;
  onTourClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onApplyClick, onTourClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section on scroll
      const sections = ['home', 'about', 'academics', 'why-choose-us', 'facilities', 'gallery', 'testimonials', 'admissions', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Academics', id: 'academics' },
    { label: 'Facilities', id: 'facilities' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Admissions', id: 'admissions' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of dynamic navbar
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
    <>
      {/* Top Banner Contact bar */}
      <div className="bg-[#2D3748] text-slate-100 text-xs py-2 px-4 border-b border-slate-800 transition-all duration-300 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-sans">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <LucideIcon name="MapPin" size={14} className="text-brand-orange" />
              Ikotun, Lagos, Nigeria
            </span>
            <span className="flex items-center gap-1.5">
              <LucideIcon name="Phone" size={14} className="text-brand-orange" />
              {SCHOOL_INFO.phones[0]} | {SCHOOL_INFO.phones[1]}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-brand-orange text-white px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">
              Govt & WAEC Approved
            </span>
            <a 
              href={`https://wa.me/${SCHOOL_INFO.whatsappNumber}`} 
              target="_blank" 
              className="hover:text-brand-orange flex items-center gap-1 transition-colors"
              referrerPolicy="no-referrer"
            >
              <LucideIcon name="CheckCircle2" size={12} className="text-emerald-400" />
              Admissions Open 2026/2027
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav id="app-navbar" className={`fixed top-0 md:top-8 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3 md:top-0' 
          : 'bg-white/95 backdrop-blur-sm shadow-xs border-b border-slate-100/80 py-4 md:py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo Section */}
            <div 
              onClick={() => handleScrollTo('home')} 
              className="flex items-center gap-1.5 sm:gap-2.5 cursor-pointer group shrink-0"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-orange rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-base sm:text-xl shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
                P
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display font-bold text-sm min-[370px]:text-base sm:text-lg md:text-xl text-[#2D3748] tracking-tight flex items-center gap-1 sm:gap-1.5 leading-none">
                  PROMISELAND
                  <span className="text-brand-orange font-bold">SCHOOLS</span>
                </span>
                <p className="text-[7.5px] sm:text-[9px] font-sans text-slate-500 tracking-wider uppercase mt-0.5 whitespace-nowrap hidden min-[350px]:block">Creche • Primary • College</p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 ${
                    activeSection === item.id || (activeSection === 'home' && item.id === 'home')
                      ? 'text-brand-orange bg-brand-orange/5 font-semibold' 
                      : 'text-[#2D3748] hover:text-brand-orange hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Action buttons (CTA) */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onTourClick}
                className="px-4 py-2 border-2 border-brand-orange/80 hover:border-brand-orange text-brand-orange hover:bg-brand-orange/5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300"
              >
                Book Tour
              </button>
              <button
                onClick={onApplyClick}
                className="px-4 py-2 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-lg text-xs font-bold tracking-wide transition-all shadow-md hover:shadow-brand-orange/25 active:scale-95 duration-200"
              >
                Apply Now
              </button>
            </div>

            {/* Mobile Hamburger Trigger */}
            <div className="lg:hidden flex items-center gap-1.5 sm:gap-3 shrink-0">
              <button
                onClick={onApplyClick}
                className="sm:hidden px-2.5 py-1.5 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-md text-[11px] font-bold tracking-tight transition-transform active:scale-95 duration-200"
              >
                Apply
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1.5 sm:p-2 rounded-lg text-[#2D3748] hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                <LucideIcon name={isOpen ? 'X' : 'Menu'} size={24} />
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`lg:hidden fixed inset-x-0 top-[60px] md:top-[90px] bg-white border-b border-slate-200 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="px-4 pt-4 pb-6 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium tracking-wide transition-colors ${
                  activeSection === item.id 
                    ? 'text-white bg-brand-orange font-semibold' 
                    : 'text-[#2D3748] hover:text-brand-orange hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-3 border-t border-slate-100">
              <button
                onClick={() => { setIsOpen(false); onTourClick(); }}
                className="w-full py-3 border-2 border-brand-orange text-center rounded-lg text-brand-orange text-sm font-bold tracking-wide transition-all"
              >
                Book a School Tour
              </button>
              <button
                onClick={() => { setIsOpen(false); onApplyClick(); }}
                className="w-full py-3 bg-brand-orange hover:bg-brand-orange-hover text-center rounded-lg text-white text-sm font-extrabold tracking-wide transition-all shadow-lg shadow-brand-orange/20"
              >
                Apply for Admission
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
