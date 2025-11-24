import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Lightech",
  description: "Discover Lightech's portfolio of 200+ completed lighting projects. From architectural to landscape lighting - showcasing our expertise and innovation.",
  keywords: ["lighting projects", "portfolio", "case studies", "architectural projects", "interior design", "landscape projects", "lighting installations"],
  openGraph: {
    title: "Lighting Projects Portfolio | Lightech",
    description: "Explore 200+ completed lighting projects demonstrating our expertise in architectural, interior, and landscape lighting solutions.",
    url: "https://lightech.com.sa/projects",
    type: "website",
  },
  alternates: {
    canonical: "https://lightech.com.sa/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
