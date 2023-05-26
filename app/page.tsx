import Container from '@/components/common/Container'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Container>
        <div className="flex flex-col items-center px-8 md:px-0 py-10 md:py-24">
          <Image
            className="dark:invert"
            alt="Next.js"
            src="/next.svg"
            height={300}
            width={300}
          />
          
          <div className="flex flex-col text-black dark:invert items-center max-w-3xl gap-4 text-center">
            <h1 className="text-2xl md:text-5xl mt-10 md:pt-40">Leverage the power of Next.js 13</h1>
            <h2 className="text-sm md:text-base ">This site is a streamlined example project built with Next.js 13 to demonstrate how to leverage the latest features of Next.js 13 along with the new App Route.</h2>
          </div>
        </div>
      </Container>
    </main>
  )
}
