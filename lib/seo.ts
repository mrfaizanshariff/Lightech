// lib/seo.ts
// Helper functions for SEO and structured data

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

export const generateServiceSchema = (service: {
  name: string;
  description: string;
  image?: string;
  url: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    image: service.image,
    provider: {
      '@type': 'Organization',
      name: 'Lightech',
      url: 'https://lightech.com.sa',
    },
    url: service.url,
  };
};

export const generateProjectSchema = (project: {
  name: string;
  description: string;
  image?: string;
  category: string;
  year: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    image: project.image,
    about: project.category,
    datePublished: `${project.year}-01-01`,
    author: {
      '@type': 'Organization',
      name: 'Lightech',
    },
  };
};

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};
