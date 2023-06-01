import { aboutUs } from '@/src/contents/about'
import { redirect } from 'next/navigation'

const Page = () => {
  const firstSlug = aboutUs.sections[0].slug
  redirect(`/about/${firstSlug}`)
}

export default Page

export async function generateMetadata() {
  return {
    title: aboutUs.sections[0].title,
    description: aboutUs.sections[0].description,
  };
}