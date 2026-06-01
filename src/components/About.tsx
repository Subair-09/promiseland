import React, { useState } from 'react';
import { LucideIcon } from './LucideIcon';
import { SCHOOL_INFO } from '../data';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');

  const tabsContent = {
    mission: {
      headline: 'Cultivating Scholastic Pioneers & High Moral Character',
      text: 'Our mission is to foster a rigorous, dynamic, and inspiring learning ecosystem from early infancy through college. We empower diverse scholars in Lagos to achieve world-class academic excellence, develop secure moral principles, and master advanced technical and creative capabilities essential for leading tomorrow with integrity.',
      list: [
        'Curricular integration of advanced science and modern programming.',
        'Zero tolerance for examination malpractices; fostering deep individual honesty.',
        'Continuous pedagogical training to ensure world-caliber teacher standards.'
      ]
    },
    vision: {
      headline: 'Fostering the Elite Hub of Educational Excellence in West Africa',
      text: 'To be widely recognized as a preeminent, leading international educational community in Nigeria—renowned for nurturing impeccable self-discipline, pioneering scientific projects, and consistently producing high-performing alumni who secure top university pathways globally.',
      list: [
        'Expanding global resource partnerships and international student transfers.',
        'Pioneering smart digital education pathways in senior college programs.',
        'Establishing community leadership hubs to solve localized societal needs.'
      ]
    },
    values: {
      headline: 'The Twin Pillars of Scholarly Prominence: Excellence & Grit',
      text: 'At Promiseland, we live by a creed of unwavering nobility, focus, and diligence. These core values guide every interaction in the classroom, laboratory, prefect meeting, and athletic arena:',
      list: [
        'Academic Integrity: Developing strict honesty, research devotion, and self-reliance.',
        'Noble Discipline: Respecting guidelines, timing accuracy, and senior mentorship.',
        'Creative Innovation: Encouraging students to build, experiment, and write original codes.',
        'Leadership Ownership: Steering prefect boards to handle operational safety with pride.'
      ]
    }
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      
      {/* Absolute ambient backgrounds */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Stacking Frame */}
          <div className="lg:col-span-5 relative group">
            
            {/* Background design accents */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-brand-orange rounded-tl-2xl opacity-40"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-brand-orange rounded-br-2xl opacity-40"></div>
            
            {/* Decorative Solid Block */}
            <div className="absolute inset-0 bg-brand-orange rounded-2xl rotate-2 group-hover:rotate-1 transition-transform duration-500 z-0"></div>
            
            {/* Primary Image Frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10 bg-slate-100 border-4 border-white-50 translate-y-[-4px]">
              <img 
                src="https://i.imgur.com/umtSmOk.png"
                alt="Enthusiastic African secondary students studying books together at Promiseland Schools"
                className="w-full h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-6 text-white text-left">
                <p className="text-brand-orange font-bold text-xs uppercase tracking-widest">Nurturing Leaders</p>
                <h4 className="text-sm font-semibold mt-1 font-display">Preparing African Minds for Global Prominence</h4>
              </div>
            </div>

            {/* Quick stats floating tag */}
            <div className="absolute -bottom-6 -left-6 bg-[#2D3748] border border-[#2D3748]/20 text-white rounded-xl p-4 shadow-xl z-20 flex items-center gap-3.5 max-w-xs transition-transform hover:scale-105 duration-300">
              <div className="w-12 h-12 rounded-lg bg-brand-orange flex items-center justify-center font-display font-extrabold text-lg text-white">
                15+
              </div>
              <div className="text-left">
                <p className="text-xs font-bold leading-normal text-white">Years of Premium Merit</p>
                <p className="text-[10px] text-slate-400">Lagos State Elite Standard</p>
              </div>
            </div>

          </div>

          {/* Right Column: Educational Narrative Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium tracking-wide mb-4">
              <LucideIcon name="Building" size={12} className="text-brand-orange" />
              <span>Established Academic Institution</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Welcome to <span className="text-brand-orange">Promiseland Schools</span>, Lagos
            </h2>

            <p className="mt-4 text-slate-600 text-base leading-relaxed font-sans font-light">
              Founded in Lagos with a singular noble vision, Promiseland Schools has evolved into a comprehensive, premier educational beacon of virtue, science, and leadership. We offer a full educational spectrum: from secure <b>Creche and foundational Pre-School</b> modules, up to our academically rigorous <b>College division</b>. Our students consistently excel in external certifications including WAEC, with robust discipline as their primary anchor.
            </p>

            {/* Premium Tab Bar for Mission, Vision and Values */}
            <div className="mt-8 flex gap-2 border-b border-slate-100 w-full">
              {(['mission', 'vision', 'values'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-3 text-sm font-bold tracking-wide border-b-2 transition-all capitalize select-none ${
                    activeTab === tab 
                      ? 'border-brand-orange text-brand-orange bg-brand-orange/[0.02]' 
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab content area with transition */}
            <div className="mt-6 p-5 bg-brand-light rounded-xl border border-slate-100 relative min-h-[220px] transition-all duration-300 w-full">
              <div className="flex gap-2.5 items-center mb-3">
                <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <LucideIcon name={activeTab === 'mission' ? 'Compass' : activeTab === 'vision' ? 'Sparkles' : 'Award'} size={16} />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base sm:text-lg">
                  {tabsContent[activeTab].headline}
                </h3>
              </div>
              
              <p className="text-slate-600 text-sm leading-relaxed font-sans mt-2">
                {tabsContent[activeTab].text}
              </p>

              <ul className="mt-4 space-y-2">
                {tabsContent[activeTab].list.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs text-slate-700 font-sans">
                    <LucideIcon name="Check" size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};
