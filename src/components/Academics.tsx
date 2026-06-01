import React, { useState } from 'react';
import { ACADEMIC_LEVELS } from '../data';
import { LucideIcon } from './LucideIcon';

interface AcademicsProps {
  onApplyClick: () => void;
}

export const Academics: React.FC<AcademicsProps> = ({ onApplyClick }) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCurriculum = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  return (
    <section id="academics" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Visual background details */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold tracking-wide mb-4 uppercase">
            Educational Foundations
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-none">
            Our Academic Divisions
          </h2>
          <p className="mt-4 text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
            From cognitive infant foundations to competitive high school WAEC cohorts, we provide specialized educational pathways tailored to match your child's age, curiosity, and emerging leadership skills.
          </p>
        </div>

        {/* Academic Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ACADEMIC_LEVELS.map((level) => {
            const isExpanded = expandedCard === level.id;
            return (
              <div 
                key={level.id}
                onClick={(e) => toggleCurriculum(level.id, e)}
                className={`bg-white rounded-2xl border border-slate-150 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group transform hover:-translate-y-1.5 relative ${
                  isExpanded ? 'ring-2 ring-brand-orange' : ''
                }`}
              >
                {/* Card Top Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img 
                    src={level.imageUrl} 
                    alt={`${level.name} at Promiseland Schools`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Age overlay badge */}
                  <div className="absolute top-4 left-4 bg-slate-900/90 text-white font-display text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full border border-slate-800 flex items-center gap-1">
                    <LucideIcon name="Clock" size={10} className="text-brand-orange" />
                    {level.ageRange}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col justify-start text-left">
                  <h3 className="font-display font-extrabold text-xl text-slate-950 group-hover:text-brand-orange transition-colors">
                    {level.name}
                  </h3>
                  
                  <p className="mt-3 text-slate-600 text-[13px] leading-relaxed font-sans line-clamp-4">
                    {level.description}
                  </p>

                  {/* Dynamically expanding curriculum container */}
                  <div className={`overflow-hidden transition-all duration-300 mt-4 border-t border-slate-100/80 ${
                    isExpanded ? 'max-h-[300px] pt-4 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-[11px] font-semibold text-brand-orange uppercase tracking-wider mb-2 flex items-center gap-1">
                      <LucideIcon name="Sparkles" size={10} />
                      Featured Syllabus
                    </p>
                    <ul className="space-y-1.5">
                      {level.curriculum.map((topic, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-[11px] text-slate-700 font-sans">
                          <LucideIcon name="Check" size={12} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-tight">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom Panel */}
                <div className="px-6 pb-6 pt-2 bg-brand-light flex items-center justify-between border-t border-slate-100">
                  <span 
                    className="text-xs font-bold text-slate-700 group-hover:text-brand-orange transition-colors flex items-center gap-1 select-none"
                    onClick={(e) => toggleCurriculum(level.id, e)}
                  >
                    <span>{isExpanded ? 'Hide Syllabus' : 'View Syllabus'}</span>
                    <LucideIcon 
                      name="ChevronRight" 
                      size={14} 
                      className={`transition-transform duration-300 ${isExpanded ? 'rotate-90 text-brand-orange' : ''}`} 
                    />
                  </span>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onApplyClick();
                    }}
                    className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-brand-orange hover:border-brand-orange hover:text-white text-slate-600 transition-all duration-200 shadow-sm"
                    title="Apply for this level"
                  >
                    <LucideIcon name="ArrowRight" size={12} />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Dynamic CTA at section bottom */}
        <div className="mt-16 bg-[#2D3748] rounded-3xl p-8 sm:p-12 border border-[#2D3748]/10 text-left flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-[80px]"></div>
          
          <div className="space-y-3 z-10 max-w-2xl">
            <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-brand-orange px-2.5 py-1 rounded">
              Government and WAEC Certified
            </span>
            <h3 className="font-display font-bold text-white text-2xl">
              Unsure which grade is custom-best for your child?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Contact our admissions counselors today. We walk through age evaluations, former exam sheets, physical assessments, and syllabus fits with zero obligation.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-4 z-10 w-full md:w-auto">
            <button 
              onClick={onApplyClick}
              className="px-6 py-3 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow shadow-brand-orange/20 hover:shadow-brand-orange/40 w-full sm:w-auto text-center"
            >
              Start Admission Dialog
            </button>
          </div>
        </div>

      </div>

    </section>
  );
};
