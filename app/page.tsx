import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-10 md:px-0 py-24">
      <Image
        className="dark:invert"
        alt="Next.js"
        src="/next.svg"
        height={300}
        width={300}
      />
      
      <div className="flex flex-col text-black items-center gap-6 text-center">
        <h1 className="text-3xl md:text-4xl pt-40">Leverage the power of Next.js 13</h1>
        <p className="text-base dark:invert">This is an streamlined example project of Next.js 13, featuring the App Router and other new features.</p>
      </div>
    </main>
  )
}
