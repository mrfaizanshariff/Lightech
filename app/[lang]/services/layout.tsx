import { Metadata } from "next";

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
      ? 'خدمات الإضاءة في السعودية | تصميم وتنفيذ حلول الإضاءة – لايتك'
      : "Lighting Services in Saudi Arabia | Architectural, Commercial & Landscape – Lightech",

    description: isArabic
      ? 'تقدم لايتك خدمات الإضاءة في السعودية تشمل الإضاءة المعمارية، التجارية، إضاءة الواجهات، وإضاءة المناظر الطبيعية باحترافية عالية.'
      : "Professional lighting services in Saudi Arabia by Lightech. We specialize in architectural, commercial, facade, and landscape lighting solutions across Riyadh and KSA.",

    openGraph: {
      title: isArabic
        ? 'خدمات الإضاءة في السعودية | تصميم وتنفيذ حلول الإضاءة – لايتك'
        : 'Lighting Services in Saudi Arabia | Architectural, Commercial & Landscape – Lightech',
      description: isArabic
        ? 'تقدم لايتك خدمات الإضاءة في السعودية تشمل الإضاءة المعمارية، التجارية، إضاءة الواجهات، وإضاءة المناظر الطبيعية باحترافية عالية.'
        : 'Professional lighting services in Saudi Arabia by Lightech. We specialize in architectural, commercial, facade, and landscape lighting solutions across Riyadh and KSA.',
      url: `${baseUrl}/${params.lang}${path}`,
      type: 'website',
    },
keywords: isArabic?
[
 ' خدمات الإضاءة السعودية',
'تصميم إضاءة معماري',
'شركة إضاءة مشاريع',
'إضاءة تجارية',
'إضاءة واجهات',
'مقاول إضاءة السعودية',
'حلول الإضاءة المتكاملة'

]:
[
  'lighting services Saudi Arabia',
  'architectural lighting Saudi Arabia',
  'commercial lighting Riyadh',
  'landscape lighting KSA',
  'facade lighting Saudi Arabia',
  'lighting design services',
  'lighting contractor Saudi Arabia',
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
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
