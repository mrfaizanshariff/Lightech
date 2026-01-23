// app/[lang]/projects/page.tsx
// NO 'use client'; — server component for static export

import { Metadata } from "next";
import ProjectsClient from "@/components/home/ProjectsClient";  // Import the new client component

// Optional: Page-specific metadata (inherits from [lang]/layout.tsx)
export async function generateMetadata({
  params,
}: {
  params: { lang: 'en' | 'ar' };
}): Promise<Metadata> {
  const isArabic = params.lang === 'ar';
  const baseUrl = 'https://lightech.com.sa';
  return {
    title: isArabic ? 'مشاريعنا | لايتك' : 'Our Projects | Lightech',
    description: isArabic 
      ? 'استعرض مشاريع الإضاءة المهنية لدينا في السعودية، بما في ذلك الإضاءة المعمارية والداخلية.'
      : 'Explore our professional lighting projects in Saudi Arabia, including architectural and interior solutions.',
    alternates: {
      canonical: `${baseUrl}/${params.lang}/projects`,
    },
    openGraph: {
      title: isArabic ? 'مشاريعنا | لايتك' : 'Our Projects | Lightech',
      description: isArabic 
        ? 'استعرض مشاريع الإضاءة المهنية لدينا في السعودية، بما في ذلك الإضاءة المعمارية والداخلية.'
        : 'Explore our professional lighting projects in Saudi Arabia, including architectural and interior solutions.',
      url: `${baseUrl}/${params.lang}/projects`,
      images: [{ url: `${baseUrl}/og-projects.jpg` }],  // Add a projects-specific OG image
    },
    // Add keywords, etc., based on lang
  };
}

// generateStaticParams inherits from [lang]/page.tsx, but add for explicitness
export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'ar' },
  ];
}

interface Props {
  params: { lang: 'en' | 'ar' };
}

export default function ProjectsPage({ params }: Props) {
  // Optional: Server-side data prep (e.g., if projects were dynamic)
  // const projects = await fetchProjects(params.lang); // If from API/CMS

  // Optional: JSON-LD schema for projects page (e.g., ItemList)
  const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      // Dynamically generate from projects data if needed
      // e.g., projects.slice(0, 10).map((p, i) => ({ '@type': 'ListItem', position: i+1, name: p.title, url: `${baseUrl}/${params.lang}/projects/${p.slug}` }))
    ],
  };

  return (
    <>
      {/* Embed schema if adding */}
      {false && (  // Toggle if using
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
        />
      )}
      <ProjectsClient params={params} />
    </>
  );
}