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
import LightRays from "@/components/shared-ui/light-rays";
import SocialMediaPosts from "@/components/home/SocialMediaPosts";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// export const metadata: Metadata = {
//   title: "Lightech - Professional Lighting Solutions in Saudi Arabia",
//   description: "Lightech provides sophisticated turnkey lighting solutions with professional expertise in architectural, interior, and landscape lighting projects since 2005.",
// };

export default function Home() {
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
      <Hero />
      
      <div ref={aboutRef}>
        <About />
      </div>
      
      <div ref={servicesRef}>
        <Services />
      </div>
      
      <div ref={projectsRef}>
        <Projects />
      </div>
      
      {/* <div ref={testimonialsRef}>
        <Testimonials />
      </div> */}
      <div ref={socialMediasRef}>
        <SocialMediaPosts></SocialMediaPosts>
      </div>
      
      <div ref={partnersRef}>
        <Partners />
      </div>
      
      <div ref={contactRef}>
        <Contact />
      </div>
    </main>
  );
}
