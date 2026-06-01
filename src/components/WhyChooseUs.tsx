import React from 'react';
import { BENEFITS } from '../data';
import { LucideIcon } from './LucideIcon';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-24 bg-white relative overflow-hidden">
      
      {/* Visual background details */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-slate-50 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold tracking-wide mb-4 uppercase">
            Superior Quality Pillars
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-none">
            Why Parents Trust Promiseland
          </h2>
          <p className="mt-4 text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
            We deliver on our educational covenant by combining authorized national regulatory standards, world-class sports facilities, and strict moral governance.
          </p>
        </div>

        {/* Dynamic Bento Grid of Benefits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit) => (
            <div 
              key={benefit.id}
              className="p-6 rounded-2xl border border-slate-150 bg-white hover:border-brand-orange/40 hover:bg-slate-50/50 shadow-sm hover:shadow-lg transition-all duration-300 text-left group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-brand-orange group-hover:shadow-md group-hover:shadow-brand-orange/20 flex items-center justify-center text-slate-700 group-hover:text-white transition-all duration-300 mb-5">
                <LucideIcon name={benefit.iconName} size={22} />
              </div>

              {/* Text */}
              <h3 className="font-display font-extrabold text-base text-slate-950 group-hover:text-slate-900 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="mt-2.5 text-slate-600 text-[13px] leading-relaxed font-sans">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
