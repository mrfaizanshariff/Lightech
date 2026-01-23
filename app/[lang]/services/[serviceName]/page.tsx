import IndividualPageHeader from '@/components/shared-ui/individual-page-header';
import { motion } from 'framer-motion';
import React from 'react'
import content from "../../../../public/assets/content.json"

import { SERVICES } from '../../../../lib/dynamicRoutes';
import { Metadata } from 'next';

export function generateStaticParams() {
  const languages = ['en', 'ar'];

  return languages.flatMap((lang) =>
    SERVICES.map((service) => ({
      lang,
      serviceName: service.slug,
    }))
  );
}

function returnMetadata(serviceName: string, isArabic: boolean, baseUrl:string, path:string,params:any): any {
  switch (serviceName) {
    case 'lighting':
      return {
    title: isArabic
      ? 'الإضاءة المعمارية | لايتك - تصميم وتركيب إضاءة الواجهات والمباني في السعودية'
      : 'Architectural Lighting | Lightech - Facade & Building Lighting Design in Saudi Arabia',

    description: isArabic
      ? 'خدمات تصميم وتركيب الإضاءة المعمارية الاحترافية. لايتك تقدم حلول إضاءة الواجهات، المباني التجارية والسكنية، والمشاريع الكبرى في الرياض وجدة والدمام. تقنيات LED متقدمة، كفاءة طاقة عالية، تصاميم مبتكرة.'
      : 'Professional architectural lighting design and installation services. Lightech delivers facade lighting, commercial and residential building solutions, and large-scale projects in Riyadh, Jeddah, and Dammam. Advanced LED technology, high energy efficiency, innovative designs.',

    keywords: isArabic
      ? [
          'إضاءة معمارية السعودية',
          'تصميم إضاءة معمارية',
          'إضاءة واجهات المباني',
          'إضاءة معمارية الرياض',
          'إضاءة معمارية جدة',
          'إضاءة معمارية الدمام',
          'حلول إضاءة LED معمارية',
          'شركة إضاءة معمارية',
          'تركيب إضاءة واجهات',
          'إضاءة مباني تجارية',
          'إضاءة مباني سكنية',
          'إضاءة خارجية معمارية',
          'مصمم إضاءة معمارية',
          'استشارات إضاءة معمارية',
        ]
      : [
          'architectural lighting Saudi Arabia',
          'architectural lighting design',
          'facade lighting',
          'building lighting Saudi',
          'architectural lighting Riyadh',
          'architectural lighting Jeddah',
          'architectural lighting Dammam',
          'LED architectural lighting',
          'architectural lighting company',
          'facade lighting installation',
          'commercial building lighting',
          'residential building lighting',
          'exterior architectural lighting',
          'architectural lighting designer',
          'architectural lighting consultant',
        ],

    openGraph: {
      title: isArabic
        ? 'الإضاءة المعمارية | لايتك'
        : 'Architectural Lighting | Lightech',
      description: isArabic
        ? 'حلول إضاءة معمارية احترافية للمباني والواجهات'
        : 'Professional architectural lighting solutions for buildings and facades',
      url: `${baseUrl}/${params.lang}${path}`,
      type: 'website',
      images: [
        {
          url: `${baseUrl}/services/architectural-lighting-og.jpg`,
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
    };
    case 'wiringDevices':
      return {
    title: isArabic
      ? 'الأجهزة الكهربائية | لايتك - مفاتيح ومخارج كهربائية فاخرة في السعودية'
      : 'Wiring Devices | Lightech - Premium Switches & Electrical Outlets in Saudi Arabia',

    description: isArabic
      ? 'أجهزة كهربائية وملحقات فاخرة للمشاريع السكنية والتجارية. لايتك توفر مفاتيح إضاءة، مخارج كهربائية، لوحات تحكم، وأنظمة توزيع طاقة عالية الجودة في الرياض وجدة والدمام. علامات تجارية عالمية، تصاميم عصرية.'
      : 'Premium electrical devices and accessories for residential and commercial projects. Lightech supplies high-quality light switches, electrical outlets, control panels, and power distribution systems in Riyadh, Jeddah, and Dammam. International brands, modern designs.',

    keywords: isArabic
      ? [
          'أجهزة كهربائية السعودية',
          'مفاتيح إضاءة',
          'مخارج كهربائية',
          'مفاتيح فاخرة',
          'أجهزة كهربائية الرياض',
          'مفاتيح ذكية',
          'لوحات تحكم كهربائية',
          'توزيع طاقة',
          'ملحقات كهربائية',
          'مفاتيح تصميم عصري',
        ]
      : [
          'wiring devices Saudi Arabia',
          'light switches',
          'electrical outlets',
          'premium switches',
          'wiring devices Riyadh',
          'smart switches',
          'electrical control panels',
          'power distribution',
          'electrical accessories',
          'modern design switches',
        ],

    openGraph: {
      title: isArabic ? 'الأجهزة الكهربائية | لايتك' : 'Wiring Devices | Lightech',
      description: isArabic
        ? 'أجهزة كهربائية فاخرة ومفاتيح عصرية'
        : 'Premium electrical devices and modern switches',
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
    case 'controlSystems':
      return {
    title: isArabic
      ? 'أنظمة التحكم الذكية | لايتك - أنظمة تحكم الإضاءة الذكية والأتمتة في السعودية'
      : 'Smart Control Systems | Lightech - Smart Lighting Control & Automation Systems in Saudi Arabia',

    description: isArabic
      ? 'أنظمة تحكم إضاءة ذكية ومتطورة للمباني السكنية والتجارية. لايتك تقدم حلول أتمتة الإضاءة، التحكم المركزي، الجدولة التلقائية، وتوفير الطاقة في الرياض وجدة والدمام. أنظمة DALI، KNX، DMX وتطبيقات الهاتف الذكي.'
      : 'Advanced smart lighting control systems for residential and commercial buildings. Lightech provides lighting automation, centralized control, automatic scheduling, and energy savings in Riyadh, Jeddah, and Dammam. DALI, KNX, DMX systems and smartphone apps.',

    keywords: isArabic
      ? [
          'أنظمة تحكم إضاءة',
          'تحكم إضاءة مركزي',
          'نظام DALI',
          'نظام KNX',
          'نظام DMX',
          'تحكم إضاءة عن بعد',
          'أنظمة توفير طاقة',
          'إضاءة ذكية الرياض',
          'إضاءة ذكية جدة',
          'تطبيق تحكم إضاءة',
          'أتمتة مباني',
        ]
      : [
          'lighting control systems',
          'smart lighting control',
          'lighting automation',
          'smart control systems Saudi',
          'centralized lighting control',
          'DALI system',
          'KNX system',
          'DMX system',
          'remote lighting control',
          'energy saving systems',
          'smart lighting Riyadh',
          'smart lighting Jeddah',
          'lighting control app',
          'building automation',
        ],

    openGraph: {
      title: isArabic
        ? 'أنظمة التحكم الذكية | لايتك'
        : 'Smart Control Systems | Lightech',
      description: isArabic
        ? 'أنظمة تحكم إضاءة ذكية وأتمتة متطورة'
        : 'Smart lighting control and advanced automation systems',
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
    case 'renewables':
      return {
    title: isArabic
      ? 'أنظمة التحكم الذكية | لايتك - أنظمة تحكم الإضاءة الذكية والأتمتة في السعودية'
      : 'Smart Renewable Energy Systems | Lightech - Smart Lighting Renewable Energy & Automation Systems in Saudi Arabia',

    description: isArabic
      ? 'أنظمة تحكم إضاءة ذكية ومتطورة للمباني السكنية والتجارية. لايتك تقدم حلول أتمتة الإضاءة، التحكم المركزي، الجدولة التلقائية، وتوفير الطاقة في الرياض وجدة والدمام. أنظمة DALI، KNX، DMX وتطبيقات الهاتف الذكي.'
      : 'Advanced smart lighting Renewable Energy systems for residential and commercial buildings. Lightech provides lighting automation, centralized Renewable Energy, automatic scheduling, and energy savings in Riyadh, Jeddah, and Dammam. DALI, KNX, DMX systems and smartphone apps.',

    keywords: isArabic
      ? [
          'أنظمة تحكم إضاءة',
          'تحكم إضاءة مركزي',
          'نظام DALI',
          'نظام KNX',
          'نظام DMX',
          'تحكم إضاءة عن بعد',
          'أنظمة توفير طاقة',
          'إضاءة ذكية الرياض',
          'إضاءة ذكية جدة',
          'تطبيق تحكم إضاءة',
          'أتمتة مباني',
        ]
      : [
          'lighting Renewable Energy systems',
          'smart lighting Renewable Energy',
          'lighting automation',
          'smart Renewable Energy systems Saudi',
          'centralized lighting Renewable Energy',
          'DALI system',
          'KNX system',
          'DMX system',
          'remote lighting Renewable Energy',
          'energy saving systems',
          'smart lighting Riyadh',
          'smart lighting Jeddah',
          'lighting Renewable Energy app',
          'building automation',
        ],

    openGraph: {
      title: isArabic
        ? 'أنظمة التحكم الذكية | لايتك'
        : 'Smart Renewable Energy Systems | Lightech',
      description: isArabic
        ? 'أنظمة تحكم إضاءة ذكية وأتمتة متطورة'
        : 'Smart lighting Renewable Energy and advanced automation systems',
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
    
  default:
      return isArabic
        ? 'خدمات الإضاءة | لايتك - حلول إضاءة معمارية وداخلية ومناظر طبيعية في السعودية'
        : 'Lighting Services | Lightech - Architectural, Interior & Landscape Lighting Solutions in Saudi Arabia';
  }
}
export async function generateMetadata({ params }: { params: { lang: 'en' | 'ar',serviceName: string  }}): Promise<Metadata> {
  const baseUrl = 'https://lightech.com.sa';
  const path = `/services/${params.serviceName}`;
  const isArabic = params.lang === 'ar';

  return returnMetadata(params.serviceName, isArabic, baseUrl, path,params);
}
function ServiceDetailpage({ params }: { params: { lang: 'en' | 'ar',serviceName: string  }}) {
    const language = params.lang
    const serviceKey = params.serviceName
  const {categories} = JSON.parse(JSON.stringify(content))[language === "en" ? "english":"ar"]?.servicesPage
  const cat = categories.find((c:any)=>c.key===serviceKey)
  return (
    <main className="pt-20">
     

      <div>
        <IndividualPageHeader
          title={cat.title}
          description={cat.summary}
        />
      </div>
        <section
          id={cat.key}
          key={cat.key}
          className={"bg-gray-50 dark:bg-gray-900"}
        >
          <div className="container mx-auto px-4">
            <div
              >
              {/* <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold">{cat.title}</h2>
                <p className="mt-4 text-muted-foreground">{cat.summary}</p>
              </div> */}

              <div className="lg:col-span-2 items-center">
                <div className="flex flex-col justify-around gap-12 lg:flex-row">
                  <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800"
                  >
                    <h4 className="text-lg font-semibold">{language==='en'?"Offerings":"العروض"}</h4>
                    <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                      {cat.offerings.map((item:any) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
              <div className="aspect-ratio-1-1">
                <img className="w-full h-full rounded-md" src={`/assets/${cat.imageSrc}`} alt="" />
              </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      
    </main>
  );
}

export default ServiceDetailpage