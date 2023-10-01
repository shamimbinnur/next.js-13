import Container from '@/components/common/Container'
import EditCallBack from '@/components/utils/EditCallBack'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Container>
        <div className="flex flex-col items-center px-0 md:px-0 py-10 md:py-24 group">
          <Image
            className="dark:invert"
            alt="Next.js"
            src="/next.svg"
            height={300}
            width={300}
          />
          
          <div className="flex flex-col text-black dark:invert items-center max-w-3xl gap-4 text-center">
            <h1 className="text-2xl md:text-5xl mt-20 md:pt-40">Leverage the power of Next.js 13</h1>
            <h2 className="text-sm md:text-base">This site is a streamlined example project built with Next.js 13, App Router, Server Component to demonstrate how to leverage the latest features of Next.js 13 along with the new App Router.</h2>
          </div>

          <EditCallBack path="app/page.tsx" />
        </div>
      </Container>
    </main>
  )
}
