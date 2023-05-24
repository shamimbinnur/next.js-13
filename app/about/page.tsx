import { aboutUs } from '@/src/contents/about'
import { redirect } from 'next/navigation'

const Page = () => {
  const firstSlug = aboutUs.sections[0].slug
  redirect(`/about/${firstSlug}`)
}


export default Page