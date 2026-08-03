'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ScrollReveal from '@/components/common/ScrollReveal';
import { GForm, GFormItem, GInput, GCheckbox, GButton } from '@/@core/component/Antd';
import { MailOutlined, UserOutlined, SafetyCertificateOutlined, RightOutlined } from '@/@core/component/Antd/Icons';
import { useAuthStore } from '@/store/useAuthStore';
import { useTranslation } from '@/i18n/useTranslation';
import { Form, message } from 'antd';

export default function LoginPage() {
  const router = useRouter();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const login = useAuthStore((s) => s.login);
  const { t } = useTranslation();

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      await login(values);
      message.success('Welcome back to Dermaline Korea!');
      router.push('/account');
    } catch (err) {
      message.error('Invalid email or password credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-slate-50 via-sky-50/20 to-white select-none pt-28 sm:pt-32 pb-20 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto px-4">
        <ScrollReveal variant="fade-up" delay={150} duration={800}>
          <div className="bg-white border border-slate-200/90 p-6 sm:p-8 rounded-none sm:rounded-sm shadow-xl space-y-6">
            
            {/* Header Title */}
            <div className="space-y-1.5 text-center">
              <span className="font-label text-xs font-bold text-brand-primary uppercase tracking-widest block">
                DERMALINE BEAUTY ACCOUNT
              </span>
              <h1 className="font-headline font-semibold text-2xl sm:text-3xl text-slate-900">
                {t.auth.loginTitle}
              </h1>
              <p className="font-body text-xs text-slate-500">
                {t.auth.loginDesc}
              </p>
            </div>

            {/* Form */}
            <GForm form={form} layout="vertical" onFinish={handleSubmit} className="space-y-4">
              <GFormItem
                name="email"
                label={t.auth.emailLabel}
                initialValue="sophia.chen@dermaline-beauty.com"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' },
                ]}
              >
                <GInput prefix={<MailOutlined className="text-slate-400 mr-1" />} placeholder="sophia@example.com" />
              </GFormItem>

              <GFormItem
                name="password"
                label={t.auth.passwordLabel}
                initialValue="password123"
                rules={[{ required: true, message: 'Please enter your password' }]}
              >
                <GInput type="password" placeholder="enter your password" />
              </GFormItem>

              <div className="flex items-center justify-between text-xs pt-1">
                <GFormItem name="rememberMe" valuePropName="checked" initialValue={true} className="!mb-0">
                  <GCheckbox className="font-body text-xs text-slate-600">
                    {t.auth.rememberMe}
                  </GCheckbox>
                </GFormItem>

                <a href="#forgot" className="font-body text-xs text-brand-primary font-semibold hover:underline">
                  {t.auth.forgotPassword}
                </a>
              </div>

              <div className="pt-2">
                <GButton
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  className="w-full !h-12 flex items-center justify-center gap-2 !bg-slate-950 hover:!bg-brand-primary !text-white"
                >
                  <UserOutlined className="text-base" />
                  <span>{t.auth.loginBtn}</span>
                </GButton>
              </div>
            </GForm>

            {/* Footer Register Link */}
            <div className="pt-4 border-t border-slate-100 text-center space-y-2">
              <p className="font-body text-xs text-slate-500">
                {t.auth.newToDermaline}
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center gap-1 font-label text-xs font-bold text-brand-primary hover:text-slate-900 transition-colors uppercase tracking-wider"
              >
                <span>{t.auth.createAccount}</span>
                <RightOutlined className="text-[10px]" />
              </Link>
            </div>

            {/* Guarantee Badge */}
            <div className="pt-2 flex items-center justify-center gap-1.5 text-[11px] font-label text-slate-400">
              <SafetyCertificateOutlined className="text-brand-primary" />
              <span>100% Authentic Dermaline Hospital Guarantee</span>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
