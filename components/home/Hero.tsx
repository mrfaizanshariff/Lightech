"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import E004 from "../../public/assets/E004_US.jpg"
import G001 from "../../public/assets/G001_US.jpg"
import G002 from "../../public/assets/G002_US.jpg"
import G012 from "../../public/assets/G012_US.jpg"
import content from "../../public/assets/content.json"
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
const Hero = () => {
  const {language} = useLanguage();
  const heroContent = JSON.parse(JSON.stringify(content))[language==="en"?"english":"ar"].heroSection;
  const containerRef = useRef<HTMLDivElement>(null);
  const lightsRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLDivElement>(null);
  const title2Ref = useRef<HTMLDivElement>(null);
  // dynamic refs for stats
  const statRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [G002, G001, G012, E004];

  
  // Rotate background image every 4 seconds
  useEffect(() => {
    // Preload images
    images.forEach(img => {
      const pre = new Image();
      pre.src = img.src;
    });

    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, 4500);

    return () => clearInterval(id);
  }, []);

  useEffect(()=>{
    const texts = [title1Ref,title2Ref];
    texts.forEach((ref,index)=>{
        gsap.fromTo(ref.current, { opacity: 0 , y:80}, {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          delay: index * 0.5
        });
    })

    // Animate each stat number from 0 -> target value
    heroContent.statsCard.forEach((s:any, i:number) => {
      const el = statRefs.current[i];
      if (!el) return;

      // parse numeric value (handles strings or numbers)
      const target = Number(String(s.value).replace(/[^0-9.-]+/g, '')) || 0;
      const obj = { val: 0 };

      gsap.to(obj, {
        val: target,
        duration: 3.2,
        ease: 'power1.out',
        delay: 0.6 + i * 0.15,
        onUpdate() {
          el.textContent = Math.round(obj.val) + '+';
        }
      });
    });
  },[]);

  

  return (
     <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${images[currentIndex].src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: 'background-image 1.5s ease-in-out'
      }}
      aria-label="Hero section with company introduction and featured projects"
    >
      {/* Overlay gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div> */}
      
      {/* Animated light effects */}
      <div 
        className="absolute inset-0 z-0"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-400/20 filter blur-[100px] animate-pulse [animation-delay:1s]"></div>
      </div>

      <div className="container mt-32 mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 backdrop-blur-sm bg-white/10 p-12 rounded-2xl">
          <div className="space-y-4">
            <p className="text-primary-foreground font-medium tracking-wider">{heroContent.titleDate}</p>
            <h1 ref={title1Ref} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              {heroContent.title1} <br />
              <span ref={title2Ref} className="text-primary-foreground">{heroContent.title2}</span>
            </h1>
          </div>
          
          <p className="text-xl text-white/80">
           {heroContent.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href={heroContent.btn1.href} aria-label="Explore our lighting projects">
              <Button size="lg" className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm">
                {heroContent.btn1.label}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </Link>
            <Link href={heroContent.btn2.href} aria-label="View our services">
              <Button size="lg" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
                {heroContent.btn2.label}
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12" role="region" aria-label="Company statistics">
            {
            heroContent.statsCard.map((stat:any,index:number)=>{
              return (

            <div key={index} className="backdrop-blur-sm bg-white/5 p-6 rounded-xl">
              <div ref={el => statRefs.current[index] = el} className="text-3xl font-bold text-white mb-2" aria-label={stat.label}>{stat.value}+</div>
              <p className="text-white/80">{stat.label}</p>
            </div>
              )
            })

            }
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-0 z-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center" aria-hidden="true">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white rounded-full animate-bounce [animation-duration:1.5s]"></div>
        </div>
        <p className="text-xs mt-2 text-white/60">Scroll Down</p>
      </div>
  </section>
  );

};

export default Hero;



