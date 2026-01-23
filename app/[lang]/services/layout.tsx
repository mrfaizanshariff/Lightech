import { Metadata } from "next";

export async function generateStaticParams() {
  return [
    { lang: 'en', serviceName:'lighting' },
    { lang: 'en', serviceName:'wiringDevices' },
    { lang: 'ar' },
  ];
}
export async function generateMetadata({
  params,
}: {
  params: { lang: 'en' | 'ar' };
}): Promise<Metadata> {
  const baseUrl = 'https://lightech.com.sa';
  const path = '/services';
  const isArabic = params.lang === 'ar';

  return {
    title: isArabic
      ? 'خدمات الإضاءة | لايتك - حلول إضاءة معمارية وداخلية ومناظر طبيعية في السعودية'
      : 'Lighting Services | Lightech - Architectural, Interior & Landscape Lighting Solutions in Saudi Arabia',

    description: isArabic
      ? 'خدمات إضاءة متكاملة في السعودية: إضاءة معمارية، داخلية، مناظر طبيعية، أنظمة تحكم ذكية، أجهزة كهربائية، وطاقة متجددة. لايتك تقدم حلول إضاءة مبتكرة وموفرة للطاقة في الرياض وجدة والدمام.'
      : 'Comprehensive lighting services in Saudi Arabia: architectural, interior, landscape lighting, smart control systems, wiring devices, and renewable energy. Lightech delivers innovative and energy-efficient lighting solutions in Riyadh, Jeddah, and Dammam.',

    keywords: isArabic
      ? [
          'خدمات إضاءة',
          'خدمات إضاءة السعودية',
          'إضاءة معمارية',
          'إضاءة داخلية',
          'إضاءة مناظر طبيعية',
          'أنظمة تحكم إضاءة',
          'أجهزة كهربائية',
          'طاقة شمسية',
          'حلول إضاءة متكاملة',
          'خدمات إضاءة احترافية',
        ]
      : [
          'lighting services',
          'lighting services Saudi Arabia',
          'architectural lighting',
          'interior lighting',
          'landscape lighting',
          'lighting control systems',
          'wiring devices',
          'solar energy',
          'comprehensive lighting solutions',
          'professional lighting services',
        ],

    openGraph: {
      title: isArabic
        ? 'خدمات الإضاءة | لايتك السعودية'
        : 'Lighting Services | Lightech Saudi Arabia',
      description: isArabic
        ? 'حلول إضاءة متكاملة: معمارية، داخلية، مناظر طبيعية، أنظمة تحكم'
        : 'Comprehensive lighting solutions: architectural, interior, landscape, control systems',
      url: `${baseUrl}/${params.lang}${path}`,
      type: 'website',
    },

    alternates: {
      canonical: `${baseUrl}/${params.lang}${path}`,
      languages: {
        'en-SA': `${baseUrl}/en${path}`,
        'ar-SA': `${baseUrl}/ar${path}`,
        'x-default': `${baseUrl}/en${path}`,
      },
    },
  };
}
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
