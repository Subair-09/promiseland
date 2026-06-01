import React from 'react';
import { TESTIMONIALS } from '../data';
import { LucideIcon } from './LucideIcon';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative styling */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-brand-orange/5 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold tracking-wide mb-4 uppercase">
            Sincere Endorsements
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-none">
            What Our Parents Say
          </h2>
          <p className="mt-4 text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
            Real stories of transition, discipline, and scholarly breakthroughs from guardians and successful alumni of Promiseland Schools.
          </p>
        </div>

        {/* Testimonials Card Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id}
              className="p-8 rounded-2xl bg-white border border-slate-150 shadow-sm relative flex flex-col justify-between group hover:shadow-lg transition-all duration-350"
            >
              <div>
                {/* Quotation icon decoration */}
                <span className="font-display font-extrabold text-brand-orange/15 text-7xl absolute top-4 left-4 select-none leading-none">
                  “
                </span>

                {/* Stars container */}
                <div className="flex gap-1 mb-5 relative z-10">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <LucideIcon key={i} name="Star" size={14} className="fill-brand-orange text-brand-orange shrink-0" />
                  ))}
                </div>

                {/* Quote Content */}
                <p className="text-slate-700 text-sm leading-relaxed font-sans italic my-4 relative z-10">
                  "{t.quote}"
                </p>
              </div>

              {/* Author footer metadata */}
              <div className="flex items-center gap-4.5 pt-6 border-t border-slate-100 mt-6 relative z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 border border-slate-250 hover:scale-105 transition-transform shrink-0">
                  <img 
                    src={t.avatarUrl} 
                    alt={t.author} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-black text-sm text-slate-900">{t.author}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">{t.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
