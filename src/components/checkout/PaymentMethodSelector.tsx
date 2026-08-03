'use client';

import React from 'react';
import { CreditCardOutlined, SafetyCertificateOutlined, GlobalOutlined, CheckCircleFilled } from '@/@core/component/Antd/Icons';
import { PaymentMethodType } from '@/services/customer/checkout/models/checkout.model';

interface PaymentMethodSelectorProps {
  selectedMethod: PaymentMethodType;
  onSelectMethod: (method: PaymentMethodType) => void;
}

export default function PaymentMethodSelector({
  selectedMethod,
  onSelectMethod,
}: PaymentMethodSelectorProps) {
  const methods: Array<{
    id: PaymentMethodType;
    title: string;
    description: string;
    badge: string;
    icon: React.ReactNode;
  }> = [
    {
      id: 'CREDIT_CARD',
      title: 'Credit / Debit Card (Visa, MasterCard, Amex)',
      description: 'Secure 256-bit SSL encrypted international card processing.',
      badge: 'RECOMMENDED',
      icon: <CreditCardOutlined className="text-xl text-brand-primary" />,
    },
    {
      id: 'PAYPAL',
      title: 'PayPal / Express Checkout',
      description: 'Fast, secure online payment with buyer protection.',
      badge: 'INSTANT',
      icon: <GlobalOutlined className="text-xl text-sky-600" />,
    },
    {
      id: 'EMS_COD',
      title: 'Dermaline Hospital Account / EMS COD',
      description: 'Available for verified medical clinics & aesthetic centers.',
      badge: 'CLINIC ONLY',
      icon: <SafetyCertificateOutlined className="text-xl text-emerald-600" />,
    },
    {
      id: 'BANK_TRANSFER',
      title: 'Direct International Wire Transfer (SWIFT)',
      description: 'Direct wire transfer to Dermaline Co., Ltd. Seoul, Korea.',
      badge: 'WIRE',
      icon: <CreditCardOutlined className="text-xl text-slate-600" />,
    },
  ];

  return (
    <div className="bg-white border border-slate-200/90 p-6 sm:p-8 rounded-none sm:rounded-sm space-y-6 shadow-2xs select-none">
      <div className="flex items-center gap-2 border-b border-slate-200 pb-4">
        <CreditCardOutlined className="text-xl text-brand-primary" />
        <h3 className="font-headline font-semibold text-xl text-slate-900">
          2. Preferred Payment Method
        </h3>
      </div>

      <div className="space-y-3">
        {methods.map((method) => {
          const isSelected = selectedMethod === method.id;

          return (
            <div
              key={method.id}
              onClick={() => onSelectMethod(method.id)}
              className={`p-4 sm:p-5 border transition-all cursor-pointer rounded-none sm:rounded-xs flex items-start justify-between gap-4 ${
                isSelected
                  ? 'border-brand-primary bg-sky-50/30 shadow-2xs ring-1 ring-brand-primary/50'
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div className="pt-0.5">{method.icon}</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-headline font-semibold text-sm sm:text-base text-slate-900">
                      {method.title}
                    </span>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-label font-bold uppercase tracking-wider">
                      {method.badge}
                    </span>
                  </div>
                  <p className="font-body text-xs text-slate-500 leading-relaxed">
                    {method.description}
                  </p>
                </div>
              </div>

              <div className="pt-1 shrink-0">
                {isSelected ? (
                  <CheckCircleFilled className="text-xl text-brand-primary" />
                ) : (
                  <div className="w-5 h-5 rounded-full border border-slate-300" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
