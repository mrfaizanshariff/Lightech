import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/10 rounded-full z-0"></div>
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg h-48">
                  <img 
                    src="https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Architectural lighting" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg h-64 bg-primary">
                  <div className="h-full flex items-center justify-center p-6 text-white">
                    <p className="font-medium text-lg">Founded in 2005</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="overflow-hidden rounded-lg h-64">
                  <img 
                    src="https://images.pexels.com/photos/6444367/pexels-photo-6444367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Interior lighting" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg h-48">
                  <img 
                    src="https://images.pexels.com/photos/7031408/pexels-photo-7031408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Landscape lighting" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-sm text-primary font-medium tracking-wider mb-2">ABOUT LIGHTECH</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Lighting Experts Since 2005</h3>
              <div className="w-20 h-1.5 bg-primary rounded-full"></div>
            </div>
            
            <p className="text-muted-foreground">
              Lightech is a dynamic lighting company with a wide array of activities and services. 
              Powered by professional experience in lighting projects, and an additional multi-discipline 
              background in architecture, interior, and landscape lighting, we can provide simple 
              and seamless solutions to meet and exceed even the toughest project needs.
            </p>
            
            <p className="text-muted-foreground">
              At Lightech, one of our main strengths is a permanent variety of products and 
              experienced professionals in the field. This combination has developed a host 
              of capabilities designed to generate sophisticated turnkey lighting solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-primary">18+</span>
                <span className="text-sm text-muted-foreground">Years of Experience</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-primary">200+</span>
                <span className="text-sm text-muted-foreground">Projects Completed</span>
              </div>
            </div>
            
            <Link href="/about">
              <Button className="group">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;