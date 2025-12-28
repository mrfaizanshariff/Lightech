import { Metadata } from "next";
export async function generateMetadata({
  params,
}: {
  params: { lang: 'en' | 'ar' };
}): Promise<Metadata> {
  const baseUrl = 'https://lightech.com.sa';
  const path = '/projects';
  const isArabic = params.lang === 'ar';

  return {
    title: isArabic
      ?' مشاريع الإضاءة في السعودية | أعمال وتصاميم إضاءة احترافية – لايتك'

      : "Lighting Projects in Saudi Arabia | Architectural & Commercial Portfolio – Lightech",

    description: isArabic
      ? 'استعرض مشاريع لايتك في الإضاءة المعمارية والتجارية وإضاءة المساحات الخارجية المنفذة في مختلف مناطق المملكة العربية السعودية.'
      : "Explore Lightech’s lighting projects across Saudi Arabia, including architectural, commercial, and outdoor lighting installations delivered across Riyadh and major cities.",

    openGraph: {
      title: isArabic
        ?'مشاريع الإضاءة في السعودية | أعمال وتصاميم إضاءة احترافية – لايتك'
        : 'Lighting Projects in Saudi Arabia | Architectural & Commercial Portfolio – Lightech',
      description: isArabic
        ? 'استعرض مشاريع لايتك في الإضاءة المعمارية والتجارية وإضاءة المساحات الخارجية المنفذة في مختلف مناطق المملكة العربية السعودية.'
        : 'Explore Lightech’s lighting projects across Saudi Arabia, including architectural, commercial, and outdoor lighting installations delivered across Riyadh and major cities.',
      url: `${baseUrl}/${params.lang}${path}`,
      type: 'website',
    },
    keywords: isArabic ? [
     ' مشاريع إضاءة السعودية',
     ' أعمال إضاءة',
     ' تنفيذ إضاءة مشاريع',
     ' تصاميم إضاءة',
     ' إضاءة معمارية',
     ' مشاريع لايتك'

    ] : [
      'lighting projects Saudi Arabia',
      'lighting installations KSA',
      'architectural lighting projects',
      'commercial lighting projects',
      'lighting design portfolio Saudi Arabia',
      'Lightech projects'

    ],
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

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
