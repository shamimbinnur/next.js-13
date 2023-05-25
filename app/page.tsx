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
          
          <div className="flex flex-col text-black dark:invert items-center gap-4 text-center">
            <h1 className="text-2xl md:text-4xl mt-20 md:pt-40">Leverage the power of Next.js 13</h1>
            <h2 className="text-sm md:text-base ">This is an streamlined example project of Next.js 13, featuring the App Router and other new features.</h2>
          </div>
        </div>
      </Container>
    </main>
  )
}
