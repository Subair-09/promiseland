import React, { useState, useEffect } from 'react';
import { STATS } from '../data';
import { LucideIcon } from './LucideIcon';

interface CounterProps {
  target: number;
  suffix: string;
  durationMs?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({ target, suffix, durationMs = 1500 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / durationMs, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, durationMs]);

  return (
    <span className="font-display font-extrabold text-[#2D3748] text-4xl sm:text-5xl lg:text-6xl tracking-tight">
      {count.toLocaleString()}
      <span className="text-brand-orange">{suffix}</span>
    </span>
  );
};

export const Stats: React.FC = () => {
  return (
    <section className="bg-white py-20 relative overflow-hidden border-y border-slate-100">
      
      {/* Visual background grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {STATS.map((stat) => (
            <div 
              key={stat.id} 
              className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100/80 shadow-[0_10px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-2">
                <LucideIcon 
                  name={
                    stat.id === 'students' 
                      ? 'Users' 
                      : stat.id === 'teachers' 
                        ? 'School' 
                        : stat.id === 'years' 
                          ? 'Award' 
                          : 'HeartHandshake'
                  } 
                  size={18} 
                />
              </div>
              
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              
              <p className="text-[10px] uppercase tracking-widest font-bold text-[#2D3748] mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
