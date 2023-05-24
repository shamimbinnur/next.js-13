import Container from "@/components/common/Container";
import { aboutUs } from '../../../src/contents/about.ts'
import { notFound } from 'next/navigation';

export default function page({ params }) {
  const { slug } = params;
  const section = aboutUs.sections.find((section) => section.slug === slug);

  if (!section) {
    notFound()
  }

  return (
    <main className="w-full min-h-screen">
      <Container paddingX={80}>
        <h1 className="text-4xl font-medium pb-4">{section.title}</h1>
        <p className="text-lg">{section.description}</p>
      </Container>
    </main>
  );
}

export async function generateStaticParams() {
  const slug = aboutUs.sections.map((section) => (section.slug))
  return slug.map((slug) => ({
    slug: slug
  }));
}