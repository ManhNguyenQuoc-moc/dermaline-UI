'use client';

import React from 'react';
import ScrollReveal from '@/components/common/ScrollReveal';
import ActiveEventBlock from '@/components/event/ActiveEventBlock';
import { useTranslation } from '@/i18n/useTranslation';
import { getEventGroupedProductsService } from '@/services/customer/product/product.service';

export default function ActiveEventsSection() {
  const { t } = useTranslation();
  const groupedProducts = getEventGroupedProductsService();

  const eventsList = (t.eventSection.events || []) as Array<{
    id: string;
    tag: string;
    name: string;
    desc: string;
    targetDays: number;
    targetHours: number;
    targetMins: number;
  }>;

  return (
    <section className="w-full bg-gradient-to-b from-sky-50/40 via-white to-slate-50/30 py-8 sm:py-12 border-b border-slate-200/80 select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3 Dedicated Active Event Blocks */}
        <div className="space-y-10">
          {eventsList.map((event, idx) => {
            const eventProducts = groupedProducts[idx] || groupedProducts[0];

            return (
              <ScrollReveal key={event.id || idx} variant="fade-up" delay={200 + idx * 150} duration={850}>
                <ActiveEventBlock index={idx} event={event} products={eventProducts} />
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
