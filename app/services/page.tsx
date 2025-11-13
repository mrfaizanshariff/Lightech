// app/services/page.tsx
"use client";

import IndividualPageHeader from "@/components/shared-ui/individual-page-header";
import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import content from "../../public/assets/content.json"
import { useLanguage } from "@/context/LanguageContext";
import { Ratio } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function ServicesPage() {
  const {language} = useLanguage()
  const serviceData = JSON.parse(JSON.stringify(content))[language === "en" ? "english":"ar"]
  const { header, categories } = serviceData.servicesPage;

  // Active section tracking with IntersectionObserver
  const [activeId, setActiveId] = useState<string>(categories[0].key);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    categories.forEach((c:any) => {
      const el = document.getElementById(c.key);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories]);

  // Smooth scroll
  const handleJump = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Top progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 20, mass: 0.3 });

  // Header parallax
  const yParallax = useTransform(scrollYProgress, [0, 0.3], [0, -40]);

  const navItems = useMemo(
    () => categories.map((c:any) => ({ id: c.key, label: c.title })),
    [categories]
  );

  return (
    <main className="pt-20">
     

      <motion.div style={{ y: yParallax }}>
        <IndividualPageHeader
          title={header.title}
          description={header.subtitle}
        />
      </motion.div>
      {/* Scroll progress indicator */}
     
      {/* Sticky sub-navigation */}
      <div className="sticky top-[5.5rem] z-30 border-b border-gray-200 bg-white/70 backdrop-blur dark:border-gray-800 dark:bg-gray-900/60">
        <nav className="container mx-auto px-4">
          <ul className="flex flex-wrap items-center gap-3 py-3">
            {navItems.map((item:any) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <motion.a
                    href={`#${item.id}`}
                    onClick={handleJump(item.id)}
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-gray-100 dark:hover:bg-white/5"
                    }`}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="dot"
                        className="h-1.5 w-1.5 rounded-full bg-primary"
                      />
                    )}
                  </motion.a>
                </li>
              );
            })}
          </ul>
        </nav>
       <motion.div
        style={{ scaleX }}
        className={`sticky left-0 top-[6.5rem] z-1000 h-1 w-full 
          ${language === 'ar' ? 'origin-right':'origin-left'} bg-primary/70`}
      />
      </div>
        
      {/* Category cards grid with reveal */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {categories.map((cat:any, i:number) => (
              <motion.a
                key={cat.key}
                href={`#${cat.key}`}
                onClick={handleJump(cat.key)}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.05, duration: 0.4 },
                  },
                }}
                className="group rounded-xl border border-gray-200 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <h3 className="text-lg font-semibold tracking-wide">{cat.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  {cat.summary}
                </p>
                {/* <div className="mt-4 flex flex-wrap gap-2">
                  {cat.badges?.map((b) => (
                    <span
                      key={b}
                      className="rounded-full bg-primary/10 px-2.5 py-1 text-xs text-primary"
                    >
                      {b}
                    </span>
                  ))}
                </div> */}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sections with subtle entrance */}
      {categories.map((cat:any, idx:number) => (
        <section
          id={cat.key}
          key={cat.key}
          className={`scroll-mt-24 py-20 ${
            idx % 2 === 1 ? "bg-gray-50 dark:bg-gray-900" : ""
          }`}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              className="grid grid-cols-1 gap-12 lg:grid-cols-3"
            >
              <motion.div variants={{
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
}} className="lg:col-span-1">
                <h2 className="text-3xl font-bold">{cat.title}</h2>
                <p className="mt-4 text-muted-foreground">{cat.summary}</p>
              </motion.div>

              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                  <motion.div
                    variants={{
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
}}
                    className="rounded-xl border border-gray-200 p-6 dark:border-gray-800"
                  >
                    <h4 className="text-lg font-semibold">{language==='en'?"Offerings":"العروض"}</h4>
                    <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                      {cat.offerings.map((item:any) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
              <div className="aspect-ratio-1-1">
                <img className="w-full h-full rounded-md" src={`/assets/${cat.imageSrc}`} alt="" />
              </div>
                </div>
              </div>

            </motion.div>
          </div>
        </section>
      ))}
    </main>
  );
}
