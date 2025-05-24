import React from "react";
import Link from "next/link";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  SunMoon
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <SunMoon className="h-8 w-8" />
              <span className="text-2xl font-bold">LIGHTECH</span>
            </div>
            <p className="text-white/80 mb-6">
              A dynamic lighting company with professional experience in lighting projects, 
              architecture, interior, and landscape lighting solutions.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="text-white hover:text-white hover:bg-white/20 rounded-full">
                <Facebook size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:text-white hover:bg-white/20 rounded-full">
                <Twitter size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:text-white hover:bg-white/20 rounded-full">
                <Instagram size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:text-white hover:bg-white/20 rounded-full">
                <Linkedin size={20} />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/80 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#architectural" className="text-white/80 hover:text-white transition-colors">
                  Architectural Lighting
                </Link>
              </li>
              <li>
                <Link href="/services#interior" className="text-white/80 hover:text-white transition-colors">
                  Interior Lighting
                </Link>
              </li>
              <li>
                <Link href="/services#landscape" className="text-white/80 hover:text-white transition-colors">
                  Landscape Lighting
                </Link>
              </li>
              <li>
                <Link href="/services#commercial" className="text-white/80 hover:text-white transition-colors">
                  Commercial Lighting
                </Link>
              </li>
              <li>
                <Link href="/services#consultation" className="text-white/80 hover:text-white transition-colors">
                  Lighting Consultation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-white/80" />
                <span className="text-white/80">
                  King Fahd Road, Riyadh
                  <br />
                  Saudi Arabia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-white/80" />
                <span className="text-white/80">+966 11 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-white/80" />
                <span className="text-white/80">info@lightech.sa</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 mt-8 text-center text-white/60">
          <p>© {currentYear} Lightech. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;