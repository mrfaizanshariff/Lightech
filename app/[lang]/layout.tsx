// app/[lang]/layout.tsx
import type { Metadata } from 'next';
import { Noto_Kufi_Arabic } from 'next/font/google';
import localFont from 'next/font/local';
import { LanguageProvider } from '@/context/LanguageContext'; // Uncomment if using
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { GoogleAnalytics } from '@next/third-parties/google'
// Import other providers/components as needed

const Bahnschrift = localFont({
  src: '../../public/fonts/Bahnschrift.ttf',
  display: 'swap',
});

const noto_kufi = Noto_Kufi_Arabic({ subsets: ['arabic'] });

export async function generateMetadata({
  params,
}: {
  params: { lang: 'en' | 'ar' };
}): Promise<Metadata> {
  const baseUrl = 'https://lightech.com.sa';
  const isArabic = params.lang === 'ar';

  const titleDefault = isArabic
    ? 'شركة إضاءة في السعودية | حلول الإضاءة المعمارية والتجارية – لايتك'
    : 'Lighting Company in Saudi Arabia | Architectural & Commercial Lighting – Lightech';

  const description = isArabic
    ? 'لايتك شركة إضاءة رائدة في السعودية تقدم حلول الإضاءة المعمارية والتجارية وإضاءة المناظر الطبيعية في الرياض وجميع أنحاء المملكة. أكثر من 200 مشروع منذ 2005.'
    : 'Lightech is a leading lighting company in Saudi Arabia delivering architectural, commercial, and landscape lighting solutions across Riyadh and KSA. 200+ projects completed since 2005.';

  return {
    metadataBase: new URL(baseUrl),

    title: {
      template: '%s | Lightech',
      default: titleDefault,
    },

    description,

    keywords: isArabic ? [
      'شركة إضاءة في السعودية',
      'شركة إنارة',
      'خدمات الإضاءة السعودية',
      'شركة إضاءة الرياض',
      'مقاول إضاءة',
      'تصميم إضاءة معماري',
      'حلول الإضاءة',
      'لايتك'
    ] : [
      'lighting company in Saudi Arabia',
      'lighting services Saudi Arabia',
      'lighting provider Riyadh',
      'lighting contractor KSA',
      'architectural lighting Saudi Arabia',
      'commercial lighting Saudi Arabia',
      'professional lighting company',
      'Lightech lighting',
    ],

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

    alternates: {
      canonical: `${baseUrl}/${params.lang}`,
      languages: {
        'en-SA': `${baseUrl}/en`,
        'ar-SA': `${baseUrl}/ar`,
        'x-default': `${baseUrl}/en`,
      },
    },

    openGraph: {
      type: 'website',
      locale: isArabic ? 'ar_SA' : 'en_US',
      url: `${baseUrl}/${params.lang}`,
      siteName: 'Lightech',
      title: titleDefault,
      description,
      images: [
        {
          url: `${baseUrl}/_next/static/media/logo_lightect_00.999146cd.svg`,
          width: 1200,
          height: 630,
          alt: 'Lightech - Professional Lighting Solutions',
          type: 'image/jpeg',
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: titleDefault,
      description,
      images: [`${baseUrl}/_next/static/media/logo_lightect_00.999146cd.svg`],
    },
  };
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: 'en' | 'ar' };
}) {
  const isArabic = params.lang === 'ar';

  // JSON-LD Structured Data (lang-specific if needed)
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lightech',
    url: 'https://lightech.com.sa',
    logo: 'https://lightech.com.sa/lightech_logo.jpg',
    description: isArabic
      ? 'مزود حلول إضاءة احترافية في السعودية، الرياض، جدة، الخبر بخبرة في الإضاءة المعمارية والداخلية والمناظر الطبيعية.'
      : 'Professional lighting solutions provider in Saudi Arabia, Riyadh, Jeddah, AL khobar with expertise in architectural, interior, and landscape lighting.',
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
    <html
      lang={params.lang}
      dir={isArabic ? 'rtl' : 'ltr'}
      suppressHydrationWarning
      className={isArabic ? noto_kufi.className : Bahnschrift.className}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <GoogleAnalytics gaId="G-M5067FWQBX" />
      </head>
      <body>
        <Navbar params={params} />
        {children}
        <Footer params={params} />
      </body>
    </html>
  );
}