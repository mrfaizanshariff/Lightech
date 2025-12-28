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
      ? 'من نحن | لايتك – شركة إضاءة بخبرة أكثر من 19 عاماً في السعودية'
      : 'About Lightech | Trusted Lighting Company in Saudi Arabia Since 2005',

    description: isArabic
      ? 'تعرّف على شركة لايتك، شركة إضاءة سعودية تأسست عام 2005 بخبرة تمتد لأكثر من 19 عاماً في حلول الإضاءة المعمارية والداخلية وإضاءة المشاريع.'
      : "Learn about Lightech, a trusted lighting company in Saudi Arabia with 19+ years of expertise in architectural, interior, and landscape lighting and over 200 completed projects.",

    openGraph: {
      title: isArabic
        ? 'من نحن | لايتك – شركة إضاءة بخبرة أكثر من 19 عاماً في السعودية'
        : 'About Lightech | Trusted Lighting Company in Saudi Arabia Since 2005',
      description: isArabic
        ? 'تعرّف على شركة لايتك، شركة إضاءة سعودية تأسست عام 2005 بخبرة تمتد لأكثر من 19 عاماً في حلول الإضاءة المعمارية والداخلية وإضاءة المشاريع.'
        : 'Learn about Lightech, a trusted lighting company in Saudi Arabia with 19+ years of expertise in architectural, interior, and landscape lighting and over 200 completed projects.',
      url: `${baseUrl}/${params.lang}${path}`,
      type: 'website',
    },
keywords: isArabic ?
[
' من نحن لايتك',
'شركة إضاءة سعودية',
'خبراء الإضاءة',
'شركة إضاءة بخبرة',
'حلول الإضاءة الاحترافية',
'لايتك السعودية'

]
: [
  'about Lightech',
  'lighting company Saudi Arabia history',
  'professional lighting experts KSA',
  'lighting specialists Saudi Arabia',
  'architectural lighting experts',
  'Lightech Saudi Arabia',
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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
