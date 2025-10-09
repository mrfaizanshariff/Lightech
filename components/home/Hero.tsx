"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import E004 from "../../public/assets/E004.jpg"
import LightRays from "../shared-ui/light-rays";
import content from "../../public/assets/content.json"
import Link from "next/link";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";
import BlurText from "../shared-ui/blur-text-animation";
const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const {theme} =  useTheme();
  const lightsRef = useRef<HTMLDivElement>(null);
  const {language} = useLanguage();
  const heroContent = JSON.parse(JSON.stringify(content))[language==="en"?"english":"ar"].heroSection;
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      if (!containerRef.current || !lightsRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      // Calculate position relative to container
      const xPercent = Math.min(Math.max(x / width, 0), 1);
      const yPercent = Math.min(Math.max(y / height, 0), 1);
      
      // Slight parallax effect for lights
      lightsRef.current.style.transform = `translate(${(xPercent - 0.5) * -20}px, ${(yPercent - 0.5) * -20}px)`;
    };

    // window.addEventListener('scroll', handleMouseMove);
    
    return () => {
      // window.removeEventListener('scroll', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-primary/5 to-transparent"
    >
      {/* Animated light effects */}
      <div 
        ref={lightsRef}
        className="absolute inset-0 z-0 opacity-70"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/50 filter blur-[80px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-400/20 filter blur-[80px]"></div>
      </div>
      {/* <div className='absolute top-0 inset-0 h-full z-100 overflow-hidden w-full'>
                    <LightRays
                      raysOrigin="top-left"
                      // raysColor="#00das"
                      raysColor={theme ==='light'?"#03045e":"#ffffff"}
                      raysSpeed={1.5}
                      lightSpread={1.5}
                      fadeDistance={1.5}
                      rayLength={4}
                      saturation={1}
                      followMouse={true}
                      mouseInfluence={0.2}
                      noiseAmount={0.2}
                      distortion={0}
                      className="custom-rays"
                    />
        </div> */}

      <div className="container mx-auto px-6 z-10 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-1">
              <p className="text-primary font-medium tracking-wider">{heroContent.titleDate}</p>
              <BlurText
                text={heroContent.title1 + " " + heroContent.title2}
                delay={300}
                animateBy="words"
                direction="top"
                className="text-4xl md:text-5xl lg:text-6xl leading-8 md:leading-5 font-bold tracking-tight"
              />
              {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                {heroContent.title1} <br />
                <span className="text-primary">{heroContent.title2}</span>
              </h1> */}
            </div>
            
            <p className="text-lg text-muted-foreground">
              {heroContent.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href={heroContent.btn1.href}>
              <Button size="lg" className="group">
                {heroContent.btn1.label}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              </Link>
              <Link href={heroContent.btn2.href}>
              <Button variant="outline" size="lg">
                {heroContent.btn2.label}
              </Button>
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 pt-6">
              {
                heroContent.statsCard.map((stat:any,index:number)=>{
                  return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">{stat.value}</span>
                    </div>
                    <p className="text-sm">{stat.label}</p>
                  </div>
                  )
                })
              }
            </div>
          </div>
          
          <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
            <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse [animation-duration:5s]"></div>
            <div className="relative h-full rounded-2xl overflow-hidden border-8 border-white dark:border-black shadow-2xl transform lg:translate-y-12">
              <img 
                src={E004.src} 
                alt="Modern interior lighting" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-6 h-10 rounded-full border-2 border-primary flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce [animation-duration:1.5s]"></div>
        </div>
        <p className="text-xs mt-2 text-muted-foreground">Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;