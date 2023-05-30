import Navigation from '@/components/common/Navigation'
import { Inter } from 'next/font/google'
import './globals.css'
import Container from '@/components/common/Container'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js 13 Example Project built using App Router, Server Component and other New Features of Next.js 13',
  description: 'An open-source streamlined example project built using the new App Router, Server Component, and other new features of Next.js 13 to demonstrate leveraging the latest features that come with Next.js.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <Navigation/>
          {children}
        </Container>
      </body>
    </html>
  )
}
