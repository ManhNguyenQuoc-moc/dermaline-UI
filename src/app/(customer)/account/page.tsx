'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/common/ScrollReveal';
import { GTabs, GForm, GFormItem, GInput, GButton } from '@/@core/component/Antd';
import { UserOutlined, MailOutlined, PhoneOutlined, LogoutOutlined, CheckOutlined } from '@/@core/component/Antd/Icons';
import { useAuthStore } from '@/store/useAuthStore';
import { useTranslation } from '@/i18n/useTranslation';
import { Form, message } from 'antd';

export default function AccountDashboardPage() {
  const { user, isLoggedIn, logout } = useAuthStore();
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [isSaved, setIsSaved] = useState(false);

  const handleUpdateProfile = (values: any) => {
    setIsSaved(true);
    message.success(t.account.savedSuccess);
    setTimeout(() => setIsSaved(false), 2500);
  };

  if (!isLoggedIn || !user) {
    return (
      <main className="w-full min-h-screen bg-white select-none pt-32 pb-20 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center space-y-4">
          <h2 className="font-headline font-semibold text-2xl text-slate-900">Please Log In First</h2>
          <p className="font-body text-xs text-slate-500">You must be logged in to view your skincare account profile.</p>
          <Link href="/login">
            <GButton type="primary" className="!h-11 !bg-slate-950 hover:!bg-brand-primary !text-white">
              GO TO LOGIN PAGE
            </GButton>
          </Link>
        </div>
      </main>
    );
  }

  const profileTabContent = (
    <div className="bg-white border border-slate-200/90 p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <h3 className="font-headline font-semibold text-xl text-slate-900">{t.account.profileTab}</h3>
        <span className="px-3 py-1 bg-sky-50 text-brand-primary border border-sky-200 font-label text-xs font-bold uppercase">
          {user.role || 'VIP MEMBER'}
        </span>
      </div>

      <GForm form={form} layout="vertical" onFinish={handleUpdateProfile} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <GFormItem name="fullName" label={t.auth.fullNameLabel} initialValue={user.fullName}>
            <GInput prefix={<UserOutlined className="text-slate-400 mr-1" />} />
          </GFormItem>

          <GFormItem name="phone" label={t.auth.phoneLabel} initialValue={user.phone}>
            <GInput prefix={<PhoneOutlined className="text-slate-400 mr-1" />} />
          </GFormItem>
        </div>

        <GFormItem name="email" label={t.auth.emailLabel} initialValue={user.email}>
          <GInput prefix={<MailOutlined className="text-slate-400 mr-1" />} disabled />
        </GFormItem>

        <div className="pt-2 flex justify-end">
          <GButton
            type="primary"
            htmlType="submit"
            className={`!h-11 flex items-center gap-2 ${
              isSaved ? '!bg-emerald-600 !text-white' : '!bg-slate-950 hover:!bg-brand-primary !text-white'
            }`}
          >
            {isSaved ? <CheckOutlined /> : null}
            <span>{isSaved ? t.account.savedSuccess : t.account.saveChanges}</span>
          </GButton>
        </div>
      </GForm>
    </div>
  );

  const ordersTabContent = (
    <div className="bg-white border border-slate-200/90 p-6 sm:p-8 space-y-4">
      <h3 className="font-headline font-semibold text-xl text-slate-900 border-b border-slate-200 pb-4">
        {t.account.recentOrdersTitle}
      </h3>

      <div className="space-y-3">
        <div className="p-4 bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <span className="font-label text-xs font-bold text-brand-primary uppercase">ORDER #DLM-849201</span>
            <h4 className="font-headline font-semibold text-sm text-slate-900">PDRN Salmon Ampoule 99.5% (Box of 10)</h4>
            <span className="font-body text-xs text-slate-400 block">Dispatched via EMS Express · Tracking: KR948201948</span>
          </div>
          <div className="text-right">
            <span className="font-headline font-bold text-base text-slate-900 block">$380.00</span>
            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-label font-bold uppercase">{t.account.dispatched}</span>
          </div>
        </div>

        <div className="p-4 bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <span className="font-label text-xs font-bold text-brand-primary uppercase">ORDER #DLM-719302</span>
            <h4 className="font-headline font-semibold text-sm text-slate-900">Bio-Exosome Skin Recovery Lotion 200ml × 5</h4>
            <span className="font-body text-xs text-slate-400 block">Delivered on Jan 28, 2026</span>
          </div>
          <div className="text-right">
            <span className="font-headline font-bold text-base text-slate-900 block">$225.00</span>
            <span className="px-2 py-0.5 bg-sky-100 text-sky-800 text-[10px] font-label font-bold uppercase">{t.account.delivered}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const tabItems = [
    { key: 'profile', label: t.account.profileTab, children: profileTabContent },
    { key: 'orders', label: t.account.ordersTab, children: ordersTabContent },
  ];

  return (
    <main className="w-full min-h-screen bg-slate-50/50 select-none pt-24 sm:pt-28 pb-20">
      {/* Header Banner */}
      <section className="w-full py-10 sm:py-14 bg-gradient-to-b from-slate-50 via-sky-50/30 to-white border-b border-slate-200/60">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-brand-primary font-label text-xs font-bold uppercase tracking-widest block">
                {t.account.tag}
              </span>
              <h1 className="font-headline font-semibold text-3xl sm:text-4xl text-slate-900">
                {user.fullName}
              </h1>
              <p className="font-body text-xs sm:text-sm text-slate-600">
                {t.account.goldMember} · Account ID: {user.id}
              </p>
            </div>

            <GButton
              onClick={() => {
                logout();
                message.info(t.header.logout);
              }}
              className="!h-11 !border-red-200 !bg-white hover:!bg-red-50 !text-red-600 flex items-center gap-2"
            >
              <LogoutOutlined />
              <span>{t.header.logout}</span>
            </GButton>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <ScrollReveal variant="fade-up" delay={200} duration={850}>
          <GTabs items={tabItems} />
        </ScrollReveal>
      </div>
    </main>
  );
}
