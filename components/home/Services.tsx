"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion }  from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import G004 from '../../public/assets/G004.jpg'
import G005 from '../../public/assets/G005.jpg'
import G006 from '../../public/assets/G006.jpg'
import G007 from '../../public/assets/G007.jpg'
import G012 from '../../public/assets/G012.jpg'
interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

const services: Service[] = [
  {
    id: "architectural",
    title: "Architectural Lighting",
    description: "Enhance the aesthetic appeal and functionality of buildings with our architectural lighting solutions that highlight structural elements and create memorable visual experiences.",
    icon: "🏛️",
    image: G004.src
  },
  {
    id: "interior",
    title: "Interior Lighting",
    description: "Create the perfect ambiance for any indoor space with our interior lighting designs that combine functionality, energy efficiency, and beautiful aesthetics.",
    icon: "🏠",
    image: G007.src
  },
  {
    id: "landscape",
    title: "Landscape Lighting",
    description: "Transform outdoor areas into enchanting environments with our landscape lighting solutions that highlight natural features and extend the usability of outdoor spaces.",
    icon: "🌳",
    image: G006.src
  },
  {
    id: "commercial",
    title: "Commercial Lighting",
    description: "Optimize productivity and create inviting atmospheres in commercial spaces with our efficient, high-quality lighting systems designed for various business environments.",
    icon: "🏢",
    image: G012.src
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState<string>(services[0].id);
  
  const activeServiceData = services.find(service => service.id === activeService) || services[0];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm text-primary font-medium tracking-wider mb-2">OUR SERVICES</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Lighting Solutions</h3>
          <p className="text-muted-foreground">
            We provide end-to-end lighting solutions from concept and design to installation and maintenance,
            ensuring optimal results for every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.id}
                className={cn(
                  "p-6 rounded-lg cursor-pointer transition-all duration-300",
                  activeService === service.id 
                    ? "bg-primary text-white shadow-lg" 
                    : "bg-white dark:bg-gray-800 hover:shadow-md"
                )}
                onClick={() => setActiveService(service.id)}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{service.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold">{service.title}</h4>
                    <p className={cn(
                      "mt-2 text-sm line-clamp-2",
                      activeService === service.id ? "text-white/80" : "text-muted-foreground"
                    )}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="pt-4">
              <Link href="/services">
                <Button variant="outline" className="w-full group">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-2 relative rounded-xl overflow-hidden h-[500px]">
            <motion.img
              key={activeServiceData.id}
              src={activeServiceData.image}
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
              <Link href={`/services#${activeServiceData.id}`}>
                <Button className="group">
                  Learn More
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