import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const Partners = () => {
  const partnerLogos = [
    { name: "Partner 1", logo: "https://via.placeholder.com/150x60/e6e7e9/1f4082?text=PARTNER" },
    { name: "Partner 2", logo: "https://via.placeholder.com/150x60/e6e7e9/1f4082?text=PARTNER" },
    { name: "Partner 3", logo: "https://via.placeholder.com/150x60/e6e7e9/1f4082?text=PARTNER" },
    { name: "Partner 4", logo: "https://via.placeholder.com/150x60/e6e7e9/1f4082?text=PARTNER" },
    { name: "Partner 5", logo: "https://via.placeholder.com/150x60/e6e7e9/1f4082?text=PARTNER" },
    { name: "Partner 6", logo: "https://via.placeholder.com/150x60/e6e7e9/1f4082?text=PARTNER" },
    // Duplicate logos for continuous scroll effect
    { name: "Partner 1", logo: "https://via.placeholder.com/150x60/e6e7e9/1f4082?text=PARTNER" },
    { name: "Partner 2", logo: "https://via.placeholder.com/150x60/e6e7e9/1f4082?text=PARTNER" },
    { name: "Partner 3", logo: "https://via.placeholder.com/150x60/e6e7e9/1f4082?text=PARTNER" },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm text-primary font-medium tracking-wider mb-2">OUR PARTNERS</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Trusted By Industry Leaders</h3>
          <p className="text-muted-foreground">
            We collaborate with leading brands and companies to deliver exceptional lighting solutions
            for projects of all sizes.
          </p>
        </div>
        
        <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l after:from-background after:to-transparent">
          <div className="flex animate-scroll">
            {partnerLogos.map((partner, index) => (
              <div 
                key={index}
                className="flex-shrink-0 mx-8 backdrop-blur-sm bg-white/30 dark:bg-white/10 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                style={{ width: '200px' }}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="backdrop-blur-md bg-white/50 dark:bg-white/10 border-none shadow-lg">
            <CardContent className="p-8">
              <div className="bg-primary/10 w-14 h-14 flex items-center justify-center rounded-full mb-6">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-3">Quality Products</h4>
              <p className="text-muted-foreground">
                We work with the industry's leading manufacturers to ensure we provide our clients with 
                high-quality, durable lighting products that meet international standards.
              </p>
            </CardContent>
          </Card>
          
          <Card className="backdrop-blur-md bg-white/50 dark:bg-white/10 border-none shadow-lg">
            <CardContent className="p-8">
              <div className="bg-primary/10 w-14 h-14 flex items-center justify-center rounded-full mb-6">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-3">Expert Installation</h4>
              <p className="text-muted-foreground">
                Our team of certified technicians ensures professional installation of all lighting systems,
                following best practices and safety standards for optimal performance.
              </p>
            </CardContent>
          </Card>
          
          <Card className="backdrop-blur-md bg-white/50 dark:bg-white/10 border-none shadow-lg">
            <CardContent className="p-8">
              <div className="bg-primary/10 w-14 h-14 flex items-center justify-center rounded-full mb-6">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-3">Ongoing Support</h4>
              <p className="text-muted-foreground">
                We provide comprehensive maintenance services and technical support to ensure your
                lighting systems continue to perform at their best for years to come.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Partners;