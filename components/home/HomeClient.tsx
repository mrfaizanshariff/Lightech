// components/home/HomeClient.tsx
'use client';  // Client component for GSAP/animations

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Projects from "@/components/home/Projects";
import SocialMediaPosts from "@/components/home/SocialMediaPosts";
import Partners from "@/components/home/Partners";
import Contact from "@/components/home/Contact";

// Register ScrollTrigger plugin (runs client-side)
gsap.registerPlugin(ScrollTrigger);

interface HomeClientProps {
  params: { lang: 'en' | 'ar' };
}

export default function HomeClient({ params }: HomeClientProps) {
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

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main>
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
      
      <div ref={socialMediasRef}>
        <SocialMediaPosts />
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