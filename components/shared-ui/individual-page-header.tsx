'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';

import Image from 'next/image';
function IndividualPageHeader({backgroundImage,title,description}:any) {
 const title1Ref = useRef<HTMLDivElement>(null);
   useEffect(()=>{
  

    
        gsap.fromTo(title1Ref.current, { opacity: 0 , y:80}, {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.6
        });
    

  },[]);
  return (
    <section className="relative py-16 overflow-hidden">
    

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl border-primary-foreground backdrop-blur-[2.5px] shadow-lg shad bg-[rgba(255,255,255,0.31)] p-8 rounded-2xl">
        <h1 ref={title1Ref} className="text-4xl md:text-5xl font-bold mb-6  text-primary dark:text-white">{title}</h1>
        <p className="text-xl text-primary-muted dark:text-white/90">
         {description}
        </p>
      </div>
    </div>
    <div 
      className=" inset-0 z-0 "
    >
      
      {/* </div> */}
        <Image src="/icons_svg/electric-circuit-gray.svg" alt="animated-lightech-bg" width={100} height={100}
        className='w-full h-full absolute top-[25%]'
        ></Image>
    </div>
  </section>
  )
}

export default IndividualPageHeader
