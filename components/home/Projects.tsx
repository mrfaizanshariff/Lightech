"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  location: string;
  year: number;
}

const projects: Project[] = [
  {
    id: "project1",
    title: "Riyadh Cultural Center",
    category: "Architectural",
    image: "https://images.pexels.com/photos/1708601/pexels-photo-1708601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Riyadh, Saudi Arabia",
    year: 2022
  },
  {
    id: "project2",
    title: "Al Faisaliah Residence",
    category: "Interior",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Jeddah, Saudi Arabia",
    year: 2023
  },
  {
    id: "project3",
    title: "King Abdullah Park",
    category: "Landscape",
    image: "https://images.pexels.com/photos/461901/pexels-photo-461901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Dammam, Saudi Arabia",
    year: 2021
  },
  {
    id: "project4",
    title: "Saudi Business Tower",
    category: "Commercial",
    image: "https://images.pexels.com/photos/937483/pexels-photo-937483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Riyadh, Saudi Arabia",
    year: 2023
  }
];

const categories = ["All", "Architectural", "Interior", "Landscape", "Commercial"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-sm text-primary font-medium tracking-wider mb-2">OUR PROJECTS</h2>
            <h3 className="text-3xl md:text-4xl font-bold">Featured Projects</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "" : "opacity-70"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                <Link href={`/projects/${project.id}`}>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-white border-white/30 hover:bg-white hover:text-primary transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0"
                  >
                    View Project
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/projects">
            <Button size="lg" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;