"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import content from '../../public/assets/content.json'
import { useLanguage } from "@/context/LanguageContext";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  image: string;
}

const Testimonials = () => {
  const {language} = useLanguage()
  const testimonialsContent = JSON.parse(JSON.stringify(content))[language==="en"?"english":"ar"].testimonialSection
  
  const testimonials: Testimonial[] = testimonialsContent.testimonials
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm text-primary font-medium tracking-wider mb-2">{testimonialsContent.title}</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">{testimonialsContent.subtitle}</h3>
          <p className="text-muted-foreground">{testimonialsContent.description}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-none shadow-lg bg-white dark:bg-gray-800">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="relative w-28 h-28 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={currentTestimonial.image} 
                        alt={currentTestimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <Quote className="h-8 w-8 text-primary/20 mb-4" />
                      <p className="text-lg mb-6 italic">"{currentTestimonial.text}"</p>
                      <div>
                        <p className="font-bold text-lg">{currentTestimonial.name}</p>
                        <p className="text-muted-foreground">
                          {currentTestimonial.position}, {currentTestimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center gap-4 mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;