import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Lightech",
  description: "Learn about Lightech's 19-year journey since 2005. Discover our expertise in architectural, interior, and landscape lighting with 200+ completed projects.",
  keywords: ["about Lightech", "lighting company history", "professional lighting experts", "Saudi Arabia lighting"],
  openGraph: {
    title: "About Lightech - Professional Lighting Solutions",
    description: "Founded in 2005, Lightech has been providing sophisticated lighting solutions for over 19 years with 200+ completed projects.",
    url: "https://lightech.com.sa/about",
    type: "website",
  },
  alternates: {
    canonical: "https://lightech.com.sa/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
