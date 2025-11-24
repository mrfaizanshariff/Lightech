import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Lightech",
  description: "Get in touch with Lightech for your lighting projects. Contact us for consultations, quotes, and professional lighting solutions in Saudi Arabia.",
  keywords: ["contact Lightech", "lighting consultation", "get a quote", "professional lighting services", "contact form"],
  openGraph: {
    title: "Contact Lightech - Professional Lighting Solutions",
    description: "Reach out to our team for your lighting project requirements. We're here to help with professional, innovative solutions.",
    url: "https://lightech.com.sa/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://lightech.com.sa/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
