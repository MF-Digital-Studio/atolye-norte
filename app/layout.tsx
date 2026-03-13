import type { Metadata } from 'next'
import { EB_Garamond, Jost } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ScrollExperience } from '@/components/scroll-experience'
import './globals.css'

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-eb-garamond',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
})

export const metadata: Metadata = {
  title: 'Atölye Norte — A Refined Destination for Coffee, Desserts & Curated Moments',
  description: 'Atölye Norte is a boutique cafe and patisserie — a house of atmosphere, celebration, detail, and modern elegance. Discover signature cakes, refined desserts, and artful coffee in a beautifully curated space.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${jost.variable}`}>
      <body className="font-sans antialiased">
        <ScrollExperience />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
