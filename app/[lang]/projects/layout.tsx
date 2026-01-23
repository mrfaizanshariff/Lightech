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
      ? 'مشاريع الإضاءة | لايتك - +200 مشروع إضاءة معمارية وداخلية في السعودية'
      : 'Lighting Projects | Lightech - 200+ Architectural & Interior Lighting Projects in Saudi Arabia',

    description: isArabic
      ? 'اكتشف محفظة مشاريع لايتك: +200 مشروع إضاءة معمارية وداخلية منجز في الرياض وجدة والدمام. مشاريع تجارية، سكنية، حكومية، وضيافة. شاهد أعمالنا في الإضاءة المعمارية، الواجهات، والإضاءة الداخلية.'
      : 'Discover Lightech project portfolio: 200+ completed architectural and interior lighting projects in Riyadh, Jeddah, and Dammam. Commercial, residential, government, and hospitality projects. View our work in architectural lighting, facades, and interior lighting.',

    keywords: isArabic
      ? [
          'مشاريع إضاءة السعودية',
          'مشاريع لايتك',
          'مشاريع إضاءة معمارية',
          'مشاريع إضاءة داخلية',
          'مشاريع إضاءة الرياض',
          'مشاريع إضاءة جدة',
          'مشاريع إضاءة الدمام',
          'معرض أعمال إضاءة',
          'مشاريع إضاءة تجارية',
          'مشاريع إضاءة سكنية',
        ]
      : [
          'lighting projects Saudi Arabia',
          'Lightech projects',
          'architectural lighting projects',
          'interior lighting projects',
          'lighting projects Riyadh',
          'lighting projects Jeddah',
          'lighting projects Dammam',
          'lighting portfolio',
          'commercial lighting projects',
          'residential lighting projects',
        ],

    openGraph: {
      title: isArabic
        ? 'مشاريع الإضاءة | لايتك'
        : 'Lighting Projects | Lightech',
      description: isArabic
        ? '+200 مشروع إضاءة منجز في السعودية'
        : '200+ completed lighting projects in Saudi Arabia',
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

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
