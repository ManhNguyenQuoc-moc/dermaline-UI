'use client';

import React, { useState } from 'react';
import { Modal } from 'antd';
import GSelect from '@/@core/component/Antd/Select';
import GButton from '@/@core/component/Antd/Button';

interface SubmitFaqModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SubmitFaqModal({ open, onClose }: SubmitFaqModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    categoryTag: 'post-laser',
    title: '',
    question: '',
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
        categoryTag: 'post-laser',
        title: '',
        question: '',
      });
      onClose();
    }, 3000);
  };

  const categoryOptions = [
    { label: 'Post-Laser / Peel / Microneedling Care', value: 'post-laser' },
    { label: 'Salmon PDRN & Bio-Exosome Tech', value: 'pdrn-tech' },
    { label: 'Daily Clinical Care Routines', value: 'routines' },
    { label: 'Specialty 1000ml Salon Range', value: 'salon-1000ml' },
    { label: 'Safety & ISO Certifications', value: 'safety' },
  ];

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={680}
      centered
      className="[&_.ant-modal-content]:!p-0 [&_.ant-modal-content]:!rounded-tl-2xl [&_.ant-modal-content]:!rounded-tr-[48px] [&_.ant-modal-content]:!rounded-br-2xl [&_.ant-modal-content]:!rounded-bl-[48px] overflow-hidden"
    >
      <div className="w-full bg-white">
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 space-y-2">
          <span className="text-[11px] font-label font-bold text-brand-primary uppercase tracking-widest block">
            DERMALINE CLINICAL CONSULTATION
          </span>
          <h2 className="font-headline font-bold text-xl sm:text-2xl text-white">
            Submit Your Dermatological Question
          </h2>
          <p className="font-body text-xs sm:text-sm text-slate-300">
            Send your inquiry directly to Dermaline Korea’s R&D medical team. We will respond via Email and feature answered questions in our FAQ.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-10 text-center space-y-3 bg-sky-50/60 border border-sky-200 rounded-xl p-6">
              <span className="text-brand-primary text-xs font-label font-extrabold tracking-widest uppercase block">
                QUESTION SUBMITTED SUCCESSFULLY
              </span>
              <h3 className="font-headline font-bold text-lg text-slate-900">
                Thank You For Contacting Us!
              </h3>
              <p className="font-body text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                Dermaline Korea’s medical specialist team has received your question. A detailed response will be sent to your email within 24-48 business hours.
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
                    placeholder="John Doe"
                    className="w-full h-11 px-4 text-xs sm:text-sm font-body border border-slate-300 focus:border-brand-primary focus:outline-none rounded-lg bg-slate-50/50"
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
                    className="w-full h-11 px-4 text-xs sm:text-sm font-body border border-slate-300 focus:border-brand-primary focus:outline-none rounded-lg bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-label text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Inquiry Topic *
                </label>
                <GSelect
                  value={formData.categoryTag}
                  onChange={(val) => setFormData({ ...formData, categoryTag: val as string })}
                  options={categoryOptions}
                  className="w-full"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-label text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Question Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. How to use PDRN Magic Ampoule after CO2 fractional laser?"
                  className="w-full h-11 px-4 text-xs sm:text-sm font-body border border-slate-300 focus:border-brand-primary focus:outline-none rounded-lg bg-slate-50/50"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-label text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Detailed Question / Clinical Context *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  placeholder="Please describe your skin concern, symptoms, or product usage question..."
                  className="w-full p-4 text-xs sm:text-sm font-body border border-slate-300 focus:border-brand-primary focus:outline-none rounded-lg bg-slate-50/50"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-label text-xs font-bold uppercase rounded-full transition-colors cursor-pointer"
                >
                  CANCEL
                </button>

                <GButton type="primary" htmlType="submit">
                  SUBMIT QUESTION TO DERMALINE
                </GButton>
              </div>
            </form>
          )}
        </div>
      </div>
    </Modal>
  );
}
