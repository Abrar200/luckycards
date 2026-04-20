import React, { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { supabase } from '@/lib/supabase';
import { CardEnvelopeIcon, ChipCheckIcon } from '@/components/lucky/CasinoIcons';

interface FormData {
  companyName: string;
  contactName: string;
  email: string;
  platformType: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactName: '',
    email: '',
    platformType: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!formData.companyName.trim()) e.companyName = 'Required';
    if (!formData.contactName.trim()) e.contactName = 'Required';
    if (!formData.email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Invalid email';
    if (!formData.platformType) e.platformType = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  
  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
  
    setSubmitting(true);
    setSubmitError(null);
  
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: formData.companyName.trim(),
          contactName: formData.contactName.trim(),
          email: formData.email.trim().toLowerCase(),
          platformType: formData.platformType,
          message: formData.message.trim(),
        }),
      });
  
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
    } catch {
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
    if (submitError) setSubmitError(null);
  };

  const inputCls = (err?: string) =>
    `w-full px-4 py-3 rounded-lg bg-white/[0.03] border ${
      err ? 'border-red-500/50' : 'border-white/[0.08]'
    } text-white placeholder-white/25 focus:outline-none focus:border-[#D4AF37]/40 transition-colors text-sm`;

  if (submitted) {
    return (
      <section id="contact" className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="relative z-10 max-w-lg mx-auto px-5 sm:px-8 text-center">
          <div className="p-10 rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/[0.03]">
            <div
              className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-5 text-black"
              style={{ background: 'linear-gradient(135deg, #D4AF37, #FFD700)' }}
            >
              <ChipCheckIcon size={28} />
            </div>
            <h3 className="text-xl font-bold text-white">Thank you</h3>
            <p className="mt-2 text-sm text-white/40">
              We'll be in touch within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ companyName: '', contactName: '', email: '', platformType: '', message: '' });
              }}
              className="mt-5 text-[#D4AF37] text-sm hover:underline"
            >
              Submit another enquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-5 gap-14">
          {/* Left */}
          <div
            className={`lg:col-span-2 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Request Integration
            </h2>
            <p className="mt-4 text-base text-white/40 leading-relaxed font-normal">
              Tell us about your platform and we'll get back to you within 24 hours.
            </p>

            <div className="mt-10 space-y-5">
              <div className="group flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white/60 border border-[#D4AF37]/15 bg-[#D4AF37]/[0.06] group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/30 group-hover:shadow-[0_0_16px_rgba(212,175,55,0.1)] transition-all duration-400">
                  <CardEnvelopeIcon size={18} />
                </div>
                <span className="text-sm text-white/40">hello@luckycards.com.au</span>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div
            className={`lg:col-span-3 transition-all duration-600 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {submitError && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/15 text-red-400 text-sm">
                  {submitError}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-white/50 mb-1.5">Company Name</label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => handleChange('companyName', e.target.value)}
                    className={inputCls(errors.companyName)}
                    placeholder="Company name"
                  />
                  {errors.companyName && <p className="mt-1 text-xs text-red-400">{errors.companyName}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/50 mb-1.5">Name</label>
                  <input
                    type="text"
                    value={formData.contactName}
                    onChange={(e) => handleChange('contactName', e.target.value)}
                    className={inputCls(errors.contactName)}
                    placeholder="Your name"
                  />
                  {errors.contactName && <p className="mt-1 text-xs text-red-400">{errors.contactName}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-white/50 mb-1.5">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={inputCls(errors.email)}
                    placeholder="you@company.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/50 mb-1.5">Platform Type</label>
                  <select
                    value={formData.platformType}
                    onChange={(e) => handleChange('platformType', e.target.value)}
                    className={`${inputCls(errors.platformType)} appearance-none cursor-pointer`}
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 12px center',
                    }}
                  >
                    <option value="" className="bg-[#111]">Select type</option>
                    <option value="casino" className="bg-[#111]">Casino Operator</option>
                    <option value="aggregator" className="bg-[#111]">Game Aggregator</option>
                    <option value="investor" className="bg-[#111]">Investor</option>
                    <option value="other" className="bg-[#111]">Other</option>
                  </select>
                  {errors.platformType && <p className="mt-1 text-xs text-red-400">{errors.platformType}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/50 mb-1.5">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  rows={4}
                  className={`${inputCls()} resize-none`}
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto px-8 py-3 text-sm font-semibold text-black rounded-md transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-[#D4AF37]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg, #D4AF37, #FFD700)' }}
              >
                {submitting ? 'Sending...' : 'Submit Enquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
