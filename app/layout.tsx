import Nav from '@/components/common/Nav'
import { Inter } from 'next/font/google'
import './globals.css'
import Container from '@/components/common/Container'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js 13',
  description: 'This is an streamlined example project of Next.js 13, featuring the App Router and other new features.',
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
          <Nav/>
          {children}
        </Container>
      </body>
    </html>
  )
}
