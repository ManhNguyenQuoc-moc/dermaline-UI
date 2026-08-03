'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ScrollReveal from '@/components/common/ScrollReveal';
import { GForm, GFormItem, GInput, GCheckbox, GButton } from '@/@core/component/Antd';
import { MailOutlined, UserOutlined, PhoneOutlined, SafetyCertificateOutlined, RightOutlined } from '@/@core/component/Antd/Icons';
import { useAuthStore } from '@/store/useAuthStore';
import { useTranslation } from '@/i18n/useTranslation';
import { Form, message } from 'antd';

export default function SignupPage() {
  const router = useRouter();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const signup = useAuthStore((s) => s.signup);
  const { t } = useTranslation();

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      await signup(values);
      message.success('Welcome to Dermaline Korea Beauty Network! Account created successfully.');
      router.push('/account');
    } catch (err) {
      message.error('Registration failed. Please check input details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-slate-50 via-sky-50/20 to-white select-none pt-28 sm:pt-32 pb-20 flex items-center justify-center">
      <div className="w-full max-w-lg mx-auto px-4">
        <ScrollReveal variant="fade-up" delay={150} duration={800}>
          <div className="bg-white border border-slate-200/90 p-6 sm:p-8 rounded-none sm:rounded-sm shadow-xl space-y-6">
            
            {/* Header Title */}
            <div className="space-y-1.5 text-center">
              <span className="font-label text-xs font-bold text-brand-primary uppercase tracking-widest block">
                JOIN DERMALINE BEAUTY CLUB
              </span>
              <h1 className="font-headline font-semibold text-2xl sm:text-3xl text-slate-900">
                {t.auth.signupTitle}
              </h1>
              <p className="font-body text-xs text-slate-500">
                {t.auth.signupDesc}
              </p>
            </div>

            {/* Form */}
            <GForm form={form} layout="vertical" onFinish={handleSubmit} className="space-y-4">
              <GFormItem
                name="fullName"
                label={t.auth.fullNameLabel}
                initialValue="Sophia Chen"
                rules={[{ required: true, message: 'Please enter your full name' }]}
              >
                <GInput prefix={<UserOutlined className="text-slate-400 mr-1" />} placeholder="e.g. Sophia Chen" />
              </GFormItem>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <GFormItem
                  name="email"
                  label={t.auth.emailLabel}
                  initialValue="sophia.chen@dermaline-beauty.com"
                  rules={[
                    { required: true, message: 'Please enter email' },
                    { type: 'email', message: 'Please enter valid email' },
                  ]}
                >
                  <GInput prefix={<MailOutlined className="text-slate-400 mr-1" />} placeholder="sophia@example.com" />
                </GFormItem>

                <GFormItem
                  name="phone"
                  label={t.auth.phoneLabel}
                  initialValue="+1 (555) 234-5678"
                  rules={[{ required: true, message: 'Please enter phone' }]}
                >
                  <GInput prefix={<PhoneOutlined className="text-slate-400 mr-1" />} placeholder="+1 (555) 234-5678" />
                </GFormItem>
              </div>

              <GFormItem
                name="password"
                label={t.auth.passwordLabel}
                initialValue="password123"
                rules={[{ required: true, message: 'Please create password' }]}
              >
                <GInput type="password" placeholder="Minimum 8 characters" />
              </GFormItem>

              <GFormItem name="agreeTerms" valuePropName="checked" initialValue={true} rules={[{ required: true, message: 'Please agree to terms' }]}>
                <GCheckbox className="font-body text-xs text-slate-600">
                  {t.auth.agreeTerms}
                </GCheckbox>
              </GFormItem>

              <div className="pt-2">
                <GButton
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  className="w-full !h-12 flex items-center justify-center gap-2 !bg-slate-950 hover:!bg-brand-primary !text-white"
                >
                  <UserOutlined className="text-base" />
                  <span>{t.auth.createAccount}</span>
                </GButton>
              </div>
            </GForm>

            {/* Footer Login Link */}
            <div className="pt-4 border-t border-slate-100 text-center space-y-2">
              <p className="font-body text-xs text-slate-500">
                {t.auth.alreadyRegistered}
              </p>
              <Link
                href="/login"
                className="inline-flex items-center gap-1 font-label text-xs font-bold text-brand-primary hover:text-slate-900 transition-colors uppercase tracking-wider"
              >
                <span>{t.auth.loginExisting}</span>
                <RightOutlined className="text-[10px]" />
              </Link>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
