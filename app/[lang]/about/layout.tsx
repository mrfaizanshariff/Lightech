import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { lang: 'en' | 'ar' };
}): Promise<Metadata> {
  const baseUrl = 'https://lightech.com.sa';
  const path = '/about';
  const isArabic = params.lang === 'ar';

  return {
    title: isArabic
      ? 'من نحن | لايتك - شركة إضاءة سعودية رائدة منذ 2005 | خبرة +19 عاماً في حلول الإضاءة'
      : 'About Lightech | Leading Saudi Lighting Company Since 2005 | 19+ Years of Lighting Excellence',

    description: isArabic
      ? 'تعرّف على لايتك، شركة إضاءة سعودية تأسست عام 2005 بخبرة تمتد لأكثر من 19 عاماً. أنجزنا +200 مشروع في الإضاءة المعمارية والداخلية عبر الرياض وجدة والدمام. فريق متخصص، حلول مبتكرة، والتزام بالجودة والاستدامة.'
      : 'Learn about Lightech, a leading Saudi lighting company established in 2005 with 19+ years of expertise. We completed 200+ architectural and interior lighting projects across Riyadh, Jeddah, and Dammam. Specialized team, innovative solutions, commitment to quality and sustainability.',

    keywords: isArabic
      ? [
          'من نحن لايتك',
          'شركة لايتك',
          'تاريخ لايتك',
          'شركة إضاءة سعودية',
          'خبرة شركة إضاءة',
          'فريق لايتك',
          'مشاريع لايتك',
          'قيم لايتك',
          'رسالة لايتك',
          'رؤية لايتك',
          'شركة إضاءة الرياض',
          'شركة إضاءة موثوقة',
        ]
      : [
          'about Lightech',
          'Lightech company history',
          'lighting company Saudi Arabia',
          'Lightech team',
          'Lightech projects',
          'lighting expertise Saudi',
          'professional lighting company',
          'Lightech values',
          'Lightech mission',
          'Lightech vision',
          'trusted lighting company',
          'experienced lighting specialists',
        ],

    openGraph: {
      title: isArabic
        ? 'من نحن | لايتك - شركة إضاءة سعودية رائدة'
        : 'About Lightech | Leading Saudi Lighting Company',
      description: isArabic
        ? 'خبرة +19 عاماً في حلول الإضاءة | +200 مشروع منجز'
        : '19+ years of lighting expertise | 200+ completed projects',
      url: `${baseUrl}/${params.lang}${path}`,
      type: 'website',
      images: [
        {
          url: `${baseUrl}/about-og.jpg`,
          width: 1200,
          height: 630,
        },
      ],
    },

    alternates: {
      canonical: `${baseUrl}/${params.lang}${path}`,
      languages: {
        'en-SA': `${baseUrl}/en${path}`,
        'ar-SA': `${baseUrl}/ar${path}`,
        'x-default': `${baseUrl}/en${path}`,
      },
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function AboutLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: 'en' | 'ar' };
}) {
  const isArabic =  params.lang === 'ar' ; // Replace with actual language detection if needed
  
  const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: isArabic ? 'من نحن' : 'About Lightech',
  description: isArabic
    ? 'معلومات عن شركة لايتك وخبرتنا في مجال الإضاءة'
    : 'Information about Lightech and our expertise in lighting',
  mainEntity: {
    '@type': 'Organization',
    name: 'Lightech',
    foundingDate: '2005',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '50+',
    },
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: isArabic ? 'الرئيسية' : 'Home',
      item: `https://lightech.com.sa/${params.lang}`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: isArabic ? 'من نحن' : 'About',
      item: `https://lightech.com.sa/${params.lang}/about`,
    },
  ],
};
  return <>
  <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
  <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}</>;
}
