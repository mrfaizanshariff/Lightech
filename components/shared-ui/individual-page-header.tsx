'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';

import Image from 'next/image';
function IndividualPageHeader({backgroundImage,title,description}:any) {
 const title1Ref = useRef<HTMLDivElement>(null);
   useEffect(()=>{
  

    
        gsap.fromTo(title1Ref.current, { opacity: 0 , x:-80}, {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.3
        });
    

  },[]);
  return (
    <section className="pt-16 overflow-hidden">
    

    <div className="w-full px-4 z-10">
      <div className="w-full md:relative md:overflow-hidden md:mb-8 md:flex md:justify-end border-primary-foreground backdrop-blur-[2.5px] bg-[rgba(255,255,255)] p-8 rounded-2xl mobile-shadow">
        <div className='md:flex-1 md:basis-[60%]'>
        <h1 ref={title1Ref} className="text-4xl md:text-5xl font-bold mb-6  text-primary dark:text-white">{title}</h1>
        <p className="text-xl text-primary-muted dark:text-white/90">
         {description}
        </p>
        </div>
        <div className='hidden md:block md:absolute custom:bottom-[8vw] bottom-[10vw] left-[40vw]'>

        <Image
        src="/icons_svg/electric-circuit-blue.svg"
        alt="animated-lightech-bg"
        width={100}
        height={100}
        className="w-[100vw] h-auto pointer-events-none select-none "
        style={{
          // fade to transparent at the bottom
          WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
          maskImage: 'linear-gradient(180deg, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)'
        }}
      />
        </div>
      </div>
    </div>
    <style jsx>{`
      .mobile-shadow {
        -webkit-box-shadow: 0px 25px 35px 12px rgba(0,0,0,0.3);
        box-shadow: 0px 25px 35px 12px rgba(0,0,0,0.3);
      }
      @media (min-width: 768px) {
        .mobile-shadow {
          -webkit-box-shadow: 0px 15px 15px 2px rgba(0,0,0,0.3);
        box-shadow: 0px 15px 15px 2px rgba(0,0,0,0.3);
        }
      }
    `}</style>
    <div className='relative bottom-[4vw] md:hidden'>
      {/* background image that fades out at the bottom using CSS mask */}
      <Image
        src="/icons_svg/electric-circuit-blue.svg"
        alt="animated-lightech-bg"
        width={100}
        height={100}
        className="w-full h-auto pointer-events-none select-none "
        style={{
          // fade to transparent at the bottom
          WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
          maskImage: 'linear-gradient(180deg, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)'
        }}
      />
    </div>
  </section>
  )
}

export default IndividualPageHeader
