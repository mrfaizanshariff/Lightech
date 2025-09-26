"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, SunMoon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import logo from '../../public/assets/lightech_logo.jpg';
import content from '../../public/assets/content.json'
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const {language,setLanguage} = useLanguage()
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const changeLanguage = ()=>{
    if(language === "en"){
      setLanguage("ar")
    }else{
      setLanguage("en")
    }
  }
  const links = JSON.parse(JSON.stringify(content))[language == 'en' ? "english":"ar"].navBar;
  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300 ",
        scrolled
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-5"
      )}
    >
      
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className=""
        >
          <Image src={logo.src} alt="Lightech Logo" width={124} height={48} className="w-[124px] h-[48px]">

          </Image>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {links.map((link:any) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={changeLanguage}>
              {language === "en"? "ar":"en"}
            </Button>
            <ThemeToggle />
            <Button>Contact Us</Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
            className="z-50"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-background flex flex-col pt-24 px-4 md:hidden transition-transform duration-300 ease-in-out z-40",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <ul className="flex flex-col gap-6 text-center">
          {links.map((link:any) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xl font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex justify-center">
          <Button className="w-full">Contact Us</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;