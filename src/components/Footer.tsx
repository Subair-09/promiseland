import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data';
import { LucideIcon } from './LucideIcon';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate list mapping
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

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
    <footer className="bg-slate-950 text-slate-400 font-sans border-t border-slate-900 overflow-hidden relative">
      
      {/* Absolute visual gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/[0.03] rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Footer Links & Content Hub */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left">
          
          {/* Column 1: Institution Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => handleScrollToSection('home')}>
              <div className="w-10 h-10 bg-brand-orange text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-md">
                P
              </div>
              <div>
                <span className="font-display font-bold text-white text-lg sm:text-lg tracking-tight flex items-center gap-1">
                  PROMISELAND
                  <span className="text-brand-orange">SCHOOLS</span>
                </span>
                <p className="text-[10px] font-mono text-slate-500 tracking-wider">Creche • Primary • College</p>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Promiseland Schools is a premier elite academic institution based in Lagos, Nigeria. We mold disciplined, innovative, and self-reliant leaders equipped to pass national exams like WAEC and secure global college entries.
            </p>

            {/* Social handles list (lucide icon styled beautifully) */}
            <div className="flex gap-3 pt-2">
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-brand-orange hover:border-brand-orange/40 transition-colors" title="Facebook">
                <LucideIcon name="ShieldCheck" size={14} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-brand-orange hover:border-brand-orange/40 transition-colors" title="Instagram">
                <LucideIcon name="Sparkles" size={14} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-brand-orange hover:border-brand-orange/40 transition-colors" title="LinkedIn">
                <LucideIcon name="GraduationCap" size={14} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/30 transition-colors" title="WhatsApp Channel">
                <LucideIcon name="MessageSquare" size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider border-b border-slate-800 pb-2">Quick Navigation</h4>
            <ul className="space-y-2.5 text-xs">
              {['home', 'about', 'academics', 'facilities', 'gallery'].map((sec) => (
                <li key={sec}>
                  <button
                    onClick={() => handleScrollToSection(sec)}
                    className="hover:text-brand-orange transition-colors duration-150 text-slate-400 capitalize"
                  >
                    {sec.replace('-', ' ')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact quicklinks (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider border-b border-slate-800 pb-2">Institution Contacts</h4>
            <ul className="space-y-3 text-xs leading-normal">
              <li className="flex items-start gap-2.5">
                <LucideIcon name="MapPin" size={14} className="text-brand-orange shrink-0 mt-0.5" />
                <span className="text-slate-400 text-[11px] leading-relaxed">{SCHOOL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <LucideIcon name="Phone" size={14} className="text-brand-orange shrink-0" />
                <span>{SCHOOL_INFO.phones[0]} <br/> {SCHOOL_INFO.phones[1]}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <LucideIcon name="Mail" size={14} className="text-brand-orange shrink-0" />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-white transition-colors text-[11px]">{SCHOOL_INFO.email}</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscriber Form (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider border-b border-slate-800 pb-2">School Courier Newsletter</h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Subscribe to our monthly mail letters containing parent counseling, term calendars, event brochures, and curriculum updates.
            </p>
            
            {subscribed ? (
              <div className="p-3.5 rounded-lg bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-sans tracking-wide leading-relaxed animate-fade-in flex items-center gap-2">
                <LucideIcon name="Check" size={14} className="text-brand-orange shrink-0" />
                <span>Subscription Vetted Successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full mt-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="px-3 py-2 border border-slate-800 bg-slate-900 text-white rounded-lg text-xs font-sans focus:outline-none focus:border-brand-orange/80 flex-grow"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-lg text-xs font-bold font-sans tracking-tight shrink-0 transition-colors cursor-pointer"
                >
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Legal lower footer banner section */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-sans">
          <p>© {new Date().getFullYear()} Promiseland Schools, Lagos. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300">Privacy Codes</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Admission Criteria Manual</a>
            <span>•</span>
            <span className="text-[10px] text-slate-600">Approved by Ministry of Education, Lagos State</span>
          </div>
        </div>

      </div>

    </footer>
  );
};
