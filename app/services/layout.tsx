import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Lightech",
  description: "Explore Lightech's comprehensive lighting solutions: architectural, interior, landscape, and commercial lighting design. Energy-efficient and innovative fixtures.",
  keywords: ["lighting services", "architectural lighting", "interior lighting", "landscape lighting", "commercial lighting", "lighting design Saudi Arabia"],
  openGraph: {
    title: "Lighting Services | Lightech",
    description: "Professional lighting solutions for every space. Architectural, interior, landscape, and commercial lighting expertise.",
    url: "https://lightech.com.sa/services",
    type: "website",
  },
  alternates: {
    canonical: "https://lightech.com.sa/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
