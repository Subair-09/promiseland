import React from 'react';
import { FACILITIES } from '../data';
import { LucideIcon } from './LucideIcon';

interface FacilitiesProps {
  onTourClick: () => void;
}

export const Facilities: React.FC<FacilitiesProps> = ({ onTourClick }) => {
  return (
    <section id="facilities" className="py-24 bg-slate-50 relative overflow-hidden text-left">
      
      {/* Decorative details */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold tracking-wide mb-4 uppercase">
              First-Class Infrastructure
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-none">
              Modern Physical & Digital Facilities
            </h2>
            <p className="mt-4 text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
              We believe a child's spatial environment heavily impacts cognitive learning capabilities. Our campus is fully secure and integrated with modern academic utilities.
            </p>
          </div>
          <button 
            onClick={onTourClick}
            className="shrink-0 flex items-center gap-2 px-5 py-3 border border-slate-300 hover:border-brand-orange hover:bg-brand-orange hover:text-white rounded-xl text-xs font-extrabold text-slate-700 tracking-wider uppercase transition-all duration-300 shadow-sm"
          >
            <LucideIcon name="Calendar" size={14} className="text-brand-orange hover:text-white" />
            Book a School Visit
          </button>
        </div>

        {/* Facilities Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {FACILITIES.map((facility) => (
            <div 
              key={facility.id}
              className="bg-white rounded-2xl border border-slate-150 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <img 
                  src={facility.imageUrl} 
                  alt={facility.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
              </div>

              <div className="p-5 flex-grow text-left flex flex-col justify-start">
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="w-7 h-7 rounded bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                    <LucideIcon name={facility.iconName} size={14} />
                  </div>
                  <h3 className="font-display font-bold text-sm text-slate-900 line-clamp-1">{facility.name}</h3>
                </div>
                
                <p className="text-slate-600 text-xs leading-relaxed font-sans line-clamp-4">
                  {facility.description}
                </p>
              </div>

              <div className="px-5 py-3 bg-brand-light border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Certified Clean</span>
                <span className="text-brand-orange flex items-center gap-0.5">
                  <LucideIcon name="ShieldCheck" size={12} />
                  Secure
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
