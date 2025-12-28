import { Metadata } from "next";


export async function generateMetadata({
  params,
}: {
  params: { lang: 'en' | 'ar' };
}): Promise<Metadata> {
  const baseUrl = 'https://lightech.com.sa';
  const path = '/contact';
  const isArabic = params.lang === 'ar';

  return {
    title: isArabic
      ? 'تواصل مع لايتك | شركة إضاءة في السعودية والرياض'
      : "Contact Lightech | Lighting Company in Saudi Arabia & Riyadh",

    description: isArabic
      ? 'تواصل مع شركة لايتك، شركة إضاءة متخصصة في السعودية، للحصول على حلول إضاءة معمارية وتجارية وتنفيذ مشاريع الإضاءة باحتراف.'
      : "Contact Lightech, a professional lighting company in Saudi Arabia. Get in touch for architectural, commercial, and landscape lighting solutions across KSA.",

    openGraph: {
      title: isArabic
        ? 'تواصل مع لايتك | شركة إضاءة في السعودية والرياض'
        : 'Contact Lightech | Lighting Company in Saudi Arabia & Riyadh',
      description: isArabic
        ? 'تواصل مع شركة لايتك، شركة إضاءة متخصصة في السعودية، للحصول على حلول إضاءة معمارية وتجارية وتنفيذ مشاريع الإضاءة باحتراف.'
        : 'Contact Lightech, a professional lighting company in Saudi Arabia. Get in touch for architectural, commercial, and landscape lighting solutions across KSA.',
      url: `${baseUrl}/${params.lang}${path}`,
      type: 'website',
    },
keywords: isArabic ? [
 ' تواصل شركة إضاءة',
'شركة إضاءة الرياض',
'مقاول إضاءة السعودية',
'طلب خدمة إضاءة',
'استشارة إضاءة',
'لايتك تواصل'

] :[
    'contact lighting company Saudi Arabia',
    'lighting company Riyadh contact',
    'lighting contractor KSA',
    'lighting services enquiry Saudi Arabia',
    'Lightech contact'
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
