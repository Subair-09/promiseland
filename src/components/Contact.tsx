import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data';
import { LucideIcon } from './LucideIcon';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SCHOOL_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    
    // Simulate API request and persist to localStorage
    setTimeout(() => {
      const existingInquiries = JSON.parse(localStorage.getItem('promiseland_contact_inquiries') || '[]');
      const newInquiry = {
        id: 'ci_' + Date.now(),
        ...formData,
        createdAt: new Date().toISOString()
      };
      
      localStorage.setItem('promiseland_contact_inquiries', JSON.stringify([...existingInquiries, newInquiry]));
      
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background glow visual blobs */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold tracking-wide mb-4 uppercase">
            Let's Start Talking
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-none">
            Get In Touch With Us
          </h2>
          <p className="mt-4 text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
            Have questions about fees, entrance schedule papers, uniform guidelines, or curricular activities? Fill our form or visit our campus. Our staff is ready to assist.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start mt-6 text-left">
          
          {/* Left Column: School Contact Info & Google Map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Metrics Cards */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-150 shadow-sm space-y-6">
              
              {/* Address card */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <LucideIcon name="MapPin" size={18} />
                </div>
                <div className="space-y-1.5 flex-grow">
                  <h4 className="font-display font-black text-sm text-slate-900 leading-tight">Physical Campus Location</h4>
                  <p className="text-slate-600 text-xs leading-relaxed font-sans">{SCHOOL_INFO.address}</p>
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-orange hover:text-brand-orange-hover"
                  >
                    <LucideIcon name={copied ? 'Check' : 'Plus'} size={12} />
                    <span>{copied ? 'Copied with Success!' : 'Copy Physical Address'}</span>
                  </button>
                </div>
              </div>

              {/* Phone card */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <LucideIcon name="Phone" size={18} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-black text-sm text-slate-900 leading-tight">Direct Admissions Desk</h4>
                  <p className="text-slate-600 text-xs font-sans">
                    {SCHOOL_INFO.phones[0]} <span className="text-slate-300">|</span> {SCHOOL_INFO.phones[1]}
                  </p>
                  <p className="text-[10px] text-slate-400 font-sans">Available Monday - Friday, 7:30 AM – 4:00 PM</p>
                </div>
              </div>

              {/* Official Email card */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <LucideIcon name="Mail" size={18} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-black text-sm text-slate-900 leading-tight">Official Admissions Email</h4>
                  <p className="text-slate-600 text-xs font-sans hover:text-brand-orange transition-colors">
                    <a href={`mailto:${SCHOOL_INFO.email}`}>{SCHOOL_INFO.email}</a>
                  </p>
                </div>
              </div>

            </div>

            {/* Google Map Embedded Frame */}
            <div className="bg-white p-4 rounded-2xl border border-slate-150 shadow-sm relative overflow-hidden group">
              <div className="w-full h-64 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-300 bg-slate-100">
                <iframe
                  title="Promiseland Schools Google Map Location"
                  src={SCHOOL_INFO.googleMapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                ></iframe>
              </div>
              <div className="mt-3 flex justify-between items-center px-2">
                <p className="text-[10px] font-mono text-slate-500">Ikotun, Alimosho Local Govt, Lagos</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="text-[10px] text-brand-orange font-bold uppercase tracking-wider flex items-center gap-1"
                >
                  open directions
                  <LucideIcon name="ExternalLink" size={10} />
                </a>
              </div>
            </div>

            {/* Quick WhatsApp Action Button inside contact section */}
            <a
              href={`https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=Hello%20Promiseland%20Schools,%20I'd%20like%20to%20discuss%20admissions%20availability.`}
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center justify-center gap-2.5 w-full py-4 px-6 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl tracking-wide shadow-md shadow-emerald-500/20 active:scale-95 transition-transform duration-200 text-center"
            >
              <LucideIcon name="MessageSquare" size={18} />
              <span>Initiate Direct Admission Chat on WhatsApp</span>
            </a>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-150 shadow-sm">
            <h3 className="font-display font-black text-xl text-slate-900 leading-tight mb-2">
              Send An Instant Inquiry Message
            </h3>
            <p className="text-slate-500 text-xs font-sans mb-8">
              Fill out the particulars below. Your inquiry is mapped securely to our regional admissions coordinator who will give you a call within one business day.
            </p>

            {/* Form submission success state */}
            {status === 'success' ? (
              <div className="py-12 text-center animate-fade-in space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <LucideIcon name="Check" size={32} />
                </div>
                <h4 className="font-display font-black text-slate-900 text-lg">Inquiry Successfully Transmitted!</h4>
                <p className="text-slate-600 text-xs leading-relaxed max-w-sm mx-auto font-sans">
                  Thank you for showing interest in Promiseland Schools, Lagos. A certified admissions officer has been assigned to review your coordinates and will follow up with an assessment booklet.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 bg-slate-950 text-white hover:bg-slate-850 rounded-xl text-xs font-bold transition-all mt-4 inline-block shadow-md select-none"
                >
                  Compose Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Visual warning on submission failure */}
                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-700 text-xs flex items-center gap-2.5 leading-normal">
                    <LucideIcon name="X" size={16} className="text-red-500 shrink-0" />
                    <span>Oops! Please provide your name, valid phone number, and detailed enquiry message so we can trace your request.</span>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="text-left space-y-2">
                    <label htmlFor="name-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Your Full Name *</label>
                    <input
                      id="name-input"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Mr. Olusegun Adeleke"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange bg-slate-50/50"
                      required
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="text-left space-y-2">
                    <label htmlFor="phone-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Your Phone Number *</label>
                    <input
                      id="phone-input"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 08058283202"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange bg-slate-50/50"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Email Input */}
                  <div className="text-left space-y-2">
                    <label htmlFor="email-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Your Email Address</label>
                    <input
                      id="email-input"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. olusegun@example.com"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange bg-slate-50/50"
                    />
                  </div>

                  {/* Subject Input */}
                  <div className="text-left space-y-2">
                    <label htmlFor="subject-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Subject Of Inquiry</label>
                    <select
                      id="subject-input"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange bg-slate-50/50"
                    >
                      <option value="General Inquiry">General School Inquiry</option>
                      <option value="Creche/Nursery Admission">Creche & Nursery School Admissions</option>
                      <option value="Primary Admission">Primary School Admissions</option>
                      <option value="Senior College Admission">Secondary School (College) Admissions</option>
                      <option value="Employment Options">Careers / Employment Openings</option>
                    </select>
                  </div>
                </div>

                {/* Message Input */}
                <div className="text-left space-y-2">
                  <label htmlFor="message-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Your Detailed Message *</label>
                  <textarea
                    id="message-input"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Provide details of your scholars (e.g. ages, preferred entry level) or ask questions about boarding options, school uniforms..."
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange bg-slate-50/50 resize-y"
                    required
                  ></textarea>
                </div>

                {/* Submit Trigger Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 bg-brand-orange hover:bg-brand-orange-hover disabled:bg-slate-350 text-white font-bold rounded-xl text-sm uppercase tracking-wider transition-all shadow shadow-brand-orange/20 hover:shadow-brand-orange/45 select-none active:scale-95 transform duration-150 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-4.5 h-4.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Dispatching Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <LucideIcon name="Send" size={14} />
                      <span>Transmit Message Online</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>

    </section>
  );
};
