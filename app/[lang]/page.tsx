// app/page.tsx
"use client";
import { Metadata } from "next";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Projects from "@/components/home/Projects";
import Testimonials from "@/components/home/Testimonials";
import Partners from "@/components/home/Partners";
import Contact from "@/components/home/Contact";
import SocialMediaPosts from "@/components/home/SocialMediaPosts";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Home page metadata - Server Component would export this
// For Client Component, metadata is handled in layout.tsx
// If you need page-specific metadata, convert to Server Component or use route groups

// JSON-LD for homepage
const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Lightech',
  description: 'Professional lighting solutions and lighting service provider in Riyadh, Jeddah, Saudi Arabia with expertise in architectural, interior, and landscape lighting.',
  url: 'https://lightech.com.sa',
  logo: 'https://lightech.com.sa/lightech_logo.jpg',
  image: 'https://lightech.com.sa/og-image.jpg',
  telephone: '+966 (contact number)',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'SA',
    addressRegion: 'Saudi Arabia',
  },
  areaServed: ['SA'],
  foundingDate: '2005',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: '50',
  },
  sameAs: [
    'https://www.instagram.com/lightech_sa',
    'https://www.linkedin.com/company/light-technologies-co-ltd',
    'https://x.com/lightech_sa'
  ],
  priceRange: '$$',
};

export default function Home({ params }: { params: { lang: 'en' | 'ar' } }) {
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const socialMediasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = [
      { ref: aboutRef, direction: "up" },
      { ref: servicesRef, direction: "left" },
      { ref: projectsRef, direction: "scale" },
      { ref: socialMediasRef, direction: "left" },
      { ref: partnersRef, direction: "up" },
      { ref: contactRef, direction: "up" },
    ];

    sections.forEach(({ ref, direction }, index) => {
      if (ref.current) {
        let fromProps: any = { opacity: 0 };
        
        switch (direction) {
          case "up":
            fromProps.y = 80;
            break;
          case "left":
            fromProps.x = -80;
            break;
          case "right":  
            fromProps.x = 80;
            break;
          case "scale":
            fromProps.scale = 0.8;
            break;
        }

        gsap.fromTo(ref.current, fromProps, {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <Hero params={params} />
      
      <div ref={aboutRef}>
        <About params={params}/>
      </div>
      
      <div ref={servicesRef}>
        <Services params={params}/>
      </div>
      
      <div ref={projectsRef}>
        <Projects params={params}/>
      </div>
      
      {/* <div ref={testimonialsRef}>
        <Testimonials />
      </div> */}
      <div ref={socialMediasRef}>
        <SocialMediaPosts></SocialMediaPosts>
      </div>
      
      <div ref={partnersRef}>
        <Partners params={params}/>
      </div>
      
      <div ref={contactRef}>
        <Contact params={params}/>
      </div>
    </main>
  );
}
