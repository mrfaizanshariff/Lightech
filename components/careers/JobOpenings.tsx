"use client";

import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Briefcase, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Position {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

interface Filter {
  label: string;
  value: string;
}

interface JobOpeningsProps {
  content: {
    title: string;
    subtitle: string;
    description: string;
    filters: {
      all: string;
      departments: Filter[];
      locations: Filter[];
      types: Filter[];
    };
    positions: Position[];
    cta: {
      label: string;
      href: string;
    };
  };
}

const JobOpenings = ({ content }: JobOpeningsProps) => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredPositions = useMemo(() => {
    return content.positions.filter((position) => {
      const matchesDepartment =
        selectedDepartment === "all" || position.department === selectedDepartment;
      const matchesLocation =
        selectedLocation === "all" || position.location.toLowerCase() === selectedLocation;
      const matchesType = selectedType === "all" || position.type === selectedType;

      return matchesDepartment && matchesLocation && matchesType;
    });
  }, [content.positions, selectedDepartment, selectedLocation, selectedType]);

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
          {/* Department Filter */}
          <div>
            <label className="block text-sm font-medium mb-3">Filter by Department</label>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedDepartment === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDepartment("all")}
                aria-pressed={selectedDepartment === "all"}
              >
                {content.filters.all}
              </Button>
              {content.filters.departments.map((dept) => (
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

          {/* Location Filter */}
          <div>
            <label className="block text-sm font-medium mb-3">Filter by Location</label>
            <div className="flex flex-wrap gap-2">
              {content.filters.locations.map((loc) => (
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

          {/* Type Filter */}
          <div>
            <label className="block text-sm font-medium mb-3">Filter by Type</label>
            <div className="flex flex-wrap gap-2">
              {content.filters.types.map((type) => (
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
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {position.title}
                    </CardTitle>
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
                    <p className="text-sm text-muted-foreground mb-4">{position.description}</p>
                    <div>
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
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full group" asChild>
                      <a href={`${content.cta.href}?position=${position.id}`}>
                        {content.cta.label}
                      </a>
                    </Button>
                  </CardFooter>
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

        {filteredPositions.length > 0 && (
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Showing {filteredPositions.length} of {content.positions.length} positions
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobOpenings;

// Made with Bob
