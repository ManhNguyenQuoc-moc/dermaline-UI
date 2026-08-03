'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ImageWithSkeleton from '@/components/common/ImageWithSkeleton';
import ScrollReveal from '@/components/common/ScrollReveal';
import CommunityArticleCard from '@/components/community/CommunityArticleCard';
import GButton from '@/@core/component/Antd/Button';
import { message } from 'antd';
import {
  getCommunityArticleBySlugService,
  getRelatedArticlesService,
  CommunityArticleItem,
} from '@/services/customer/community/community.service';
import {
  ChevronRight,
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Bookmark,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Sparkles,
  Globe,
  MessageSquare,
  Link as LinkIcon,
} from 'lucide-react';

interface NewsDetailPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const resolvedParams = use(params);
  const router = useRouter();

  const [article, setArticle] = useState<CommunityArticleItem | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<CommunityArticleItem[]>([]);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const articleData = await getCommunityArticleBySlugService(resolvedParams.slug);
      setArticle(articleData);

      if (articleData) {
        const related = await getRelatedArticlesService(articleData.slug, articleData.category, 3);
        setRelatedArticles(related);
      }
      setLoading(false);
    }
    loadData();
  }, [resolvedParams.slug]);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      message.success('Article link copied to clipboard!');
    }
  };

  const handleToggleSave = () => {
    setIsSaved(!isSaved);
    if (!isSaved) {
      message.success('Article saved to reading list');
    } else {
      message.info('Article removed from reading list');
    }
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-white pt-32 pb-20 flex flex-col items-center justify-center">
        <div className="w-10 h-10 border-4 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin mb-4" />
        <p className="font-label text-sm text-slate-500 font-semibold tracking-wider">LOADING CLINICAL ARTICLE...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="w-full min-h-screen bg-white pt-32 pb-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-headline text-2xl font-bold text-slate-900 mb-2">Article Not Found</h1>
        <p className="font-body text-slate-600 mb-6">The requested news article or clinical publication could not be found.</p>
        <GButton type="primary" onClick={() => router.push('/community/news')}>
          BACK TO COMMUNITY NEWS
        </GButton>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen bg-white select-none pt-24 sm:pt-28 pb-20">
      {/* 1. Top Breadcrumb & Back Action Header */}
      <section className="bg-slate-50 border-b border-slate-200/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-4">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-label font-semibold text-slate-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-brand-primary transition-colors">HOME</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link href="/community/news" className="hover:text-brand-primary transition-colors">COMMUNITY</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="uppercase text-slate-400">{article.categoryLabel}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-900 truncate max-w-[200px] sm:max-w-[300px]">{article.title}</span>
          </nav>

          {/* Back Button */}
          <Link
            href={`/community/${article.category}`}
            className="inline-flex items-center gap-1.5 text-xs font-label font-bold text-slate-700 hover:text-brand-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2]" />
            <span>BACK TO {article.categoryLabel.toUpperCase()}</span>
          </Link>
        </div>
      </section>

      {/* 2. Article Header Container */}
      <article className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <ScrollReveal variant="fade-up" duration={700}>
          <div className="space-y-6">
            {/* Category & Verified Clinical Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 bg-brand-primary text-white text-xs font-label font-bold uppercase tracking-wider rounded-none sm:rounded-xs shadow-xs">
                {article.categoryLabel}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-50 text-brand-primary border border-sky-200 text-xs font-label font-bold uppercase tracking-wider rounded-none sm:rounded-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-primary" />
                VERIFIED MEDICAL NEWS
              </span>
            </div>

            {/* Main Article Title */}
            <h1 className="font-headline font-bold text-2xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight sm:leading-tight">
              {article.title}
            </h1>

            {/* Author & Publication Metadata Row */}
            <div className="pt-4 border-t border-b border-slate-100 py-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-base shadow-xs">
                  <Building2 className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="font-label text-sm font-bold text-slate-900">{article.author}</h4>
                  <p className="font-body text-xs text-slate-500">{article.authorRole || 'Official Clinical Release'}</p>
                </div>
              </div>

              {/* Date, Read Time, and Share Icons */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4 text-xs font-label font-semibold text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-slate-400 stroke-[1.75]" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-slate-400 stroke-[1.75]" />
                    {article.readTime}
                  </span>
                </div>

                <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
                  <button
                    onClick={handleToggleSave}
                    title="Bookmark Article"
                    className={`p-2 rounded-full border transition-all ${
                      isSaved
                        ? 'bg-brand-primary text-white border-brand-primary'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-brand-primary hover:text-brand-primary'
                    }`}
                  >
                    <Bookmark className="w-4 h-4 stroke-[2]" />
                  </button>
                  <button
                    onClick={handleCopyLink}
                    title="Share Article Link"
                    className="p-2 rounded-full bg-white text-slate-600 border border-slate-200 hover:border-brand-primary hover:text-brand-primary transition-all"
                  >
                    <Share2 className="w-4 h-4 stroke-[2]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 3. Hero Feature Cover Image */}
        <ScrollReveal variant="fade-up" delay={150} duration={750} className="my-8 sm:my-10">
          <div className="relative w-full h-[280px] sm:h-[450px] lg:h-[520px] rounded-none sm:rounded-sm overflow-hidden bg-slate-100 shadow-md border border-slate-200">
            <ImageWithSkeleton
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-center font-body text-xs text-slate-500 italic">
            Figure 1.1: Official Dermaline Bio R&D Laboratory Release & Clinical Distribution Center 2026.
          </p>
        </ScrollReveal>

        {/* 4. Executive Summary / Key Takeaways Box */}
        {article.keyHighlights && article.keyHighlights.length > 0 && (
          <ScrollReveal variant="fade-up" delay={200} duration={750} className="mb-10">
            <div className="bg-sky-50/80 border-l-4 border-brand-primary p-6 sm:p-8 rounded-r-sm shadow-2xs">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-brand-primary" />
                <h3 className="font-headline font-bold text-base sm:text-lg text-slate-900 uppercase tracking-wide">
                  Executive Clinical Takeaways
                </h3>
              </div>
              <ul className="space-y-3">
                {article.keyHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-body leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5 stroke-[2]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        )}

        {/* 5. Article Body Content */}
        <ScrollReveal variant="fade-up" delay={250} duration={750} className="space-y-6">
          {article.content && article.content.length > 0 ? (
            article.content.map((paragraph, index) => (
              <p key={index} className="font-body text-base sm:text-lg text-slate-700 leading-relaxed sm:leading-loose">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="font-body text-base sm:text-lg text-slate-700 leading-relaxed">
              {article.excerpt}
            </p>
          )}

          {/* Pull Quote Highlight */}
          <div className="my-8 py-6 px-8 border-l-4 border-slate-900 bg-slate-50 italic font-headline text-lg sm:text-xl text-slate-800 font-semibold leading-relaxed">
            “Our core commitment has always been grounded in empirical dermatological science—bringing 99.5% pure Salmon PDRN directly to aesthetic clinics globally.”
          </div>

          <p className="font-body text-base sm:text-lg text-slate-700 leading-relaxed">
            For further inquiries regarding direct hospital supply agreements, clinical documentation, or technical product dossiers, please reach out to the Dermaline International Research & Advisory Office.
          </p>
        </ScrollReveal>

        {/* 6. Article Tags & Social Sharing Footnote */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-6">
          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-label text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">TAGS:</span>
              {article.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-label font-semibold rounded-full transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Social Share Bar */}
          <div className="flex items-center gap-3">
            <span className="font-label text-xs font-bold text-slate-400 uppercase tracking-wider">SHARE:</span>
            <button
              onClick={handleCopyLink}
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-brand-primary hover:text-white text-slate-600 flex items-center justify-center transition-all"
            >
              <Globe className="w-4 h-4" />
            </button>
            <button
              onClick={handleCopyLink}
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-brand-primary hover:text-white text-slate-600 flex items-center justify-center transition-all"
            >
              <MessageSquare className="w-4 h-4" />
            </button>
            <button
              onClick={handleCopyLink}
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-brand-primary hover:text-white text-slate-600 flex items-center justify-center transition-all"
            >
              <LinkIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 7. Official Author / Clinical Advisory Bio Card */}
        <div className="mt-10 p-6 sm:p-8 bg-slate-900 text-white rounded-none sm:rounded-sm shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
            <Building2 className="w-8 h-8 text-brand-primary stroke-[1.75]" />
          </div>
          <div className="flex-1 text-center sm:text-left space-y-2">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h4 className="font-headline font-bold text-lg text-white">{article.author}</h4>
              <span className="px-2.5 py-0.5 bg-brand-primary text-white text-[10px] font-label font-bold uppercase tracking-wider rounded-xs">
                OFFICIAL SOURCE
              </span>
            </div>
            <p className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed">
              Dermaline Research & Advisory Board is committed to advancing non-invasive aesthetic dermatology, bio-exosome stabilization, and hospital-grade tissue recovery formulas.
            </p>
            <div className="pt-2">
              <Link
                href="/brand/story"
                className="inline-flex items-center gap-1.5 text-xs font-label font-bold text-sky-300 hover:text-white transition-colors"
              >
                <span>EXPLORE DERMALINE RESEARCH LABS</span>
                <ChevronRight className="w-4 h-4 stroke-[2]" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* 8. Related Articles Grid */}
      {relatedArticles.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-12 border-t border-slate-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="font-label text-xs font-bold text-brand-primary uppercase tracking-widest block mb-1">
                RECOMMENDED READS
              </span>
              <h2 className="font-headline font-bold text-2xl sm:text-3xl text-slate-900">
                Related Clinical News & Publications
              </h2>
            </div>

            <Link
              href="/community/news"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-label font-bold text-brand-primary hover:underline"
            >
              <span>VIEW ALL COMMUNITY NEWS</span>
              <ChevronRight className="w-4 h-4 stroke-[2]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {relatedArticles.map((relArticle, idx) => (
              <ScrollReveal
                key={relArticle.id}
                variant="fade-up"
                delay={100 + idx * 100}
                duration={750}
                className="h-full"
              >
                <CommunityArticleCard article={relArticle} />
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
