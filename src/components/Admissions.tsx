import React, { useState } from 'react';
import { LucideIcon } from './LucideIcon';
import { SCHOOL_INFO } from '../data';

interface AdmissionsProps {
  onApplyClick: () => void;
}

export const Admissions: React.FC<AdmissionsProps> = ({ onApplyClick }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: '01',
      title: 'Online/Physical Application',
      description: 'Fill our comprehensive digital inquiry form below or purchase a hardcopy admission file directly at our Arida-Ikotun school campus reception.',
      badge: 'Step 1',
      details: [
        'Pay standard application fee',
        'Provide birth certificate copy',
        'Submit last school academic reports',
        'Provide passport-sized photographs'
      ]
    },
    {
      number: '02',
      title: 'Entrance Evaluation Assessment',
      description: 'All child applicants from Grade 1 to College undergo scholastic readiness and logical aptitude evaluations scheduled at our campus.',
      badge: 'Step 2',
      details: [
        'Age-appropriate literacy tests',
        'Mathematics & reading evaluations',
        'Oral focus discussion / interview',
        'Caregiver consultation in nursery levels'
      ]
    },
    {
      number: '03',
      title: 'Enrollment & Welcome',
      description: 'On passing, a formal admission offer letter is securely drafted. Guardians confirm seats by executing payments and picking up school books.',
      badge: 'Step 3',
      details: [
        'Secure final tuition deposit',
        'Collect uniform fit materials',
        'Receive book list & academic manual',
        'Schedule school orientation bus drill'
      ]
    }
  ];

  return (
    <section id="admissions" className="py-24 bg-white relative overflow-hidden">
      
      {/* Visual background decals */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold tracking-wide mb-4 uppercase">
            Start Your Journey
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-none">
            Our Admissions Blueprint
          </h2>
          <p className="mt-4 text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
            Our objective, standard 3-step admission flow ensures every child is aligned with the academic bracket that maximizes their focus, analytical skills, and emotional growth.
          </p>
        </div>

        {/* 3-Step Interactive Timeline Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-8 rounded-3xl border text-left cursor-pointer transition-all duration-300 relative group flex flex-col justify-between ${
                  isCurrent 
                    ? 'border-brand-orange bg-[#2D3748] text-white shadow-xl shadow-[#2D3748]/15' 
                    : 'border-slate-150 bg-white hover:bg-slate-50/50'
                }`}
              >
                {/* Horizontal flow line indicator */}
                {idx < 2 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 border-t-2 border-dashed border-slate-250 z-10 group-hover:border-brand-orange transition-colors"></div>
                )}

                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className={`font-display font-black text-3xl tracking-tight leading-none select-none ${
                      isCurrent ? 'text-brand-orange' : 'text-slate-300 group-hover:text-slate-500'
                    }`}>
                      {step.number}
                    </span>
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full ${
                      isCurrent ? 'bg-brand-orange/20 text-brand-orange' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {step.badge}
                    </span>
                  </div>

                  <h3 className={`font-display font-black text-lg transition-colors leading-tight ${
                    isCurrent ? 'text-white' : 'text-slate-950'
                  }`}>
                    {step.title}
                  </h3>

                  <p className={`mt-3 text-xs leading-relaxed font-sans ${
                    isCurrent ? 'text-slate-330' : 'text-slate-600'
                  }`}>
                    {step.description}
                  </p>
                </div>

                <div className={`mt-6 pt-5 border-t ${
                  isCurrent ? 'border-slate-800' : 'border-slate-100'
                }`}>
                  <p className={`text-[11px] font-bold uppercase tracking-wider mb-2.5 ${
                    isCurrent ? 'text-brand-orange' : 'text-slate-800'
                  }`}>
                    Key Deliverables
                  </p>
                  <ul className="space-y-1.5">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-[11px] font-sans">
                        <LucideIcon name="Check" size={12} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className={isCurrent ? 'text-slate-300' : 'text-slate-600'}>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

        {/* Big Apply Now callout block */}
        <div className="bg-[#2D3748] rounded-3xl p-8 sm:p-12 border border-[#2D3748]/10 text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h3 className="font-display font-black text-white text-2xl sm:text-3xl tracking-tight">
              Ready to Give Your Child the Best Educational Foundation?
            </h3>
            <p className="text-slate-200 font-sans text-sm sm:text-base leading-relaxed font-light">
              We are actively accepting applications for the <b>2026/2027 Academic Session</b> across all classes (Creche, Nursery, Primary, and Secondary College). Securing a candidate seat is straightforward: start your application online today.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onApplyClick}
                className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-brand-orange/30 active:scale-95 duration-200"
              >
                Apply for Admission Today
              </button>
              
              <a 
                href={`https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=Hello%20Promiseland%20Schools,%20I%20am%20interested%20in%20school%20admissions.`}
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-750 hover:bg-slate-850 hover:border-brand-orange text-slate-200 hover:text-white rounded-xl font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2"
              >
                <LucideIcon name="MessageSquare" size={16} className="text-emerald-400" />
                Inquire on WhatsApp
              </a>
            </div>

            <p className="text-[10px] text-slate-400 font-sans font-medium tracking-wide">
              * Note: Application results are processed within 3-5 working days of assessment completion.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};
