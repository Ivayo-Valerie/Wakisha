import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteConfig } from '@/data/siteData';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Premier Engineering Consultants Kenya`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.name} - founded in 2017 in Nairobi, Kenya with regional footprint across Coast, Western, Central & Eastern regions. Specializing in electrical engineering, solar PV, electric fencing, home automation, project management & BauKG health and safety planning.`,
  keywords: [
    'Wakisha Electrical Engineering',
    'Electrical engineering Kenya',
    'Engineering consultant Nairobi',
    'Solar installation Kenya',
    'Utawala solar projects',
    'Wajir electric fence',
    'Electric fencing Kenya',
    'Commercial lighting design Nairobi',
    'Home automation Kenya',
    'FIDIC engineer Kenya',
    'BauKG health and safety',
    'Power transmission optimization',
    'Erita Jewellery West Gate',
    'Hayat Hotel lighting',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - Engineering & Sales Services`,
    description: siteConfig.tagline,
    images: [
      {
        url: '/assets/solar-engineers-team.jpg',
        width: 1200,
        height: 800,
        alt: 'Wakisha Electrical Engineering solar and power installation team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Kenya`,
    description: siteConfig.tagline,
    images: ['/assets/solar-engineers-team.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/assets/wakisha-logo.jpg' },
    ],
    apple: '/assets/wakisha-logo.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-orange-500 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
