"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion }  from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import content from "../../public/assets/content.json";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

const Services = () => {
  const {language} = useLanguage();
  const servicesContent = JSON.parse(JSON.stringify(content))[language==="en"?"english":"ar"].servicesSection;
  const [activeService, setActiveService] = useState<string>(servicesContent?.services[0].id || null);
  const { theme} = useTheme();
  const activeServiceData = servicesContent.services.find((service:any) => service.id === activeService) || null;

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm text-primary font-medium tracking-wider mb-2">{servicesContent.title}</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">{servicesContent.subtitle}</h3>
          <p className="text-muted-foreground">
           {servicesContent.desc_one}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            {servicesContent.services.map((service:any) => (
              <div
                key={service.id}
                className={cn(
                  "p-6 rounded-lg cursor-pointer transition-all duration-300",
                  activeService === service.id 
                    ? (theme === 'dark'?("bg-primary-foreground text-white shadow-lg") :("bg-primary text-white shadow-lg") )
                    : "bg-white dark:bg-gray-800 hover:shadow-md"
                )}
                onClick={() => setActiveService(service.id)}
              >
                <div className="flex items-start gap-4">
                  <Image  className={activeService === service.id ? "brightness-200" : ""}
                  src={`/icons_svg/${service.icon}`} alt={service.id} height={60} width={60}/>
                  <div>
                    <h4 className="text-lg font-semibold">{service.title}</h4>
                    <p className={cn(
                      "mt-2 text-sm line-clamp-2",
                      activeService === service.id ? "text-primary-grounds" : "text-muted-foreground"
                    )}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="pt-4">
              <Link href={servicesContent.cta.href}>
                <Button variant="outline" className="w-full group">
                  {servicesContent.cta.label}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-2 relative rounded-xl overflow-hidden h-[500px]">
            <motion.img
              key={activeServiceData.id}
              src={`/assets/${activeServiceData.image}`}
              alt={activeServiceData.title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-3xl font-bold text-white mb-3">{activeServiceData.title}</h3>
              <p className="text-white/80 mb-6 max-w-2xl">{activeServiceData.description}</p>
              <Link href={`/services`}>
                <Button className="group">
                  {servicesContent.cta.label}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;