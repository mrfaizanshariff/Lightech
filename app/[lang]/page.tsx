// app/[lang]/page.tsx
// NO 'use client'; — server component for static export

import { Metadata } from "next";  // If adding page-specific metadata later
import HomeClient from "@/components/home/HomeClient";  // Import the new client component

// Optional: Page-specific metadata (inherits from layout, but override if needed)
export async function generateMetadata({
  params,
}: {
  params: { lang: 'en' | 'ar' };
}): Promise<Metadata> {
  const baseUrl = 'https://lightech.com.sa';
  const isArabic = params.lang === 'ar';

  return {
    title: isArabic
      ? 'لايتك | شركة إضاءة رائدة في السعودية - الرياض، جدة، الدمام | حلول إضاءة معمارية وداخلية'
      : 'Lightech | Leading Lighting Company in Saudi Arabia - Riyadh, Jeddah, Dammam | Architectural & Interior Lighting Solutions',

    description: isArabic
      ? 'لايتك - شركة إضاءة سعودية رائدة منذ 2005 تقدم حلول إضاءة متكاملة: معمارية، داخلية، مناظر طبيعية، وأنظمة تحكم ذكية. خبرة +19 عاماً، +200 مشروع منجز في الرياض وجدة والدمام. حلول LED موفرة للطاقة ومتوافقة مع رؤية 2030.'
      : 'Lightech - Leading Saudi lighting company since 2005 providing comprehensive lighting solutions: architectural, interior, landscape, and smart control systems. 19+ years experience, 200+ completed projects in Riyadh, Jeddah, and Dammam. Energy-efficient LED solutions aligned with Vision 2030.',

    keywords: isArabic
      ? [
          'شركة إضاءة السعودية',
          'شركة إضاءة الرياض',
          'شركة إضاءة جدة',
          'شركة إضاءة الدمام',
          'حلول إضاءة معمارية',
          'إضاءة داخلية السعودية',
          'إضاءة LED',
          'أنظمة إنارة ذكية',
          'مقاول إضاءة السعودية',
          'تصميم إضاءة معمارية',
          'إضاءة واجهات مباني',
          'إضاءة تجارية',
          'إضاءة سكنية',
          'شركات الإضاءة في السعودية',
          'لايتك',
          'أنظمة تحكم إضاءة',
          'طاقة متجددة',
          'أجهزة كهربائية',
        ]
      : [
          'lighting company Saudi Arabia',
          'lighting company Riyadh',
          'lighting company Jeddah',
          'lighting company Dammam',
          'architectural lighting Saudi',
          'interior lighting KSA',
          'LED lighting solutions',
          'smart lighting systems',
          'lighting contractor Saudi Arabia',
          'architectural lighting design',
          'facade lighting',
          'commercial lighting',
          'residential lighting',
          'lighting companies Saudi Arabia',
          'Lightech',
          'lighting control systems',
          'renewable energy',
          'wiring devices',
          'lighting services Saudi',
        ],

    openGraph: {
      title: isArabic
        ? 'لايتك | شركة إضاءة رائدة في السعودية'
        : 'Lightech | Leading Lighting Company in Saudi Arabia',
      description: isArabic
        ? 'حلول إضاءة متكاملة: معمارية، داخلية، مناظر طبيعية | +19 عاماً خبرة | +200 مشروع'
        : 'Comprehensive lighting solutions: architectural, interior, landscape | 19+ years | 200+ projects',
      url: `${baseUrl}/${params.lang}`,
      type: 'website',
      locale: isArabic ? 'ar_SA' : 'en_SA',
      siteName: 'Lightech',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: isArabic ? 'لايتك - شركة إضاءة السعودية' : 'Lightech - Saudi Lighting Company',
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      site: '@lightech_sa',
      title: isArabic
        ? 'لايتك | شركة إضاءة رائدة في السعودية'
        : 'Lightech | Leading Lighting Company in Saudi Arabia',
      description: isArabic
        ? 'حلول إضاءة متكاملة في السعودية | +19 عاماً خبرة'
        : 'Comprehensive lighting solutions in Saudi Arabia | 19+ years experience',
      images: [`${baseUrl}/twitter-card.jpg`],
    },

    alternates: {
      canonical: `${baseUrl}/${params.lang}`,
      languages: {
        'en-SA': `${baseUrl}/en`,
        'ar-SA': `${baseUrl}/ar`,
        'x-default': `${baseUrl}/en`,
      },
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
    }
  };
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'ar' },
  ];
}

interface Props {
  params: { lang: 'en' | 'ar' };
}



export default function LangHomePage({ params }: Props) {
  
  const isArabic = params.lang === 'ar';

  const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lightech',
  alternateName: isArabic ? 'لايتك' : 'Light Technologies Co. Ltd.',
  url: 'https://lightech.com.sa',
  logo: 'https://lightech.com.sa/lightech_logo.jpg',
  description: isArabic
    ? 'شركة إضاءة سعودية رائدة تقدم حلول إضاءة معمارية وداخلية ومناظر طبيعية في الرياض وجدة والدمام'
    : 'Leading Saudi lighting company providing architectural, interior, and landscape lighting solutions in Riyadh, Jeddah, and Dammam',
  foundingDate: '2005',
  founder: {
    '@type': 'Organization',
    name: 'Lightech Founders',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+966 114664696',
      areaServed: 'SA',
      availableLanguage: ['Arabic', 'English'],
    },
    {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      telephone: '+966 114664696',
      areaServed: ['Riyadh', 'Jeddah', 'Dammam'],
      availableLanguage: ['Arabic', 'English'],
    },
  ],
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: 'Riyadh',
      addressRegion: 'Riyadh',
      addressCountry: 'SA',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Jeddah',
      addressRegion: 'Makkah',
      addressCountry: 'SA',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Dammam',
      addressRegion: 'Eastern Province',
      addressCountry: 'SA',
    },
  ],
  sameAs: [
    'https://www.instagram.com/lightech_sa',
    'https://www.linkedin.com/company/light-technologies-co-ltd',
    'https://x.com/lightech_sa',
  ],
  serviceArea: {
    '@type': 'Country',
    name: 'Saudi Arabia',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: isArabic ? 'خدمات الإضاءة' : 'Lighting Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: isArabic ? 'الإضاءة المعمارية' : 'Architectural Lighting',
          description: isArabic
            ? 'تصميم وتنفيذ حلول إضاءة معمارية متكاملة'
            : 'Comprehensive architectural lighting design and implementation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: isArabic ? 'الإضاءة الداخلية' : 'Interior Lighting',
          description: isArabic
            ? 'حلول إضاءة داخلية مخصصة للمساحات التجارية والسكنية'
            : 'Custom interior lighting solutions for commercial and residential spaces',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: isArabic ? 'إضاءة المناظر الطبيعية' : 'Landscape Lighting',
          description: isArabic
            ? 'تصميم إضاءة خارجية للحدائق والمساحات الطبيعية'
            : 'Outdoor lighting design for gardens and natural spaces',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: isArabic ? 'أنظمة التحكم الذكية' : 'Smart Control Systems',
          description: isArabic
            ? 'أنظمة تحكم ذكية للإضاءة وإدارة الطاقة'
            : 'Smart lighting control and energy management systems',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1',
  },
};
  // JSON-LD for homepage (server-rendered into static HTML)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HomeClient params={params} />
    </>
  );
}