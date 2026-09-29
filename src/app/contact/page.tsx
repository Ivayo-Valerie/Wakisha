import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ShieldCheck,
  Zap,
  HelpCircle
} from 'lucide-react';
import { siteConfig } from '@/data/siteData';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Wakisha Electrical Engineering & Sales Services',
  description:
    'Contact Wakisha Electrical Engineering in Nairobi, Kenya. Phone: +254 721270075, Email: wakisha4@gmail.com. Offices and operations in Coast, Western, Central, and Eastern regions.',
};

export default function ContactPage() {
  const faqs = [
    {
      q: 'How do you guarantee the system won’t fail?',
      a: 'Through rigorous testing and proven follow-through procedures. Every switchboard, solar PV inverter, and fence energizer undergoes multi-stage load simulation and inspection prior to handover.',
    },
    {
      q: 'Will this save or make me money?',
      a: 'By optimizing circuits to eliminate signal loss and power waste. Our engineering audits systematically eliminate reactive power penalties, faulty neutral sizing, and low-efficiency lighting.',
    },
    {
      q: 'Will I be left in the dark during project execution?',
      a: 'We operate with transparent, milestone-based communication. Project owners and developers receive scheduled progress reports, site photo logs, and direct access to lead inspection engineers.',
    },
    {
      q: 'Can this design grow with my business?',
      a: 'We design modular, forward-compatible system architectures. Whether scaling solar capacity from 20kW to 100kW or expanding security fence zones, our layouts allow seamless expansion without teardowns.',
    },
    {
      q: 'Which regions across Kenya does Wakisha service?',
      a: 'Wakisha is headquartered in Nairobi with operational teams deployed across the Coast (Mombasa, Kilifi, Kwale), Western (Kisumu, Kakamega, Eldoret), Central (Kiambu, Nyeri), and Eastern (Machakos, Wajir, Garissa) regions.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
            Connect With Our Engineering Team
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            CONTACT WAKISHA
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Let&apos;s maximize your system&apos;s power transmission and load capacity together. Reach out for inspections, solar sizing, or technical project management.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Info Card */}
              <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm space-y-6">
                <h2 className="text-xl font-black text-slate-900 border-b border-slate-100 pb-4">
                  Headquarters &amp; Direct Channels
                </h2>

                <ul className="space-y-5 text-sm text-slate-700">
                  <li className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-bold">Nairobi Headquarters</strong>
                      <span>Kenya — Managing nationwide projects in Coast, Western, Central &amp; Eastern regions</span>
                    </div>
                  </li>

                  <li className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Telephone &amp; WhatsApp</div>
                      <a
                        href={`tel:${siteConfig.phoneClean}`}
                        className="font-bold text-slate-900 hover:text-orange-600 text-base transition-colors"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Official Inquiry Email</div>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="font-bold text-slate-900 hover:text-orange-600 transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-bold">Operating Hours</strong>
                      <span>Mon - Fri: 8:00 AM - 5:30 PM</span>
                      <br />
                      <span>Sat: 8:30 AM - 2:00 PM</span>
                      <div className="text-xs text-orange-600 font-bold mt-1">
                        24/7 Rapid Emergency Engineering Callout
                      </div>
                    </div>
                  </li>
                </ul>

                {/* Instant WhatsApp Action */}
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Start Instant WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* Handshake / Partnership Image (from Slide 8) */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md relative aspect-[16/10] bg-slate-900">
                <Image
                  src="/assets/business-handshake.jpg"
                  alt="Wakisha partnership agreement and technical consultation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex items-end p-6">
                  <div className="text-white text-xs font-medium">
                    <span className="text-amber-400 font-bold block text-sm">
                      Transparent Milestone-Based Delivery
                    </span>
                    Dedicated client advocate on every engineering assignment.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="mt-20 pt-12 border-t border-slate-200">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
                <HelpCircle className="w-3.5 h-3.5" />
                Frequently Addressed Inquiries
              </div>
              <h2 className="text-3xl font-black text-slate-900">
                Engineering Clarity &amp; FAQs
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {faqs.map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                    <span className="text-orange-600 font-black shrink-0">Q:</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed pl-5">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
