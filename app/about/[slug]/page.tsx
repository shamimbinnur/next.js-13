
import EditCallBack from '@/components/utils/EditCallBack';
import { aboutUs } from '../../../src/contents/about'
import { notFound } from 'next/navigation';

export default function page({ params } : { params: { slug: string }}) {
  const { slug } = params;
  const section = aboutUs.sections.find((section) => section.slug === slug);
  
  if (!section) {
    notFound()
  }

  return (
    <main className="w-full min-h-screen">
      <div className="px-0 md:px-16">
        <h1 className="text-4xl font-medium pb-4">{section.title}</h1>
        <p className="text-lg">{section.description}</p>

        <div className="flex justify-end">
          <EditCallBack path="app/about/[slug]/page.tsx" />
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const slug = aboutUs.sections.map((section) => (section.slug))
  return slug.map((slug) => ({
    slug: slug
  }));
}

export async function generateMetadata({ params } :{ params: { slug: string }}) {
  const { slug } = params;
  const section = aboutUs.sections.find((section) => section.slug === slug);

  return {
    title: section ? section.title : "Not found",
    description: section ? section.description : "Not found",
  };
}