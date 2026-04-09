"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import G001 from "../../public/assets/G001_US.jpg";
import Link from "next/link";

interface CareerHeroProps {
  content: {
    title: string;
    subtitle: string;
    description: string;
    cta: {
      label: string;
      href: string;
    };
  };
}

const CareerHero = ({ content }: CareerHeroProps) => {
  const title1Ref = useRef<HTMLDivElement>(null);
  const title2Ref = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const elements = [title1Ref, title2Ref, descRef];
    elements.forEach((ref, index) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
            delay: index * 0.3,
          }
        );
      }
    });
  }, []);

  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${G001.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Career opportunities hero section"
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>

      {/* Animated light effects */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-400/20 filter blur-[100px] animate-pulse [animation-delay:1s]"></div>
      </div>

      <div className="container mt-20 mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 backdrop-blur-sm bg-white/10 p-12 rounded-2xl">
          <div className="space-y-4">
            <h1
              ref={title1Ref}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
            >
              {content.title}
            </h1>
            <h2
              ref={title2Ref}
              className="text-3xl md:text-5xl font-bold text-primary-foreground"
            >
              {content.subtitle}
            </h2>
          </div>

          <p ref={descRef} className="text-xl text-white/90 max-w-2xl mx-auto">
            {content.description}
          </p>

          <div className="flex justify-center pt-4">
            <Link href={content.cta.href} aria-label={content.cta.label}>
              <Button size="lg" className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm">
                {content.cta.label}
                <ArrowRight
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div
        className="absolute bottom-8 z-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        aria-hidden="true"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white rounded-full animate-bounce [animation-duration:1.5s]"></div>
        </div>
        <p className="text-xs mt-2 text-white/60">Scroll Down</p>
      </div>
    </section>
  );
};

export default CareerHero;

// Made with Bob
