"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface CareerInfoProps {
  content: {
    title: string;
    subtitle: string;
    description: string;
    benefits: Benefit[];
  };
}

const CareerInfo = ({ content }: CareerInfoProps) => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" aria-labelledby="culture-heading">
      <div>
        <h2 id="culture-heading" className="text-4xl px-8 pt-8 text-primary font-bold tracking-wider mb-2">
          {content.title}
        </h2>
        <hr className="mb-4 ml-8" />
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">{content.subtitle}</h3>
          <p className="text-muted-foreground">{content.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="backdrop-blur-md bg-white dark:bg-gray-800 p-8 rounded-xl h-full border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Image
                    src={`/icons_svg/${benefit.icon}`}
                    alt=""
                    width={40}
                    height={40}
                    aria-hidden="true"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-3">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerInfo;

// Made with Bob
