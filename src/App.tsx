import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Academics } from './components/Academics';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Stats } from './components/Stats';
import { Facilities } from './components/Facilities';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Admissions } from './components/Admissions';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AdmissionModal } from './components/AdmissionModal';
import { LucideIcon } from './components/LucideIcon';
import { SCHOOL_INFO } from './data';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'apply' | 'tour'>('apply');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openApplyModal = () => {
    setModalMode('apply');
    setModalOpen(true);
  };

  const openTourModal = () => {
    setModalMode('tour');
    setModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-brand-orange/20 selection:text-brand-orange relative font-sans antialiased overflow-x-hidden">
      
      {/* Sticky Top Navigation */}
      <Navbar onApplyClick={openApplyModal} onTourClick={openTourModal} />

      {/* Main Pages content layout */}
      <main className="relative">
        {/* Hero Section */}
        <Hero onApplyClick={openApplyModal} onTourClick={openTourModal} />

        {/* About Section */}
        <About />

        {/* Academics Section */}
        <Academics onApplyClick={openApplyModal} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Stats Section */}
        <Stats />

        {/* Facilities Section */}
        <Facilities onTourClick={openTourModal} />

        {/* Gallery Section with lightbox */}
        <Gallery />

        {/* Testimonials */}
        <Testimonials />

        {/* Admissions guide */}
        <Admissions onApplyClick={openApplyModal} />

        {/* Contact details + active forms */}
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Dynamic Global Admission/Tour Modal Overlay */}
      <AdmissionModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        defaultMode={modalMode} 
      />

      {/* Back to Top floating Trigger */}
      <div className={`fixed bottom-6 right-6 z-30 flex flex-col gap-3 transition-all duration-300 ${
        showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}>
        {/* Floating WhatsApp Quick launcher */}
        <a
          href={`https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=Hello%20Promiseland%20Schools,%20I'd%20like%20to%20discuss%20admissions.`}
          target="_blank"
          referrerPolicy="no-referrer"
          className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1 duration-200"
          title="Direct WhatsApp Messenger"
        >
          <LucideIcon name="MessageSquare" size={20} />
        </a>

        {/* Scroll back to top */}
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 text-white flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all shadow-lg duration-200 hover:-translate-y-1 cursor-pointer"
          title="Scroll to Top"
        >
          <LucideIcon name="ChevronLeft" size={20} className="rotate-90 text-brand-orange hover:text-white" />
        </button>
      </div>

    </div>
  );
}
