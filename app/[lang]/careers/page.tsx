import { Metadata } from "next";
import IndividualPageHeader from "@/components/shared-ui/individual-page-header";
import CareerHero from "@/components/careers/CareerHero";
import CareerInfo from "@/components/careers/CareerInfo";
import JobOpenings from "@/components/careers/JobOpenings";
import CareerContact from "@/components/careers/CareerContact";
import content from "../../../public/assets/content.json";
import { parseJobOpenings } from '@/lib/jobOpeningsParser';
import JobOpeningsMarkdown from '@/components/careers/JobOpeningsMarkdown';
export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }];
}

export async function generateMetadata({
  params,
}: {
  params: { lang: "en" | "ar" };
}): Promise<Metadata> {
  const baseUrl = "https://lightech.com.sa";
  const isArabic = params.lang === "ar";

  return {
    title: isArabic
      ? "الوظائف في لايتك | انضم إلى فريقنا | شركة إضاءة رائدة في السعودية"
      : "Careers at Lightech | Join Our Team | Leading Lighting Company in Saudi Arabia",

    description: isArabic
      ? "استكشف الفرص الوظيفية في لايتك. انضم إلى فريق من خبراء الإضاءة في الرياض وجدة والدمام. نوفر بيئة عمل مبتكرة ومزايا تنافسية وفرص للنمو المهني."
      : "Explore career opportunities at Lightech. Join a team of lighting experts in Riyadh, Jeddah, and Dammam. We offer an innovative work environment, competitive benefits, and professional growth opportunities.",

    keywords: isArabic
      ? [
          "وظائف لايتك",
          "وظائف شركة إضاءة",
          "وظائف الرياض",
          "وظائف جدة",
          "وظائف الدمام",
          "مهندس إضاءة",
          "مصمم إضاءة",
          "وظائف هندسة",
          "فرص عمل السعودية",
          "شركات الإضاءة",
        ]
      : [
          "Lightech careers",
          "lighting company jobs",
          "jobs in Riyadh",
          "jobs in Jeddah",
          "jobs in Dammam",
          "lighting engineer jobs",
          "lighting designer jobs",
          "engineering jobs Saudi Arabia",
          "career opportunities KSA",
          "lighting industry careers",
        ],

    openGraph: {
      title: isArabic
        ? "الوظائف في لايتك | انضم إلى فريقنا"
        : "Careers at Lightech | Join Our Team",
      description: isArabic
        ? "استكشف الفرص الوظيفية في لايتك وانضم إلى فريق من خبراء الإضاءة"
        : "Explore career opportunities at Lightech and join a team of lighting experts",
      url: `${baseUrl}/${params.lang}/careers`,
      type: "website",
      locale: isArabic ? "ar_SA" : "en_SA",
      siteName: "Lightech",
    },

    alternates: {
      canonical: `${baseUrl}/${params.lang}/careers`,
      languages: {
        "en-SA": `${baseUrl}/en/careers`,
        "ar-SA": `${baseUrl}/ar/careers`,
      },
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function CareersPage({
  params,
}: {
  params: { lang: "en" | "ar" };
}) {
  const language = params.lang;
  const careersContent =
    JSON.parse(JSON.stringify(content))[
      language === "en" ? "english" : "ar"
    ].careersPage;

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: careersContent.jobs.positions.map(
      (position: any, index: number) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "JobPosting",
          title: position.title,
          description: position.description,
          identifier: {
            "@type": "PropertyValue",
            name: "Lightech",
            value: position.id,
          },
          datePosted: new Date().toISOString().split("T")[0],
          employmentType: position.type.toUpperCase().replace("-", "_"),
          hiringOrganization: {
            "@type": "Organization",
            name: "Lightech",
            sameAs: "https://lightech.com.sa",
            logo: "https://lightech.com.sa/lightech_logo.jpg",
          },
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: position.location,
              addressCountry: "SA",
            },
          },
          baseSalary: {
            "@type": "MonetaryAmount",
            currency: "SAR",
            value: {
              "@type": "QuantitativeValue",
              unitText: "MONTH",
            },
          },
        },
      })
    ),
  };
  const jobs = parseJobOpenings();

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />

      <IndividualPageHeader
        title={careersContent.header.title}
        description={careersContent.header.description}
      />

      {/* <CareerHero content={careersContent.hero} /> */}

      <CareerInfo content={careersContent.culture} />

      {/* <JobOpenings content={careersContent.jobs} /> */}
     
    { 
        jobs.length === 0 ? (
            <main>
        <h1>Careers</h1>
        <p>No positions available at this time.</p>
      </main>
        ):(
            <JobOpeningsMarkdown 
        jobs={jobs}
        content={{
          title: "Current Openings",
          subtitle: "Join Our Team",
          description: "Explore exciting career opportunities",
          filters: { all: "All" },
          cta: { label: "Apply Now", href: "/careers/apply" }
        }}
      />
        )

    }
    
     

     {/* <CareerContactWithEmailJS content={careersContent.contact} language="en" /> */}

      <CareerContact content={careersContent.contact} />
    </main>
  );
}

// Made with Bob
