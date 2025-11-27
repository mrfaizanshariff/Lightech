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
    <footer className="bg-primary dark:bg-gray-900 text-white pt-16 pb-8" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
             <Link
              href="/"
              className="focus:outline-none focus:ring-2 focus:ring-white rounded"
              aria-label="Lightech - Return to home"
            >
          <Image src={logo.src} alt="Lightech Logo" width={124} height={48} className="w-[124px] h-[48px]">

          </Image>
        </Link>
            </div>
            <p className="text-white/80 dark:text-white/90 mb-6">
            {footerContent.description}
            </p>
            <div className="flex gap-4">
              
              <Button size="icon" variant="ghost" className="text-white hover:text-white hover:bg-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-white" aria-label="Connect with us on LinkedIn">
                <Link href="https://www.linkedin.com/company/light-technologies-co-ltd" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} aria-hidden="true" />
                </Link>
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:text-white hover:bg-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-white" aria-label="Follow us on Instagram">
                <Link href="https://www.instagram.com/lightech_sa" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} aria-hidden="true" />
                </Link>
              </Button>             
              <Button size="icon" variant="ghost" className="text-white hover:text-white hover:bg-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-white" aria-label="Connect with us on LinkedIn">
                <Link href="https://x.com/lightech_sa" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" className="bi bi-twitter-x" viewBox="0 0 20 20" id="Twitter-X--Streamline-Bootstrap" height="20" width="20">
                  <desc>
                    Twitter X Streamline Icon: https://streamlinehq.com
                  </desc>
                  <path d="M15.75 0.9375h3.0675000000000003l-6.7 7.6775L20 19.0625h-6.171250000000001l-4.83375 -6.3375 -5.53125 6.3375H0.395l7.16625 -8.2125L0 0.9375h6.328749999999999l4.36875 5.79125L15.75125 0.9375Zm-1.075 16.285h1.7000000000000002L5.4037500000000005 2.68125H3.5812500000000003z" stroke-width="1.25"></path>
                </svg>
                </Link>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerContent.links_1}</h3>
            <nav>
              <ul className="space-y-3">
                {
                  footerContent.quickLinks.map(
                  (link:any,index:number)=>{
                    return (
                    <li key={index}>
                      <Link href={link.href} className="text-white/80 dark:text-white/90 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1 inline-block">
                        {link.label}
                      </Link>
                    </li>
                    )
                  }
                  )
                }
              </ul>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerContent.links_2}</h3>
            <nav>
              <ul className="space-y-3">
                {
                  footerContent.projectsLinks.map(
                  (link:string,index:number)=>{
                    return (
                    <li key={index}>
                      <Link href="/projects" className="text-white/80 dark:text-white/90 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1 inline-block">
                        {link}
                      </Link>
                    </li>
                    )
                  }
                  )
                }
              </ul>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerContent.contactSection.title}</h3>
            <address className="not-italic">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 text-white/80 dark:text-white/90 flex-shrink-0" aria-hidden="true" />
                  <span className="text-white/80 dark:text-white/90 whitespace-break-spaces flex-1">
                   {footerContent.contactSection.address}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-white/80 dark:text-white/90 flex-shrink-0" aria-hidden="true" />
                  <a href={`tel:${footerContent.contactSection.phone}`} className="text-white/80 dark:text-white/90 ltr hover:text-white transition-colors">{footerContent.contactSection.phone}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-white/80 dark:text-white/90 flex-shrink-0" aria-hidden="true" />
                  <a href={`mailto:${footerContent.contactSection.email}`} className="text-white/80 dark:text-white/90 hover:text-white transition-colors">{footerContent.contactSection.email}</a>
                </li>
              </ul>
            </address>
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