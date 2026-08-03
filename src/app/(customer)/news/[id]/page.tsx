'use client';

import { use } from 'react';
import { redirect } from 'next/navigation';

interface NewsIdRedirectProps {
  params: Promise<{ id: string }>;
}

export default function NewsIdRedirectPage({ params }: NewsIdRedirectProps) {
  const resolvedParams = use(params);
  const articleSlug = resolvedParams.id;

  redirect(`/community/news/${articleSlug}`);
}
