import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Lightech",
  description: "Learn about Lightech, a dynamic lighting company founded in 2005 with expertise in lighting projects, architecture, interior, and landscape lighting.",
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Lightech</h1>
          <p className="text-xl max-w-3xl">
            A dynamic lighting company with a wide array of activities and services,
            powered by professional experience since 2005.
          </p>
        </div>
      </section>

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
      
      {/* Additional sections would go here for a complete About page */}
    </main>
  );
}