import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { LucideIcon } from './LucideIcon';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Classroom Activities', 'Graduation', 'Sports Day', 'Science Projects', 'Cultural Day', 'School Events'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const openLightbox = (id: string) => {
    const index = GALLERY_ITEMS.findIndex(item => item.id === id);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold tracking-wide mb-4 uppercase">
            Captured Milestones
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-none">
            Our Vibrant School Gallery
          </h2>
          <p className="mt-4 text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
            Take an immersive visual stroll through our classroom activities, project defense symposia, cultural days, and vibrant graduation events.
          </p>
        </div>

        {/* Categories Filtering Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl border transition-all select-none duration-250 ${
                selectedCategory === category
                  ? 'bg-brand-orange border-brand-orange text-white'
                  : 'bg-white border-slate-200 hover:border-brand-orange/40 text-slate-600 hover:text-slate-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid with Staggered Transition */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="group aspect-[4/3] rounded-2xl overflow-hidden relative cursor-pointer shadow-sm border border-slate-100 bg-slate-100"
            >
              {/* Image asset loading */}
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Elegant Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left text-white">
                <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider bg-brand-orange/15 border border-brand-orange/25 rounded px-2 py-0.5 inline-block w-fit mb-2">
                  {item.category}
                </span>
                <h4 className="font-display font-semibold text-xs leading-snug line-clamp-1">{item.title}</h4>
                <p className="text-[10px] text-slate-300 font-sans flex items-center gap-1 mt-1.5 font-bold">
                  View Full Size
                  <LucideIcon name="ExternalLink" size={10} className="text-brand-orange" />
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fallback state when filtered category is empty (highly professional!) */}
        {filteredItems.length === 0 && (
          <div className="py-16 text-center border-2 border-dashed border-slate-200 rounded-2xl">
            <LucideIcon name="School" size={32} className="mx-auto text-slate-300 mb-3" />
            <p className="text-sm font-bold text-slate-500">No images archived in this category yet.</p>
            <p className="text-xs text-slate-400 mt-1">Check back soon for freshly captured moments.</p>
          </div>
        )}

      </div>

      {/* FULLSCREEN LIGHTBOX PANEL */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 bg-slate-950/98 z-50 flex flex-col justify-between items-center py-6 px-4 cursor-default animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Lightbox Top Panel */}
          <div className="w-full max-w-6xl flex justify-between items-center text-white z-10 select-none">
            <div className="text-left font-sans">
              <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider opacity-90 block">
                {GALLERY_ITEMS[lightboxIndex].category}
              </span>
              <span className="text-sm font-display font-bold text-slate-200 mt-0.5 block">
                {GALLERY_ITEMS[lightboxIndex].title}
              </span>
            </div>
            <button 
              onClick={closeLightbox}
              className="p-2.5 rounded-full bg-slate-900 border border-slate-850 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              title="Close Panel"
            >
              <LucideIcon name="X" size={20} />
            </button>
          </div>

          {/* Lightbox Main Image & Navigation Arrows */}
          <div className="relative w-full max-w-5xl aspect-[16/10] flex items-center justify-center select-none">
            
            {/* Sliding Left Arrow */}
            <button 
              onClick={prevImage}
              className="absolute left-2 md:left-4 p-3 rounded-full bg-slate-900/80 border border-slate-800 text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-200 z-10 shrink-0 shadow-lg"
              title="Previous Photo"
            >
              <LucideIcon name="ChevronLeft" size={20} />
            </button>

            {/* Core Image Asset */}
            <div className="relative max-h-[75vh] max-w-full overflow-hidden rounded-2xl border border-slate-900 shadow-2xl bg-black flex items-center justify-center">
              <img 
                src={GALLERY_ITEMS[lightboxIndex].imageUrl} 
                alt={GALLERY_ITEMS[lightboxIndex].title} 
                className="max-h-[70vh] max-w-full object-contain object-center scale-100"
                referrerPolicy="no-referrer"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Sliding Right Arrow */}
            <button 
              onClick={nextImage}
              className="absolute right-2 md:right-4 p-3 rounded-full bg-slate-900/80 border border-slate-800 text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-200 z-10 shrink-0 shadow-lg"
              title="Next Photo"
            >
              <LucideIcon name="ChevronRight" size={20} />
            </button>

          </div>

          {/* Lightbox Bottom Indicator */}
          <div className="text-slate-400 text-xs font-mono select-none">
            Photo {lightboxIndex + 1} of {GALLERY_ITEMS.length} • Promiseland Archives
          </div>

        </div>
      )}

    </section>
  );
};
