import type { Metadata } from 'next'
import { Inter, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSans = IBM_Plex_Sans({ weight: ['400', '500', '600', '700'], subsets: ["latin"], variable: '--font-ibm-plex-sans' });
const ibmPlexMono = IBM_Plex_Mono({ weight: ['400', '500', '600'], subsets: ["latin"], variable: '--font-ibm-plex-mono' });

export const metadata: Metadata = {
  title: 'Ford Otosan Dashboard | Institutional Equity Research',
  description: 'Ford Otosan (FROTO.IS) - BUY - TP ₺1,750 | Comprehensive institutional equity analysis dashboard',
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
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
