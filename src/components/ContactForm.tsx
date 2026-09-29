'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, Phone, AlertCircle, Clock } from 'lucide-react';
import { siteConfig, servicesData } from '@/data/siteData';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    region: 'Nairobi',
    timeline: 'Immediate (1-2 weeks)',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Basic validation
    if (!formState.name.trim() || !formState.email.trim() || !formState.phone.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and phone number.');
      return;
    }

    // Simulate instant secure form handling
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Wakisha Electrical! My name is ${formState.name || 'Client'}. ` +
      `I'm inquiring about ${formState.service || 'Electrical Engineering Services'} in ${formState.region}. ` +
      `${formState.message ? `Details: ${formState.message}` : ''}`
    );
    window.open(`https://wa.me/254721270075?text=${text}`, '_blank');
  };

  return (
    <div id="quote" className="rounded-2xl bg-white p-6 sm:p-10 shadow-xl border border-slate-200">
      {status === 'success' ? (
        <div className="text-center py-10 space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Inquiry Received!</h3>
          <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base">
            Thank you, <strong className="text-slate-900">{formState.name}</strong>. A Wakisha technical engineer has been notified and will contact you at <strong className="text-slate-900">{formState.phone}</strong> or <strong className="text-slate-900">{formState.email}</strong> within 2-4 business hours.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => {
                setStatus('idle');
                setFormState({
                  name: '',
                  email: '',
                  phone: '',
                  service: '',
                  region: 'Nairobi',
                  timeline: 'Immediate (1-2 weeks)',
                  message: '',
                });
              }}
              className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
            >
              Submit Another Request
            </button>
            <button
              onClick={handleWhatsAppDirect}
              className="px-5 py-2.5 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-2xl font-black text-slate-900">Request A Technical Consultation &amp; Quote</h3>
            <p className="text-slate-600 text-sm">
              Speak directly with an electrical engineer. Fill in your project specifications below.
            </p>
          </div>

          {status === 'error' && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
              <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Full Name <span className="text-orange-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="e.g. Eng. Joseph Kamau"
                className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-slate-900 text-sm transition-all"
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Email Address <span className="text-orange-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="e.g. kamau@example.com"
                className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-slate-900 text-sm transition-all"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Phone / WhatsApp <span className="text-orange-600">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                autoComplete="tel"
                value={formState.phone}
                onChange={handleChange}
                placeholder="e.g. +254 700 000 000"
                className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-slate-900 text-sm transition-all"
              />
            </div>

            {/* Service Interested In */}
            <div>
              <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Service of Interest
              </label>
              <select
                id="service"
                name="service"
                value={formState.service}
                onChange={handleChange}
                className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-slate-900 text-sm transition-all"
              >
                <option value="">-- Select Engineering Service --</option>
                <option value="Solar PV & Renewable Energy">Solar PV &amp; Renewable Energy (e.g. Utawala)</option>
                <option value="High-Security Electric Fence">High-Security Electric Fencing (e.g. Wajir)</option>
                <option value="Architectural & Commercial Lighting">Architectural &amp; Commercial Lighting (Hayat / Erita)</option>
                <option value="Home & Building Automation">Home &amp; Smart Building Automation</option>
                <option value="Project Management & Site Supervision">Project Management &amp; Site Supervision</option>
                <option value="Technical Due Diligence & Bank Audit">Technical Due Diligence &amp; Bank Audits</option>
                <option value="FIDIC & BauKG Health & Safety Planning">FIDIC &amp; BauKG Safety Planning</option>
                <option value="Power Transmission & Load Optimization">Power Transmission &amp; Load Optimization</option>
              </select>
            </div>

            {/* Regional Location in Kenya */}
            <div>
              <label htmlFor="region" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Project Region (Kenya)
              </label>
              <select
                id="region"
                name="region"
                value={formState.region}
                onChange={handleChange}
                className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-slate-900 text-sm transition-all"
              >
                <option value="Nairobi (Headquarters)">Nairobi County (Headquarters)</option>
                <option value="Coast Region (Mombasa, Kilifi, Kwale, etc.)">Coast Region (Mombasa, Kilifi, Kwale)</option>
                <option value="Western Region (Kisumu, Kakamega, Eldoret, etc.)">Western Region (Kisumu, Kakamega, Eldoret)</option>
                <option value="Central Region (Kiambu, Nyeri, Muranga, etc.)">Central Region (Kiambu, Nyeri, Murang&apos;a)</option>
                <option value="Eastern Region (Machakos, Embu, Meru, etc.)">Eastern Region (Machakos, Embu, Meru)</option>
                <option value="North Eastern (Wajir, Garissa, Mandera, etc.)">North Eastern (Wajir, Garissa, Mandera)</option>
                <option value="Other Kenyan Territory">Other Kenyan Territory</option>
              </select>
            </div>

            {/* Timeline */}
            <div>
              <label htmlFor="timeline" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Desired Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formState.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-slate-900 text-sm transition-all"
              >
                <option value="Immediate (1-2 weeks)">Immediate (Next 1-2 weeks)</option>
                <option value="1 to 3 months">Planning (1 to 3 months)</option>
                <option value="Long term / Tender stage">Long Term / Future Tender</option>
                <option value="Emergency Breakdown / Audit">Emergency Breakdown / Urgent Audit</option>
              </select>
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Project Description / Scope of Works
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formState.message}
              onChange={handleChange}
              placeholder="Tell us about the property, required power load, estimated square footage, solar capacity or engineering challenges..."
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-slate-900 text-sm transition-all resize-y"
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{status === 'submitting' ? 'Submitting Inquiry...' : 'Submit Consultation Request'}</span>
            </button>

            <button
              type="button"
              onClick={handleWhatsAppDirect}
              className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat Immediately via WhatsApp</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Guaranteed engineer response within 2-4 hours. We never share your contact details.</span>
          </div>
        </form>
      )}
    </div>
  );
}
