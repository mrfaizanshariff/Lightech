'use client'
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
import Image from "next/image";
import logo from '../../public/icons_svg/logo_lightech_02.svg';
import content from "../../public/assets/content.json"
import { useLanguage } from "@/context/LanguageContext";
const Footer = () => {
  const {language} =  useLanguage()
  const currentYear = new Date().getFullYear();
  const footerContent = JSON.parse(JSON.stringify(content))[language==="en"?"english":"ar"].footerSection
  return (
    <footer className="bg-primary dark:bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
             <Link
              href="/"
              className=""
            >
          <Image src={logo.src} alt="Lightech Logo" width={124} height={48} className="w-[124px] h-[48px]">

          </Image>
        </Link>
            </div>
            <p className="text-white/80 dark:text-white/90 mb-6">
            {footerContent.description}
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
            <h3 className="text-lg font-semibold mb-4">{footerContent.links_1}</h3>
            <ul className="space-y-3">
              {
                footerContent.quickLinks.map(
                (link:any,index:number)=>{
                  return (
                  <li key={index}>
                    <Link href={link.href} className="text-white/80 dark:text-white/90 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                  )
                }
                )
              }
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerContent.links_2}</h3>
            <ul className="space-y-3">
              {
                footerContent.projectsLinks.map(
                (link:string,index:number)=>{
                  return (
                  <li>
                    <Link href="/projects" className="text-white/80 dark:text-white/90 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                  )
                }
                )
              }
              
             
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerContent.contactSection.title}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-white/80 dark:text-white/90" />
                <span className="text-white/80 dark:text-white/90 whitespace-break-spaces flex-1">
                 {footerContent.contactSection.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-white/80 dark:text-white/90" />
                <span className="text-white/80 dark:text-white/90 ltr">{footerContent.contactSection.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-white/80 dark:text-white/90" />
                <span className="text-white/80 dark:text-white/90">{footerContent.contactSection.email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 mt-8 text-center dark:text-white/90 text-white/60 ltr">
          <p>© {currentYear} Lightech. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;