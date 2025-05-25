import IndividualPageHeader from "@/components/shared-ui/individual-page-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Lightech",
  description: "Explore our comprehensive lighting services including architectural, interior, landscape, and commercial lighting solutions.",
};

export default function ServicesPage() {
  return (
    <main className="pt-20">

      <IndividualPageHeader backgroundImage={"url('https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}
        title={"Our Services"}
        description={"Comprehensive lighting solutions for architectural, interior, landscape, and commercial projects."}
      />

      <section id="architectural" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Architectural Lighting</h2>
              <p className="text-muted-foreground mb-4">
                Our architectural lighting solutions enhance the aesthetic appeal and functionality of buildings,
                highlighting structural elements and creating memorable visual experiences.
              </p>
              <p className="text-muted-foreground mb-4">
                We collaborate with architects and designers to integrate lighting seamlessly into architectural concepts,
                ensuring that light complements and enhances the building's design.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Facade lighting for commercial and residential buildings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Monument and landmark illumination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Public space and urban lighting design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Energy-efficient lighting solutions</span>
                </li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://images.pexels.com/photos/1708601/pexels-photo-1708601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Architectural lighting" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section id="interior" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 overflow-hidden rounded-lg">
              <img 
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Interior lighting" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Interior Lighting</h2>
              <p className="text-muted-foreground mb-4">
                Create the perfect ambiance for any indoor space with our interior lighting designs that 
                combine functionality, energy efficiency, and beautiful aesthetics.
              </p>
              <p className="text-muted-foreground mb-4">
                Our interior lighting solutions are tailored to the specific needs of each space, considering 
                factors such as natural light, room function, and design aesthetics.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Residential lighting design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Commercial and office lighting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Hospitality and retail lighting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Smart lighting control systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional service sections would go here for a complete Services page */}
    </main>
  );
}