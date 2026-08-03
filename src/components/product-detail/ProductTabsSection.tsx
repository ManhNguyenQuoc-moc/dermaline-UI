'use client';

import React, { useState } from 'react';
import ImageWithSkeleton from '@/components/common/ImageWithSkeleton';
import { ProductDetailData } from '@/services/customer/product/detail.service';
import { GTabs, GForm, GFormItem, GInput, GTextArea, GButton } from '@/@core/component/Antd';
import { Rate, message, Modal, Form } from 'antd';
import {
  CheckCircleFilled,
  ExperimentOutlined,
  SafetyCertificateOutlined,
  TrophyOutlined,
  StarFilled,
  EditOutlined,
} from '@/@core/component/Antd/Icons';

interface ProductTabsSectionProps {
  product: ProductDetailData;
}

interface ReviewItem {
  id: string;
  author: string;
  role: string;
  date: string;
  rating: number;
  title: string;
  content: string;
}

export default function ProductTabsSection({ product }: ProductTabsSectionProps) {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [form] = Form.useForm();

  const [reviewsList, setReviewsList] = useState<ReviewItem[]>([
    {
      id: 'r-1',
      author: 'Dr. Sarah L.',
      role: 'VERIFIED DERMATOLOGIST',
      date: 'Jan 24, 2026',
      rating: 5,
      title: 'Incredible micro-bubble absorption for post-laser recovery!',
      content:
        'We use D\'LEXO NAD Bubble Toner in our Seoul aesthetic clinic after microneedling procedures. Patients love the refreshing bubble foam texture and zero irritation.',
    },
    {
      id: 'r-2',
      author: 'Elena M.',
      role: 'VERIFIED BUYER (USA COSTCO)',
      date: 'Jan 18, 2026',
      rating: 5,
      title: 'Bought at Costco and ordering my 3rd bottle!',
      content:
        'My skin barrier was completely broken during winter. After 3 days of using this bubble toner as a 3-minute mask, my skin feels glowing and hydrated all day.',
    },
  ]);

  const handleFinishReview = (values: {
    name: string;
    profession: string;
    rating: number;
    title: string;
    content: string;
  }) => {
    const newReview: ReviewItem = {
      id: `r-${Date.now()}`,
      author: values.name,
      role: (values.profession || 'VERIFIED CLINIC BUYER').toUpperCase(),
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      rating: values.rating || 5,
      title: values.title,
      content: values.content,
    };

    setReviewsList([newReview, ...reviewsList]);
    message.success('Thank you! Your clinic review has been published.');
    form.resetFields();
    setIsReviewModalOpen(false);
  };

  const tabItems = [
    {
      key: 'description',
      label: 'Clinical Science & Formulation',
      children: (
        <div className="space-y-16 max-w-5xl mx-auto pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-50 border border-slate-200/80 p-6 sm:p-10 rounded-none sm:rounded-sm">
            <div className="space-y-4">
              <span className="text-brand-primary font-label text-xs font-bold uppercase tracking-widest block">
                CELLULAR NAD+ ATP RECHARGE
              </span>
              <h3 className="font-headline font-semibold text-2xl sm:text-3xl text-slate-900 leading-snug">
                Micro-Bubble Activation Dermal Energy Solution
              </h3>
              <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed">
                Formulated with 5,000ppm NAD+ (Nicotinamide Adenine Dinucleotide) and 10 Billion Plant Exosomes, D'LEXO NAD Power Solution Bubble Toner transforms dense micro-bubbles upon dermal contact, instantly activating ATP cellular energy without cotton pads.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-label font-bold text-slate-800">
                <span className="flex items-center gap-1.5">
                  <CheckCircleFilled className="text-emerald-600 text-sm" />
                  USA Costco Featured
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircleFilled className="text-emerald-600 text-sm" />
                  pH 5.5 Homeostasis
                </span>
              </div>
            </div>

            <div className="relative w-full aspect-[4/3] rounded-none sm:rounded-xs overflow-hidden border border-slate-200">
              <ImageWithSkeleton
                src={product.image}
                alt={product.name}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-slate-200 space-y-3">
              <ExperimentOutlined className="text-2xl text-brand-primary" />
              <h4 className="font-headline font-semibold text-lg text-slate-900">
                1. Micro-Bubble Fast Penetration
              </h4>
              <p className="font-body text-xs text-slate-600 leading-relaxed">
                Ultra-fine micro-bubbles gently dissolve surface sebum and carry active NAD+ molecules deep into dermal lipid layers.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 space-y-3">
              <SafetyCertificateOutlined className="text-2xl text-brand-primary" />
              <h4 className="font-headline font-semibold text-lg text-slate-900">
                2. 24-Hour Hydro Lock Barrier
              </h4>
              <p className="font-body text-xs text-slate-600 leading-relaxed">
                5-Layer Hyaluronic Acid creates a moisture matrix that prevents trans-epidermal water loss for 24 continuous hours.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 space-y-3">
              <TrophyOutlined className="text-2xl text-brand-primary" />
              <h4 className="font-headline font-semibold text-lg text-slate-900">
                3. Hospital Post-Laser Safety
              </h4>
              <p className="font-body text-xs text-slate-600 leading-relaxed">
                Dermatest Germany 5-Star Certified. Low-pH hypoallergenic formula safe for post-peeling and post-procedure skin.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 'usage',
      label: 'How To Use (Protocol)',
      children: (
        <div className="max-w-4xl mx-auto space-y-8 pt-4">
          <div className="text-center space-y-2">
            <span className="font-label text-xs font-bold text-brand-primary uppercase tracking-widest">
              CLINICAL APPLICATION PROTOCOL
            </span>
            <h3 className="font-headline font-semibold text-2xl text-slate-900">
              Recommended Daily Skincare Routine
            </h3>
          </div>

          <div className="space-y-6">
            {product.howToUseSteps.map((step) => (
              <div
                key={step.step}
                className="flex flex-col sm:flex-row items-start gap-4 p-6 bg-slate-50 border border-slate-200/80 rounded-none sm:rounded-sm"
              >
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-headline font-bold text-lg flex items-center justify-center shrink-0">
                  {step.step}
                </div>
                <div className="space-y-1">
                  <h4 className="font-headline font-semibold text-lg text-slate-900">
                    {step.title}
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      key: 'ingredients',
      label: 'Full Ingredients & Safety',
      children: (
        <div className="max-w-4xl mx-auto space-y-8 pt-4">
          <div className="text-center space-y-2">
            <span className="font-label text-xs font-bold text-brand-primary uppercase tracking-widest">
              INCI FORMULATION & TRANSPARENCY
            </span>
            <h3 className="font-headline font-semibold text-2xl text-slate-900">
              Key Active Ingredients & Safety Standards
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {product.keyIngredients.map((ing, idx) => (
              <div key={idx} className="p-5 bg-white border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-headline font-semibold text-sm sm:text-base text-slate-900">
                    {ing.name}
                  </h4>
                  {ing.percentage && (
                    <span className="px-2 py-0.5 bg-sky-100 text-brand-primary text-xs font-label font-bold">
                      {ing.percentage}
                    </span>
                  )}
                </div>
                <p className="font-body text-xs text-slate-600 leading-relaxed">
                  {ing.function}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-slate-50 border border-slate-200/80 space-y-2">
            <h4 className="font-label text-xs font-bold text-slate-700 uppercase tracking-wider">
              Full INCI Ingredient List
            </h4>
            <p className="font-body text-xs text-slate-500 leading-relaxed">
              Water, Glycerin, Nicotinamide Adenine Dinucleotide (NAD+), Niacinamide, Sodium Hyaluronate, Hydrolyzed Hyaluronic Acid, Exosome Centella Asiatica Extract, Salmon Egg Extract (PDRN), Adenosine, Allantoin, Panthenol, Dipotassium Glycyrrhizate, Butylene Glycol, 1,2-Hexanediol, Ethylhexylglycerin, Disodium EDTA.
            </p>
          </div>
        </div>
      ),
    },
    {
      key: 'reviews',
      label: `Customer Reviews (${reviewsList.length})`,
      children: (
        <div className="max-w-4xl mx-auto space-y-8 pt-4" id="reviews">
          <div className="p-6 bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-1">
              <div className="font-headline font-bold text-4xl text-slate-900">
                5.0 / 5.0
              </div>
              <div className="flex items-center justify-center sm:justify-start text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarFilled key={i} className="text-base" />
                ))}
              </div>
              <p className="font-body text-xs text-slate-500">
                Based on {reviewsList.length + 478} verified clinic & hospital customer reviews
              </p>
            </div>

            <GButton
              type="primary"
              onClick={() => setIsReviewModalOpen(true)}
              className="!h-12 !px-6 flex items-center gap-2"
            >
              <EditOutlined className="text-sm" />
              <span>WRITE A CLINIC REVIEW</span>
            </GButton>
          </div>

          <div className="space-y-4">
            {reviewsList.map((rev) => (
              <div key={rev.id} className="p-5 border border-slate-200 bg-white space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-label text-xs font-bold text-slate-900">{rev.author}</span>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-label font-bold">
                      {rev.role}
                    </span>
                  </div>
                  <span className="font-body text-xs text-slate-400">{rev.date}</span>
                </div>
                <div className="flex items-center text-amber-400 gap-0.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <StarFilled key={i} className="text-sm" />
                  ))}
                </div>
                <h5 className="font-headline font-semibold text-sm text-slate-900">
                  {rev.title}
                </h5>
                <p className="font-body text-xs text-slate-600 leading-relaxed">
                  {rev.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-white border-t border-slate-200/80 select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <GTabs defaultActiveKey="description" items={tabItems} centered />

        <Modal
          title={
            <span className="font-headline font-semibold text-lg text-slate-900">
              Write a Clinic Product Review
            </span>
          }
          open={isReviewModalOpen}
          onCancel={() => setIsReviewModalOpen(false)}
          footer={null}
          centered
          width={560}
        >
          <GForm
            form={form}
            layout="vertical"
            initialValues={{ rating: 5 }}
            onFinish={handleFinishReview}
            className="pt-4 space-y-2"
          >
            <GFormItem
              name="rating"
              label="Overall Rating"
              rules={[{ required: true, message: 'Please select a rating' }]}
            >
              <Rate allowHalf defaultValue={5} className="text-amber-400 text-xl" />
            </GFormItem>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <GFormItem
                name="name"
                label="Your Full Name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <GInput placeholder="e.g. Dr. Jane Doe" />
              </GFormItem>

              <GFormItem
                name="profession"
                label="Role / Profession"
              >
                <GInput placeholder="e.g. Dermatologist / Clinic Buyer" />
              </GFormItem>
            </div>

            <GFormItem
              name="title"
              label="Review Headline"
              rules={[{ required: true, message: 'Please enter a review headline' }]}
            >
              <GInput placeholder="e.g. Excellent post-procedure hydration" />
            </GFormItem>

            <GFormItem
              name="content"
              label="Detailed Clinic Feedback"
              rules={[{ required: true, message: 'Please write your review feedback' }]}
            >
              <GTextArea
                rows={4}
                placeholder="Share your experience using this product in daily routine or clinical treatments..."
              />
            </GFormItem>

            <div className="flex justify-end gap-3 pt-4">
              <GButton onClick={() => setIsReviewModalOpen(false)}>Cancel</GButton>
              <GButton
                type="primary"
                htmlType="submit"
              >
                Submit Review
              </GButton>
            </div>
          </GForm>
        </Modal>
      </div>
    </section>
  );
}
