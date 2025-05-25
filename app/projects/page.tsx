"use client";

import { Metadata } from "next";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import IndividualPageHeader from "@/components/shared-ui/individual-page-header";

interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: number;
  image: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Riyadh Cultural Center",
    category: "Architectural",
    location: "Riyadh, Saudi Arabia",
    year: 2022,
    image: "https://images.pexels.com/photos/1708601/pexels-photo-1708601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "2",
    title: "Al Faisaliah Residence",
    category: "Interior",
    location: "Jeddah, Saudi Arabia",
    year: 2023,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "3",
    title: "King Abdullah Park",
    category: "Landscape",
    location: "Dammam, Saudi Arabia",
    year: 2021,
    image: "https://images.pexels.com/photos/461901/pexels-photo-461901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "4",
    title: "Modern Office Complex",
    category: "Commercial",
    location: "Riyadh, Saudi Arabia",
    year: 2023,
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "5",
    title: "Luxury Villa Lighting",
    category: "Interior",
    location: "Jeddah, Saudi Arabia",
    year: 2022,
    image: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "6",
    title: "City Center Plaza",
    category: "Landscape",
    location: "Riyadh, Saudi Arabia",
    year: 2023,
    image: "https://images.pexels.com/photos/1125212/pexels-photo-1125212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const categories = ["All", "Architectural", "Interior", "Landscape", "Commercial"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <main className="pt-20">
   
      <IndividualPageHeader backgroundImage={"url('https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}
        title={"Our Projects"}
        description={"Explore our portfolio of lighting projects that showcase our expertise and innovation."}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className={selectedCategory === category ? "" : "opacity-70"}
              
              >
                {category}
              </Button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
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
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: hoveredProject === project.id ? 1 : 0,
                        y: hoveredProject === project.id ? 0 : 20
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-white border-white/30 hover:bg-white hover:text-primary transition-all duration-300"
                      >
                        View Project
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}