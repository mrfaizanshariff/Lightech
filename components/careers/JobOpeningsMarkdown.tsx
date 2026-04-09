"use client";

import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Briefcase, Clock, DollarSign, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { JobOpening } from "@/lib/jobOpeningsParser";

interface JobOpeningsMarkdownProps {
  jobs: JobOpening[];
  content?: {
    title?: string;
    subtitle?: string;
    description?: string;
    filters?: { all: string };
    cta?: { label: string; href: string };
  };
}

export default function JobOpeningsMarkdown({ 
  jobs, 
  content = {
    title: "Current Openings",
    subtitle: "Join Our Team",
    description: "Explore exciting career opportunities at Lightech",
    filters: { all: "All" },
    cta: { label: "Apply Now", href: "/careers/apply" }
  }
}: JobOpeningsMarkdownProps) {
//   const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
//   const [selectedType, setSelectedType] = useState<string>("all");

  // Get unique filter options
  const filterOptions = useMemo(() => {
    // const departments = Array.from(new Set(jobs.map((job) => job.department)));
    const locations = Array.from(new Set(jobs.map((job) => job.location)));
    // const types = Array.from(new Set(jobs.map((job) => job.type)));

    return {
    //   departments: departments.map((dept) => ({
    //     label: dept,
    //     value: dept.toLowerCase(),
    //   })),
      locations: locations.map((loc) => ({
        label: loc,
        value: loc.toLowerCase(),
      })),
    //   types: types.map((type) => ({
    //     label: type,
    //     value: type.toLowerCase(),
    //   })),
    };
  }, [jobs]);

  // Filter jobs
  const filteredPositions = useMemo(() => {
    return jobs.filter((job) => {
    //   const matchesDepartment = 
    //     selectedDepartment === "all" || 
    //     job.department.toLowerCase() === selectedDepartment;
      const matchesLocation = 
        selectedLocation === "all" || 
        job.location.toLowerCase() === selectedLocation;
    //   const matchesType = 
    //     selectedType === "all" || 
    //     job.type.toLowerCase() === selectedType;
    //   return matchesDepartment && matchesLocation && matchesType;
      return   matchesLocation ;
    });
//   }, [jobs, selectedDepartment, selectedLocation, selectedType]);
  }, [jobs, selectedLocation]);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    } catch {
      return dateString;
    }
  };

  return (
    <section id="jobs" className="py-20 bg-white dark:bg-black" aria-labelledby="jobs-heading">
      <div>
        <h2 id="jobs-heading" className="text-4xl px-8 pt-8 text-primary font-bold tracking-wider mb-2">
          {content.title}
        </h2>
        <hr className="mb-4 ml-8" />
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">{content.subtitle}</h3>
          <p className="text-muted-foreground">{content.description}</p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-6">
          {/* {filterOptions.departments.length > 1 && (
            <div>
              <label className="block text-sm font-medium mb-3">Filter by Department</label>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedDepartment === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDepartment("all")}
                  aria-pressed={selectedDepartment === "all"}
                >
                  {content.filters?.all}
                </Button>
                {filterOptions.departments.map((dept) => (
                  <Button
                    key={dept.value}
                    variant={selectedDepartment === dept.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDepartment(dept.value)}
                    aria-pressed={selectedDepartment === dept.value}
                  >
                    {dept.label}
                  </Button>
                ))}
              </div>
            </div>
          )} */}

          {filterOptions.locations.length > 1 && (
            <div>
              <label className="block text-sm font-medium mb-3">Filter by Location</label>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedLocation === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLocation("all")}
                  aria-pressed={selectedLocation === "all"}
                >
                  {content.filters?.all}
                </Button>
                {filterOptions.locations.map((loc) => (
                  <Button
                    key={loc.value}
                    variant={selectedLocation === loc.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLocation(loc.value)}
                    aria-pressed={selectedLocation === loc.value}
                  >
                    {loc.label}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* {filterOptions.types.length > 1 && (
            <div>
              <label className="block text-sm font-medium mb-3">Filter by Type</label>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedType === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType("all")}
                  aria-pressed={selectedType === "all"}
                >
                  {content.filters?.all}
                </Button>
                {filterOptions.types.map((type) => (
                  <Button
                    key={type.value}
                    variant={selectedType === type.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type.value)}
                    aria-pressed={selectedType === type.value}
                  >
                    {type.label}
                  </Button>
                ))}
              </div>
            </div>
          )} */}
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPositions.length > 0 ? (
            filteredPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {position.title}
                      </CardTitle>
                      {position.featured && (
                        <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <CardDescription className="flex flex-wrap gap-3 mt-3">
                      <span className="flex items-center gap-1 text-xs">
                        <Briefcase className="h-3 w-3" aria-hidden="true" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1 text-xs">
                        <MapPin className="h-3 w-3" aria-hidden="true" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1 text-xs">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        {position.type}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {position.description}
                    </p>
                    
                    {position.salary && (
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                        <DollarSign className="h-4 w-4" aria-hidden="true" />
                        <span>{position.salary}</span>
                      </div>
                    )}

                    {position.requirements.length > 0 && (
                      <div className="mb-3">
                        <p className="text-sm font-semibold mb-2">Key Requirements:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {position.requirements.slice(0, 3).map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                              <span className="line-clamp-2">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    
                  </CardContent>
                  
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground text-lg">
                No positions found matching your filters. Please try different criteria.
              </p>
            </div>
          )}
        </div>

        {filteredPositions.length > 0 && jobs.length > 1 && (
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Showing {filteredPositions.length} of {jobs.length} positions
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

// Made with Bob
