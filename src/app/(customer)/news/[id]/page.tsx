import { redirect } from 'next/navigation';

interface NewsIdRedirectProps {
  params: Promise<{ id: string }>;
}

export default async function NewsIdRedirectPage({ params }: NewsIdRedirectProps) {
  const { id } = await params;
  redirect(`/community/news/${id}`);
}

