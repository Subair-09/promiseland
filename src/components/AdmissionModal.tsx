import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data';
import { LucideIcon } from './LucideIcon';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode: 'apply' | 'tour';
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({ isOpen, onClose, defaultMode }) => {
  const [mode, setMode] = useState<'apply' | 'tour'>(defaultMode);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  // Apply Form State
  const [applyForm, setApplyForm] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    academicLevel: 'primary',
    additionalNotes: ''
  });

  // Tour Form State
  const [tourForm, setTourForm] = useState({
    parentName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '10:00',
    studentCount: '1'
  });

  if (!isOpen) return null;

  // React to prop default updates when modal mounts
  const handleApplyChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setApplyForm(prev => ({ ...prev, [name]: value }));
  };

  const handleTourChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTourForm(prev => ({ ...prev, [name]: value }));
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      const existing = JSON.parse(localStorage.getItem('promiseland_applications') || '[]');
      const finalRecord = {
        id: 'app_' + Date.now(),
        ...applyForm,
        status: 'Pending',
        createdAt: new Date().toISOString()
      };
      localStorage.setItem('promiseland_applications', JSON.stringify([...existing, finalRecord]));
      setStatus('success');
    }, 1200);
  };

  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      const existing = JSON.parse(localStorage.getItem('promiseland_tours') || '[]');
      const finalRecord = {
        id: 'tour_' + Date.now(),
        ...tourForm,
        createdAt: new Date().toISOString()
      };
      localStorage.setItem('promiseland_tours', JSON.stringify([...existing, finalRecord]));
      setStatus('success');
    }, 1200);
  };

  const handleReset = () => {
    setStatus('idle');
    setApplyForm({
      studentName: '',
      parentName: '',
      email: '',
      phone: '',
      academicLevel: 'primary',
      additionalNotes: ''
    });
    setTourForm({
      parentName: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '10:00',
      studentCount: '1'
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      
      {/* Modal Container */}
      <div 
        className="bg-white rounded-3xl w-full max-w-lg shadow-2xl relative overflow-hidden border border-slate-100 flex flex-col justify-between my-8 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-slate-950 text-white p-6 relative">
          {/* Subtle branding orange accents detail */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/15 rounded-full blur-2xl"></div>

          <div className="flex justify-between items-center relative z-10 text-left">
            <div>
              <span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest font-mono">Promiseland Gateway</span>
              <h3 className="font-display font-black text-xl text-white mt-1">
                {mode === 'apply' ? 'Admission Form Portal' : 'Book a Campus Visit'}
              </h3>
            </div>
            <button 
              onClick={handleReset}
              className="p-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Close Panel"
            >
              <LucideIcon name="X" size={16} />
            </button>
          </div>

          {/* Tab Options */}
          {status === 'idle' && (
            <div className="flex mt-6 gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-850 relative z-10 w-full select-none">
              <button
                onClick={() => setMode('apply')}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all text-center ${
                  mode === 'apply' ? 'bg-brand-orange text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Admission Entry
              </button>
              <button
                onClick={() => setMode('tour')}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all text-center ${
                  mode === 'tour' ? 'bg-brand-orange text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Schedule Tour
              </button>
            </div>
          )}
        </div>

        {/* Modal Dynamic Body */}
        <div className="p-6 md:p-8 flex-grow">
          {status === 'success' ? (
            <div className="py-8 text-center animate-fade-in space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <LucideIcon name="Check" size={32} />
              </div>
              <h4 className="font-display font-black text-slate-900 text-lg">
                {mode === 'apply' ? 'Admission Form Logged!' : 'Visit Booked with Success!'}
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed max-w-xs mx-auto font-sans">
                {mode === 'apply' 
                  ? 'Your student profile is mapped. We will message your phone coordinate within 2 working days to schedule assessment papers.' 
                  : 'Your visitor slot is reserved. We look forward to meeting your family at 3, Adeola Makinde Way, Ikotun.'}
              </p>
              
              <div className="pt-4 space-y-3">
                <button
                  onClick={handleReset}
                  className="w-full py-3 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-xl text-xs font-bold tracking-wider uppercase transition-all shadow-md-orange shadow shadow-brand-orange/20"
                >
                  Return to Landing Page
                </button>
                <div className="text-[10px] text-slate-400 font-sans inline-block">
                  Support Desk: {SCHOOL_INFO.phones[0]}
                </div>
              </div>
            </div>
          ) : status === 'submitting' ? (
            <div className="py-16 text-center space-y-4 flex flex-col items-center justify-center">
              <div className="w-12 h-12 border-4 border-slate-100 border-t-brand-orange rounded-full animate-spin"></div>
              <p className="text-sm font-bold text-slate-600 font-sans">Processing Form Coordinates...</p>
              <p className="text-xs text-slate-400 max-w-xs font-sans">Writing details to regional student roster database securely.</p>
            </div>
          ) : (
            /* Mode forms */
            <div className="text-left animate-fade-in">
              {mode === 'apply' ? (
                /* Admission application Form */
                <form onSubmit={handleApplySubmit} className="space-y-4">
                  
                  <div className="space-y-1">
                    <label htmlFor="modal-parentName" className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Parent/Guardian Name *</label>
                    <input
                      id="modal-parentName"
                      type="text"
                      name="parentName"
                      value={applyForm.parentName}
                      onChange={handleApplyChange}
                      placeholder="e.g. Mrs. Chioma Adeleke"
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs font-sans focus:outline-none focus:ring-2 focus:ring-brand-orange/25"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="modal-studentName" className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Child's Full Name *</label>
                      <input
                        id="modal-studentName"
                        type="text"
                        name="studentName"
                        value={applyForm.studentName}
                        onChange={handleApplyChange}
                        placeholder="e.g. Daniel Adeleke"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs font-sans focus:outline-none focus:ring-2 focus:ring-brand-orange/25"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="modal-academicLevel" className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Target Entry Grade *</label>
                      <select
                        id="modal-academicLevel"
                        name="academicLevel"
                        value={applyForm.academicLevel}
                        onChange={handleApplyChange}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs font-sans focus:outline-none focus:ring-2 focus:ring-brand-orange/25"
                      >
                        <option value="creche">Creche (3–18 Months)</option>
                        <option value="nursery">Nursery School (1.5–5 Years)</option>
                        <option value="primary">Primary School (5–11 Years)</option>
                        <option value="college">Secondary School (11–17 Years)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="modal-apply-email" className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Guardian Email *</label>
                      <input
                        id="modal-apply-email"
                        type="email"
                        name="email"
                        value={applyForm.email}
                        onChange={handleApplyChange}
                        placeholder="guardian@example.com"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs font-sans focus:outline-none focus:ring-2 focus:ring-brand-orange/25"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="modal-apply-phone" className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Active WhatsApp Phone *</label>
                      <input
                        id="modal-apply-phone"
                        type="tel"
                        name="phone"
                        value={applyForm.phone}
                        onChange={handleApplyChange}
                        placeholder="08023154768"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs font-sans focus:outline-none focus:ring-2 focus:ring-brand-orange/25"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1 font-sans">
                    <label htmlFor="modal-apply-additionalNotes" className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Special Health / Cognitive Notes (Optional)</label>
                    <textarea
                      id="modal-apply-additionalNotes"
                      name="additionalNotes"
                      value={applyForm.additionalNotes}
                      onChange={handleApplyChange}
                      placeholder="Mention any former academic records or individual care guides requested..."
                      rows={2}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-orange/25 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-brand-orange/20 active:scale-95 duration-100 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <LucideIcon name="ShieldCheck" size={14} />
                    <span>File Admission Application</span>
                  </button>
                </form>
              ) : (
                /* Book a school tour Form */
                <form onSubmit={handleTourSubmit} className="space-y-4">
                  
                  <div className="space-y-1">
                    <label htmlFor="modal-tour-parent" className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Full Visitor Name *</label>
                    <input
                      id="modal-tour-parent"
                      type="text"
                      name="parentName"
                      value={tourForm.parentName}
                      onChange={handleTourChange}
                      placeholder="e.g. Dr. Funmi Alao"
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs font-sans focus:outline-none focus:ring-2 focus:ring-brand-orange/25"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="modal-tour-email" className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Email Address *</label>
                      <input
                        id="modal-tour-email"
                        type="email"
                        name="email"
                        value={tourForm.email}
                        onChange={handleTourChange}
                        placeholder="parents@example.com"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs font-sans focus:outline-none focus:ring-2 focus:ring-brand-orange/25"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="modal-tour-phone" className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Mobile GSM Phone *</label>
                      <input
                        id="modal-tour-phone"
                        type="tel"
                        name="phone"
                        value={tourForm.phone}
                        onChange={handleTourChange}
                        placeholder="08023154768"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs font-sans focus:outline-none focus:ring-2 focus:ring-brand-orange/25"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="modal-tour-date" className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Preferred Visit Date *</label>
                      <input
                        id="modal-tour-date"
                        type="date"
                        name="preferredDate"
                        value={tourForm.preferredDate}
                        onChange={handleTourChange}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs font-sans focus:outline-none focus:ring-2 focus:ring-brand-orange/25"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="modal-tour-time" className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Preferred Hour Slot</label>
                      <select
                        id="modal-tour-time"
                        name="preferredTime"
                        value={tourForm.preferredTime}
                        onChange={handleTourChange}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs font-sans focus:outline-none focus:ring-2 focus:ring-brand-orange/25"
                      >
                        <option value="09:00">09:00 AM (Morning session)</option>
                        <option value="11:00">11:00 AM (Class observation)</option>
                        <option value="13:00">01:00 PM (Middle-day recess)</option>
                        <option value="15:00">03:00 PM (Afternoon pickup)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="modal-tour-count" className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Estimated Visitors Count</label>
                    <select
                      id="modal-tour-count"
                      name="studentCount"
                      value={tourForm.studentCount}
                      onChange={handleTourChange}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs font-sans focus:outline-none focus:ring-2 focus:ring-brand-orange/25"
                    >
                      <option value="1">1 Parent + candidate child</option>
                      <option value="2">2 Parents + child scholar</option>
                      <option value="3">Multiple family members</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-brand-orange/20 active:scale-95 duration-100 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <LucideIcon name="Calendar" size={14} />
                    <span>Register Campus Visit Slot</span>
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
