import type { Metadata } from 'next'
import { Inter, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSans = IBM_Plex_Sans({ weight: ['400', '500', '600', '700'], subsets: ["latin"], variable: '--font-ibm-plex-sans' });
const ibmPlexMono = IBM_Plex_Mono({ weight: ['400', '500', '600'], subsets: ["latin"], variable: '--font-ibm-plex-mono' });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ford-otosan-dashboard.example.com';
const notionResearchNoteUrl = 'https://22khair.notion.site/BIBI-Integrated-Equity-Research-Note-2aeb3e45fddb80788640e5ba2d980722?source=copy_link';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Report',
  name: 'Ford Otosan Institutional Equity Research Dashboard',
  description: 'Interactive institutional equity research dashboard for Ford Otosan (FROTO.IS) created by Soltanbibi Alimova.',
  url: siteUrl,
  inLanguage: 'en',
  author: {
    '@type': 'Person',
    name: 'Soltanbibi Alimova',
    sameAs: [notionResearchNoteUrl],
  },
  publisher: {
    '@type': 'Organization',
    name: 'BIBI Research',
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/Ford_logo_flat.svg.png`,
    },
  },
  headline: 'Ford Otosan (FROTO.IS) – BUY – TP ₺1,750',
  keywords: [
    'Ford Otosan',
    'FROTO.IS',
    'Turkish equities',
    'valuation dashboard',
    'institutional research',
  ],
  mainEntityOfPage: siteUrl,
  sameAs: [notionResearchNoteUrl],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Ford Otosan Dashboard | Institutional Equity Research',
    template: '%s | Ford Otosan Institutional Equity',
  },
  applicationName: 'BIBI Institutional Equity Research',
  description: 'Ford Otosan (FROTO.IS) BUY thesis with TP ₺1,750. Explore valuation, DCF scenarios, macro context, strategy, ESG and risk matrices in an interactive institutional dashboard prepared by Soltanbibi Alimova.',
  keywords: [
    'Ford Otosan research',
    'FROTO institutional dashboard',
    'Turkish automotive equities',
    'DCF valuation Ford',
    'Soltanbibi Alimova research',
    'BIBI integrated equity note',
  ],
  generator: 'v0.app',
  category: 'Finance',
  authors: [{ name: 'Soltanbibi Alimova', url: notionResearchNoteUrl }],
  creator: 'Soltanbibi Alimova',
  publisher: 'Soltanbibi Alimova',
  referrer: 'strict-origin-when-cross-origin',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Ford Otosan Institutional Equity Dashboard',
    description: 'Interactive BUY thesis dashboard for Ford Otosan (FROTO.IS) covering valuation, macro, strategy, ESG and risk.',
    siteName: 'BIBI Institutional Equity Research',
    images: [
      {
        url: `${siteUrl}/Ford_logo_flat.svg.png`,
        width: 1024,
        height: 369,
        alt: 'Ford logo representing Ford Otosan equity dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ford Otosan Institutional Equity Dashboard',
    description: 'Soltanbibi Alimova’s integrated BUY thesis for Ford Otosan (FROTO.IS) with valuation and macro insights.',
    creator: '@SoltanbibiA',
    images: [`${siteUrl}/Ford_logo_flat.svg.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  icons: {
    icon: [
      {
        url: '/Ford_logo_flat.svg.png',
        type: 'image/png',
      },
    ],
    apple: '/Ford_logo_flat.svg.png',
  },
  other: {
    'notion:source': notionResearchNoteUrl,
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
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  )
}
