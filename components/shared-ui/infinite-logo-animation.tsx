'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

// interface Logo {
//   src: string;
//   alt: string;
// }

// const logos: Logo[] = [
//   {
//     src:"https://darsas.sa/wp-content/uploads/2024/04/dar-client-logo-1.jpg",
//     alt: "DHL"
//   },
//   {
//     src:"https://darsas.sa/wp-content/uploads/2024/04/dar-client-logo-2.jpg" ,
//    alt: "Meed"
//   },
//   {
//     src: "https://darsas.sa/wp-content/uploads/2024/04/dar-client-logo-3.jpg",
//     alt: "AA"
//   },
//   {
//     src: "https://darsas.sa/wp-content/uploads/2024/04/dar-client-logo-4.jpg",
//     alt: "Saudi Investment Bank"
//   },
//   {
//     src: "https://darsas.sa/wp-content/uploads/2024/04/dar-client-logo-5.jpg",
//     alt: "Sab"
//   },
//   {
//     src: "https://darsas.sa/wp-content/uploads/2024/04/dar-client-logo-6.jpg",
//     alt: "Salam"
//   },
//   {
//     src: "https://darsas.sa/wp-content/uploads/2024/04/dar-client-logo-7.jpg",
//     alt: "UPS"
//   },
//   {
//     src: "https://darsas.sa/wp-content/uploads/2024/04/dar-client-logo-8.jpg",
//     alt: "Integrated Telecom"
//   },
//   {
//     src: "https://darsas.sa/wp-content/uploads/2024/04/dar-client-logo-9.jpg",
//     alt: "NCVC"
//   },
//   {
//     src: "https://darsas.sa/wp-content/uploads/2024/04/dar-client-logo-10.jpg",
//     alt: "Orbit"
//   },
//   {
//     src: "https://darsas.sa/wp-content/uploads/2024/04/dar-client-logo-11.jpg",
//     alt: "Emirated NBD"
//   },
//   {
//     src: "https://darsas.sa/wp-content/uploads/2024/04/dar-client-logo-12.jpg",
//     alt: "Riyad Bank"
//   },
//   {
//     src: "https://darsas.sa/wp-content/uploads/2024/04/dar-client-logo-13.jpg",
//     alt: "Pizza Hut"
//   },
  
// ];

export function InfiniteLogoSlider(logos:any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex space-x-16 animate-scroll ${isHovered ? 'animation-paused' : ''}`}>
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center min-w-[200px]"
          >
            <Image
              src={logo.src}
              alt={"Lightech Partners"}
              width={200}
              height={100}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}