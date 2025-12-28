"use client"
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Check } from "lucide-react";
import {partnerLogos} from '../../public/assets/partner_logos/index'
import content from '../../public/assets/content.json';
import { useLanguage } from "@/context/LanguageContext";
const Partners = ({ params }: { params: { lang: 'en' | 'ar' } }) => {
  const language = params?.lang
  const partnersContent = JSON.parse(JSON.stringify(content))[language==="en"?"english":"ar"].partnersSection
  // const plogo = partnerLogos
  const features = partnersContent.features;

  return (
    <section className="py-20">
       <div>
              <h1 className="text-4xl px-8 pt-8 text-primary font-bold tracking-wider mb-2">{partnersContent.title}</h1>
          <hr className="mb-4 ml-8"/>
          </div>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* <h2 className="text-sm text-primary font-medium tracking-wider mb-2">{partnersContent.title}</h2> */}
          <h3 className="text-3xl md:text-4xl font-bold mb-4">{partnersContent.subtitle}</h3>
          <p className="text-muted-foreground">
            {partnersContent.description}
          </p>
        </div>
        
        <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l after:from-background after:to-transparent">
          <div className="flex items-center animate-scroll">
            {partnerLogos.map((partner:any, index:number) => (
              <div 
                key={index}
                className="flex-shrink-0 mx-8  bg-white/30 dark:bg-white/10 rounded-lg  hover:shadow-lg transition-all duration-300"
              >
                <Image 
                  src={partner.src} 
                  alt={partner.src} 
                  width={200}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {
            features.map((feature:any,index:number)=>{
              return (
                <Card key={index} className="backdrop-blur-md bg-white/50 dark:bg-white/10 border-none transition-transform duration-500 hover:scale-105 shadow-xl">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full mb-6">
                      <Image className="brightness-100" src={`/icons_svg/${feature.icon}`} alt={feature.icon} width={80} height={80}/>
                    </div>
                    <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                    <p className="text-muted-foreground">
                      {
                        feature.descriptions
                      }
                    </p>
                  </CardContent>
                </Card>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Partners;