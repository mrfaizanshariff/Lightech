"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lightsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 filter blur-[80px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-400/20 filter blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-1">
              <p className="text-primary font-medium tracking-wider">SINCE 2005</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Illuminating Spaces <br />
                <span className="text-primary">Designing Experiences</span>
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground">
              Lightech provides sophisticated turnkey lighting solutions with professional 
              expertise in architectural, interior, and landscape lighting projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="group">
                Explore Our Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Our Services
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 pt-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-bold text-primary">18+</span>
                </div>
                <p className="text-sm">Years of<br />Excellence</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-bold text-primary">200+</span>
                </div>
                <p className="text-sm">Projects<br />Completed</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-bold text-primary">50+</span>
                </div>
                <p className="text-sm">Professional<br />Experts</p>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
            <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse [animation-duration:5s]"></div>
            <div className="relative h-full rounded-2xl overflow-hidden border-8 border-white dark:border-black shadow-2xl transform lg:translate-y-12">
              <img 
                src="https://images.pexels.com/photos/3637739/pexels-photo-3637739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
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