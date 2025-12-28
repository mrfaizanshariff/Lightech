"use client";

import { Metadata } from "next";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import IndividualPageHeader from "@/components/shared-ui/individual-page-header";
import { Project, projects } from "@/lib/projectsData";
import content from "../../../public/assets/content.json"
import { useLanguage } from "@/context/LanguageContext";


const allProjects: Project[] = projects.filter(e=>e.image.length>1)
const allProjectswithoutImage: Project[] = projects.filter(e=>!(e.image.length>1))

export default function ProjectsPage({ params }: { params: { lang: 'en' | 'ar' } }) {
  const language = params.lang;
  const projectPageContent = JSON.parse(JSON.stringify(content))[language === "en"?"english":"ar"].projectsPage;
  const categories = projectPageContent.categories
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const filteredProjects = selectedCategory === "All"
    ? allProjects
    : allProjects.filter(project => project.category === selectedCategory);
  const filteredProjectsWithoutImage = selectedCategory === "All"
    ? allProjectswithoutImage
    : allProjectswithoutImage.filter(project => project.category === selectedCategory);

  return (
    <main className="pt-20">
   
      <IndividualPageHeader title={projectPageContent.title}
        description={projectPageContent.description}
      />

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((category:any,index:number) => (
              <Button
                key={category.value+index}
                onClick={() => setSelectedCategory(category.value)}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                className={selectedCategory === category.value ? "" : "opacity-70"}
              
              >
                {category.label}
              </Button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => {
               
                  return (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className="group relative rounded-xl overflow-hidden backdrop-blur-sm bg-white/50 dark:bg-white/10"
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      <div className="aspect-square overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          animate={{
                            scale: hoveredProject === project.id ? 1.1 : 1
                          }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>
                      <div className="absolute bottom-0 left-0 p-6 w-full">
                        <div className="flex justify-between items-center mb-2">
                          <motion.span
                            className="text-xs text-white/80 font-medium"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            {project.category}
                          </motion.span>
                          <motion.span
                            className="text-xs text-white/80"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            {project.year}
                          </motion.span>
                        </div>
                        <motion.h4
                          className="text-xl font-bold text-white mb-1"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          {project.title}
                        </motion.h4>
                        <motion.p
                          className="text-white/70 text-sm mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          {project.location}
                        </motion.p>
                      </div>
                    </motion.div>
                  );
                

               
              })}
            </AnimatePresence>
          </motion.div>
              <h1 className="text-4xl px-8 pt-8 text-primary font-bold tracking-wider mb-2">
                { language === 'en' ?
                'Our Other Notable Projects' :
                'مشاريعنا الأخرى الجديرة بالملاحظة'}</h1>
              
          <motion.div 
            layout
            className="my-10 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-secondary"
          >
            <AnimatePresence>
              {filteredProjectsWithoutImage.map((project) => {
               
                  // projects without images: show a simpler card (no image)
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.35 }}
                    className="relative rounded-xl overflow-hidden backdrop-blur-sm bg-primary p-6"
                  >
                    <div className="flex flex-col  justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-secondary font-medium">{project.category}</span>
                          <span className="text-xs text-secondary">{project?.year}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-secondary mb-1">{project.title}</h4>
                        <p className="text-sm text-secondary  mb-4">{project.location}</p>
                      </div>
                    </div>
                  </motion.div>
                );

               
              })}
            </AnimatePresence>
          </motion.div>

          
        </div>
      </section>
    </main>
  );
}