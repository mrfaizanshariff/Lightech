import { Metadata } from "next";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Projects from "@/components/home/Projects";
import Testimonials from "@/components/home/Testimonials";
import Partners from "@/components/home/Partners";
import Contact from "@/components/home/Contact";
import LightRays from "@/components/shared-ui/light-rays";

export const metadata: Metadata = {
  title: "Lightech - Professional Lighting Solutions in Saudi Arabia",
  description: "Lightech provides sophisticated turnkey lighting solutions with professional expertise in architectural, interior, and landscape lighting projects since 2005.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Partners />
      <Contact />
    </main>
  );
}