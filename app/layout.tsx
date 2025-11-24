import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Noto_Kufi_Arabic } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LightRays from '@/components/shared-ui/light-rays';
import { LanguageProvider } from '@/context/LanguageContext';
import localFont from 'next/font/local';

const Bahnschrift = localFont({
  src: '../public/fonts/Bahnschrift.ttf',
  display: 'swap',
});
const noto_kufi = Noto_Kufi_Arabic({ subsets: ['arabic'] });
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://lightech.com.sa'),
  title: {
    template: '%s | Lightech',
    default: 'Lightech - Professional Lighting Solutions in Saudi Arabia',
  },
  description: 'Lightech provides sophisticated turnkey lighting solutions with professional expertise in architectural, interior, and landscape lighting projects since 2005. 200+ projects completed.',
  keywords: ['lighting solutions', 'architectural lighting', 'interior lighting', 'landscape lighting', 'Saudi Arabia', 'lighting design', 'professional lighting'],
  authors: [{ name: 'Lightech' }],
  creator: 'Lightech',
  publisher: 'Lightech',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lightech.com.sa',
    siteName: 'Lightech',
    title: 'Lightech - Professional Lighting Solutions in Saudi Arabia',
    description: 'Sophisticated turnkey lighting solutions with 200+ completed projects. Expertise in architectural, interior, and landscape lighting since 2005.',
    images: [
      {
        url: 'https://lightech.com.sa/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lightech - Professional Lighting Solutions',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lightech - Professional Lighting Solutions',
    description: 'Sophisticated turnkey lighting solutions with professional expertise in architectural, interior, and landscape lighting.',
    images: ['https://lightech.com.sa/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://lightech.com.sa',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD Structured Data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lightech',
    url: 'https://lightech.com.sa',
    logo: 'https://lightech.com.sa/lightech_logo.jpg',
    description: 'Professional lighting solutions provider with expertise in architectural, interior, and landscape lighting.',
    sameAs: [
      'https://www.instagram.com/lightech_sa',
      'https://www.linkedin.com/company/light-technologies-co-ltd',
      'https://x.com/lightech_sa'
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SA',
      addressRegion: 'Saudi Arabia',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      areaServed: ['SA'],
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for additional performance */}
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        
        {/* Favicon and manifest */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Navbar />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}