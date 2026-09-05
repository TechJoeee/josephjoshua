import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Joseph Joshua — Fullstack Developer & AI Designer',
  description: 'The portfolio of Joseph Joshua, a fullstack web developer and AI designer building clear, expressive digital products.',
  generator: 'v0.app',
  keywords: ['Joseph Joshua', 'fullstack developer', 'AI designer', 'web design', 'product design'],
  openGraph: { title: 'Joseph Joshua — Fullstack Developer & AI Designer', description: 'Building digital products with clarity, character, and intelligent details.', type: 'website' },
}

export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#101010', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-[#101010]"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
