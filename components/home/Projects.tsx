"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Project, projects } from "@/lib/projectsData";
import content from '../../public/assets/content.json';
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";



const Projects = () => {
  const {language} = useLanguage();
  const featuredProjects: Project[] = projects.filter(e=>e.featured)
  const projectsContent = JSON.parse(JSON.stringify(content))[language==="en"?"english":"ar"].projectsSection;
  const categories = projectsContent.categories;
  const [activeCategory, setActiveCategory] = useState<string>("Featured");
  const {theme} = useTheme();
  const filteredProjects = activeCategory === "Featured"
    ? featuredProjects
    : featuredProjects.filter(project => project.category === activeCategory);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-sm text-primary font-medium tracking-wider mb-2">{projectsContent.title}</h2>
            <h3 className="text-3xl md:text-4xl font-bold">{projectsContent.subtitle}</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category:any) => (
              <Button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                variant={activeCategory === category.value ? "default" : "outline"}
                size="sm"
                className={activeCategory === category.value ? "" : "opacity-70"}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-xl overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-white/80 font-medium">{project.category}</span>
                  <span className="text-xs text-white/80">{project.year}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
                <p className="text-white/70 text-sm mb-4">{project.location}</p>
                <Link href={`/projects`}>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={theme==='light'?
                      "text-black border-white/30 hover:bg-primary-foreground hover:text-primary transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0" :
                      "text-white border-blue/30 hover:bg-primary-foreground hover:text-primary transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0"}
                  >
                    {projectsContent.individual_cta.label}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/projects">
            <Button size="lg" className="group">
              {projectsContent.cta.label}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;