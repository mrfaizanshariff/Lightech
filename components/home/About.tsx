'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import G001 from '../../public/assets/G001.jpg'
import G012 from '../../public/assets/G012.jpg'
import G004 from '../../public/assets/G004.jpg'
import content from "../../public/assets/content.json"
import { useLanguage } from "@/context/LanguageContext";
const About = ({ params }: { params: { lang: 'en' | 'ar' } }) => {
  const language = params?.lang
  const aboutContent = JSON.parse(JSON.stringify(content))[language === 'en'?"english":"ar"].aboutSection;
  return (
    <section className="py-20 bg-white dark:bg-black" aria-labelledby="about-heading">
      <div>
              <h2 id="about-heading" className="text-4xl px-8 pt-8 text-primary font-bold tracking-wider mb-2">{aboutContent.title}</h2>
      <hr className="mb-4 ml-8"/>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/10 rounded-full z-0" aria-hidden="true"></div>
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg h-48">
                  <img 
                    src={G004.src} 
                    alt="Architectural lighting design showcase" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg h-64 bg-primary">
                  <div className="h-full flex items-center justify-center p-6 text-primary-foreground">
                    <p className="font-medium text-lg">
                      Founded in 2005
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="overflow-hidden rounded-lg h-64">
                  <img 
                    src={G001.src} 
                    alt="Interior lighting solutions portfolio" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg h-48">
                  <img 
                    src={G012.src} 
                    alt="Landscape and outdoor lighting installations" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">{aboutContent.subtitle}</h3>
              <div className="w-20 h-1.5 bg-primary rounded-full" aria-hidden="true"></div>
            </div>
            
            <p className="text-muted-foreground">
             {aboutContent.desc_one}
            </p>
            
            <p className="text-muted-foreground">
             {aboutContent.desc_two}
            </p>
            
            <div className="grid grid-cols-2 gap-4 py-4" role="region" aria-label="Company achievements">
              {
                aboutContent.statsCard.map((stat:any,index:number)=>{
                  return (
                  <div key={index} className="flex flex-col gap-1">
                    <span className="text-3xl font-bold text-primary" aria-label={stat.label}>{stat.value}</span>
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                  </div>
                  )
                })
              }
            </div>
            
            <Link href={aboutContent.cta.href}>
              <Button className="group" aria-label="Learn more about Lightech and our history">
                {aboutContent.cta.label}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;