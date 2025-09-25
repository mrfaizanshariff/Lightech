"use client"
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import logo1 from '../../public/assets/partner_logos/logo1.png'
import logo2 from '../../public/assets/partner_logos/logo2.png'
import logo3 from '../../public/assets/partner_logos/logo3.png'
import logo4 from '../../public/assets/partner_logos/logo4.png'
import logo5 from '../../public/assets/partner_logos/logo5.png'
import logo6 from '../../public/assets/partner_logos/logo6.png'
import logo7 from '../../public/assets/partner_logos/logo7.png'
import logo8 from '../../public/assets/partner_logos/logo8.png'
import logo9 from '../../public/assets/partner_logos/logo9.png'
import logo10 from '../../public/assets/partner_logos/logo10.png'
import logo11 from '../../public/assets/partner_logos/logo11.png'
import logo12 from '../../public/assets/partner_logos/logo12.png'
import logo13 from '../../public/assets/partner_logos/logo13.png'
import logo14 from '../../public/assets/partner_logos/logo14.png'
import logo15 from '../../public/assets/partner_logos/logo15.png'
import logo16 from '../../public/assets/partner_logos/logo16.png'
import logo17 from '../../public/assets/partner_logos/logo17.png'
import logo18 from '../../public/assets/partner_logos/logo18.png'
import logo19 from '../../public/assets/partner_logos/logo19.png'
import logo20 from '../../public/assets/partner_logos/logo20.png'
import content from '../../public/assets/content.json';
import { useLanguage } from "@/context/LanguageContext";
const Partners = () => {
  const {language}=useLanguage()
  const partnersContent = JSON.parse(JSON.stringify(content))[language==="en"?"english":"ar"].partnersSection
  const partnerLogos = [
    { name: "Partner 1", logo: logo1.src },
    { name: "Partner 2", logo: logo2.src },
    { name: "Partner 3", logo: logo3.src },
    { name: "Partner 4", logo: logo4.src },
    { name: "Partner 5", logo: logo5.src },
    { name: "Partner 6", logo: logo6.src },
    // Duplicate logos for continuous scroll effect
    { name: "Partner 1", logo: logo1.src },
    { name: "Partner 2", logo: logo2.src },
    { name: "Partner 3", logo: logo3.src },
  ];
  const features = partnersContent.features;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm text-primary font-medium tracking-wider mb-2">{partnersContent.title}</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">{partnersContent.subtitle}</h3>
          <p className="text-muted-foreground">
            {partnersContent.description}
          </p>
        </div>
        
        <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l after:from-background after:to-transparent">
          <div className="flex animate-scroll">
            {partnerLogos.map((partner, index) => (
              <div 
                key={index}
                className="flex-shrink-0 mx-8 backdrop-blur-sm bg-white/30 dark:bg-white/10 rounded-lg  hover:shadow-lg transition-all duration-300"
                style={{ width: '200px' }}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {
            features.map((feature:any,index:number)=>{
              return (
                <Card key={index} className="backdrop-blur-md bg-white/50 dark:bg-white/10 border-none shadow-lg">
                  <CardContent className="p-8">
                    <div className="bg-primary/10 w-14 h-14 flex items-center justify-center rounded-full mb-6">
                      <Check className="h-8 w-8 text-primary" />
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