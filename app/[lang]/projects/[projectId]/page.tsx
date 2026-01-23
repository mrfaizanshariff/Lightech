import IndividualPageHeader from '@/components/shared-ui/individual-page-header';
import React from 'react'
import { projects } from '../../../../lib/projectsData';

export function generateStaticParams() {
  const languages = ['en', 'ar'];
  return languages.flatMap((lang) =>
    projects.map((project) => ({
      lang,
      projectId: project.slug.trim().toLowerCase().replace(/\s+/g, '-'),
    }))
  );
}

function ProjectDetailpage({ params }: { params: { lang: 'en' | 'ar',projectId: string  }}) {
  const language = params.lang
  const projectIdKey = params.projectId
  
    const selectedProject = projects.find((p)=>p.slug.trim().toLowerCase().replace(/\s+/g, '-')===projectIdKey)
    const isArabic = language === 'ar';
    const baseUrl = 'https://lightech.com.sa';
      const projectSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:selectedProject?.title,
  image: `${baseUrl}${selectedProject?.image}`,
  datePublished: selectedProject?.year || '2024',
  dateModified: selectedProject?.year || '2024',
  author: {
    '@type': 'Organization',
    name: 'Lightech',
    url: 'https://lightech.com.sa',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Lightech',
    logo: {
      '@type': 'ImageObject',
      url: 'https://lightech.com.sa/lightech_logo.jpg',
    },
  },
  description:`The Project was carried out by Lightech in ${selectedProject?.location}, for ${selectedProject?.client}.`,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${baseUrl}/${params.lang}/projects/${params.projectId}`,
  },
  about: {
    '@type': 'Service',
    serviceType: selectedProject?.service,
  },
  locationCreated: {
    '@type': 'Place',
    name: selectedProject?.location,
    address: {
      '@type': 'PostalAddress',
      addressLocality: selectedProject?.location,
      addressCountry: 'SA',
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
      item: `${baseUrl}/${params.lang}`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: isArabic ? 'المشاريع' : 'Projects',
      item: `${baseUrl}/${params.lang}/projects`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: selectedProject?.title,
      item: `${baseUrl}/${params.lang}/projects/${params.projectId}`,
    },
  ],
};

const imageGallerySchema = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name:`${selectedProject?.title} Gallery`,
  image: {
    '@type': 'ImageObject',
    url: `${baseUrl}${selectedProject?.image}`,
    name: `${selectedProject?.title} - Image ${selectedProject?.client}`,
  },
};
    return (
      <>
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
  <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
  <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />
    <main className="pt-20">
     

      <div>
        <IndividualPageHeader
          title={selectedProject?.title}
          description={selectedProject?.service}
        />
      </div>
        <section
          id={selectedProject?.id}
          key={selectedProject?.id}
          className={"bg-gray-50 dark:bg-gray-900"}
        >
          <div className="container mx-auto px-4">
            <div
              
            >

              <div>
                <div className="flex flex-col justify-around gap-12 lg:flex-row">
                  <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800"
                  >
                    <h4 className="text-lg font-semibold">Project Details</h4>
                    <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                     
                        <li className="flex items-start gap-2">
                          <span className="text-primary">Category : </span>
                          <span>{selectedProject?.category}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">Client : </span>
                          <span>{selectedProject?.client}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">Location : </span>
                          <span>{selectedProject?.location}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">Service Provided : </span>
                          <span>{selectedProject?.service}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">Year : </span>
                          <span>{selectedProject?.year ? selectedProject?.year : '-'}</span>
                        </li>
                    </ul>
                  </div>
                  <div className="aspect-ratio-1-1">
                        <img className="w-full h-full rounded-md"  src={`${selectedProject?.image}`} alt="" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      
    </main>
      </>
      
  );
}

export default ProjectDetailpage