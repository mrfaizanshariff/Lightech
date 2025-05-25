import IndividualPageHeader from "@/components/shared-ui/individual-page-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Lightech",
  description: "Learn about Lightech, a dynamic lighting company founded in 2005 with expertise in lighting projects, architecture, interior, and landscape lighting.",
};

export default function AboutPage() {
  return (
    <main className="pt-20">
        <IndividualPageHeader backgroundImage={"url('https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}
        title={"About Lightech"}
        description={" A dynamic lighting company with a wide array of activities and services,powered by professional experience since 2005."}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2005, Lightech has established itself as a leading lighting company in Saudi Arabia.
                Our journey began with a vision to transform spaces through innovative lighting solutions.
              </p>
              <p className="text-muted-foreground mb-4">
                Powered by professional experience in lighting projects, and an additional multi-discipline
                background in architecture, interior, and landscape lighting, we can provide simple
                and seamless solutions to meet and exceed even the toughest project needs.
              </p>
              <p className="text-muted-foreground">
                At Lightech, one of our main strengths is a permanent variety of products and
                experienced professionals in the field. This combination has developed a host
                of capabilities designed to generate sophisticated turnkey lighting solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/3635300/pexels-photo-3635300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Lightech office" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/6444368/pexels-photo-6444368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Lightech project" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Lighting design" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="backdrop-blur-md bg-white/50 dark:bg-white/5 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To transform spaces through innovative lighting solutions that enhance the beauty, 
                functionality, and sustainability of architectural environments while exceeding our 
                clients' expectations through excellence in design, technology, and service.
              </p>
            </div>
            
            <div className="backdrop-blur-md bg-white/50 dark:bg-white/5 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading lighting solutions provider in Saudi Arabia and beyond, 
                recognized for our innovation, sustainability, and commitment to creating 
                exceptional lighting experiences that inspire and transform spaces.
              </p>
            </div>
            
            <div className="backdrop-blur-md bg-white/50 dark:bg-white/5 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Innovation in Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Sustainability Focus</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Customer Excellence</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Professional Expertise</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Strategic Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="backdrop-blur-md bg-white/50 dark:bg-white/5 p-6 rounded-xl h-full border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-xl">🎯</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Market Leadership</h4>
                <p className="text-muted-foreground text-sm">
                  Maintain and expand our position as a leading lighting solutions provider in Saudi Arabia.
                </p>
              </div>
            </div>

            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="backdrop-blur-md bg-white/50 dark:bg-white/5 p-6 rounded-xl h-full border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-xl">💡</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Innovation</h4>
                <p className="text-muted-foreground text-sm">
                  Continuously develop and implement innovative lighting solutions and technologies.
                </p>
              </div>
            </div>

            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="backdrop-blur-md bg-white/50 dark:bg-white/5 p-6 rounded-xl h-full border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-xl">🌱</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Sustainability</h4>
                <p className="text-muted-foreground text-sm">
                  Promote energy-efficient and environmentally sustainable lighting solutions.
                </p>
              </div>
            </div>

            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="backdrop-blur-md bg-white/50 dark:bg-white/5 p-6 rounded-xl h-full border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-xl">🤝</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Client Success</h4>
                <p className="text-muted-foreground text-sm">
                  Ensure client satisfaction through exceptional service and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional sections would go here for a complete About page */}
    </main>
  );
}