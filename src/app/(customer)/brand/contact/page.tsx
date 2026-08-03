'use client';

import React, { useState } from 'react';
import ScrollReveal from '@/components/common/ScrollReveal';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building2 } from 'lucide-react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
      });
    }, 4000);
  };

  return (
    <main className="w-full min-h-screen bg-white select-none pt-24 sm:pt-28 pb-20">
      {/* 1. Contact Us Hero Banner */}
      <section className="relative w-full py-12 sm:py-16 bg-gradient-to-b from-slate-50 via-sky-50/30 to-white border-b border-slate-200/60 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <ScrollReveal variant="slide-left" delay={100} duration={800}>
              <span className="text-brand-primary text-xs font-label font-extrabold tracking-[1.8px] uppercase block">
                DERMALINE KOREA · CORPORATE LOCATION
              </span>
            </ScrollReveal>

            <ScrollReveal variant="slide-left" delay={200} duration={800}>
              <h1 className="font-headline text-3xl sm:text-4xl lg:text-[44px] font-semibold text-slate-900 tracking-tight leading-snug">
                Contact Us &{' '}
                <span className="font-serif-display italic font-normal text-brand-primary block sm:inline">
                  Headquarters Location
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="slide-left" delay={300} duration={800}>
              <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
                Connect with Dermaline Korea’s medical R&D center, customer support unit, and global clinical distribution partners.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Interactive Map & Contact Information */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (6 Cols): Google Maps Embed & Corporate Info */}
          <div className="lg:col-span-6 space-y-6">
            {/* Google Map iFrame Embed */}
            <ScrollReveal variant="fade-up" delay={100} duration={750}>
              <div className="w-full h-80 sm:h-96 rounded-none sm:rounded-sm overflow-hidden border border-slate-200 shadow-sm relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.3951503667804!2d127.19179341559553!3d37.545752979801826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cb16f5db1f47b%3A0x6a84de5653b1137!2sHanam%20Techno%20Valley%20U1%20CENTER!5e0!3m2!1sen!2skr!4v1650873475389!5m2!1sen!2skr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dermaline Korea Headquarters Map"
                  className="w-full h-full"
                />
              </div>
            </ScrollReveal>

            {/* Official Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ScrollReveal variant="fade-up" delay={200} duration={750}>
                <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-none sm:rounded-sm space-y-2 h-full">
                  <div className="flex items-center gap-2 text-brand-primary">
                    <MapPin className="w-4 h-4 stroke-[2]" />
                    <span className="font-label text-xs font-bold uppercase tracking-wider">
                      Headquarters Address
                    </span>
                  </div>
                  <p className="font-body text-slate-700 text-xs sm:text-sm leading-relaxed">
                    12982 947, Hanam-daero, Hanam-si, Gyeonggi-do (Pungsan-dong) Hanam Techno Valley U1CENTER D 904, South Korea
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={250} duration={750}>
                <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-none sm:rounded-sm space-y-2 h-full">
                  <div className="flex items-center gap-2 text-brand-primary">
                    <Phone className="w-4 h-4 stroke-[2]" />
                    <span className="font-label text-xs font-bold uppercase tracking-wider">
                      Customer Center
                    </span>
                  </div>
                  <p className="font-body text-slate-900 font-semibold text-sm sm:text-base">
                    031-8027-6676
                  </p>
                  <p className="font-body text-slate-500 text-xs flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 stroke-[1.75]" />
                    Mon - Fri: 09:00 - 18:00 (KST)
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={300} duration={750}>
                <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-none sm:rounded-sm space-y-2 h-full">
                  <div className="flex items-center gap-2 text-brand-primary">
                    <Mail className="w-4 h-4 stroke-[2]" />
                    <span className="font-label text-xs font-bold uppercase tracking-wider">
                      Email Inquiries
                    </span>
                  </div>
                  <a
                    href="mailto:jeonjs@dermaline.co.kr"
                    className="font-body text-slate-900 font-semibold text-xs sm:text-sm hover:text-brand-primary transition-colors block"
                  >
                    jeonjs@dermaline.co.kr
                  </a>
                  <span className="font-body text-slate-400 text-xs block">
                    Kelly Jun (Personal Info Manager)
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={350} duration={750}>
                <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-none sm:rounded-sm space-y-2 h-full">
                  <div className="flex items-center gap-2 text-brand-primary">
                    <Building2 className="w-4 h-4 stroke-[2]" />
                    <span className="font-label text-xs font-bold uppercase tracking-wider">
                      Corporate Registration
                    </span>
                  </div>
                  <p className="font-body text-slate-700 text-xs leading-relaxed">
                    <strong className="text-slate-900">CEO:</strong> Wang Honggeun<br />
                    <strong className="text-slate-900">Reg No:</strong> 7658600038<br />
                    <strong className="text-slate-900">E-Commerce Permit:</strong> 제2018-경기하남-0624호
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Column (6 Cols): Inquiry Form */}
          <div className="lg:col-span-6">
            <ScrollReveal variant="fade-up" delay={150} duration={750}>
              <div className="p-6 sm:p-8 bg-white border border-slate-200/90 rounded-none sm:rounded-sm shadow-xs space-y-6">
                <div className="space-y-1">
                  <h2 className="font-headline font-semibold text-xl sm:text-2xl text-slate-900">
                    Send Us a Message
                  </h2>
                  <p className="font-body text-slate-500 text-xs sm:text-sm">
                    Have questions about clinical products or B2B salon distribution? Fill out the form below.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-12 text-center space-y-3 bg-emerald-50 border border-emerald-200 rounded-none sm:rounded-sm p-6">
                    <CheckCircle2 className="w-12 h-12 stroke-[1.75] text-emerald-600 mx-auto" />
                    <h3 className="font-headline font-semibold text-lg text-slate-900">
                      Message Sent Successfully!
                    </h3>
                    <p className="font-body text-slate-600 text-xs sm:text-sm max-w-sm mx-auto">
                      Thank you for contacting Dermaline Korea. Our clinical representative will respond shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-label text-xs font-bold text-slate-700 uppercase tracking-wider block">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full h-11 px-4 text-xs sm:text-sm font-body border border-slate-300 focus:border-brand-primary focus:outline-none rounded-none sm:rounded-sm bg-slate-50/50"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-label text-xs font-bold text-slate-700 uppercase tracking-wider block">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full h-11 px-4 text-xs sm:text-sm font-body border border-slate-300 focus:border-brand-primary focus:outline-none rounded-none sm:rounded-sm bg-slate-50/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-label text-xs font-bold text-slate-700 uppercase tracking-wider block">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+82 10-1234-5678"
                          className="w-full h-11 px-4 text-xs sm:text-sm font-body border border-slate-300 focus:border-brand-primary focus:outline-none rounded-none sm:rounded-sm bg-slate-50/50"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-label text-xs font-bold text-slate-700 uppercase tracking-wider block">
                          Inquiry Subject
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full h-11 px-4 text-xs sm:text-sm font-body border border-slate-300 focus:border-brand-primary focus:outline-none rounded-none sm:rounded-sm bg-slate-50/50 text-slate-900"
                        >
                          <option value="General Inquiry">General Product Inquiry</option>
                          <option value="B2B Salon Distribution">B2B Clinic / Salon Distribution</option>
                          <option value="Salmon PDRN Consultation">Salmon PDRN Formulation Consultation</option>
                          <option value="International Export">International Export Partnership</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-label text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        Your Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please write your inquiry details..."
                        className="w-full p-4 text-xs sm:text-sm font-body border border-slate-300 focus:border-brand-primary focus:outline-none rounded-none sm:rounded-sm bg-slate-50/50"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full h-12 bg-slate-900 text-white font-label text-xs font-bold uppercase tracking-wider hover:bg-brand-primary transition-colors rounded-none sm:rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>SEND INQUIRY</span>
                      <Send className="w-4 h-4 stroke-[2]" />
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
