'use client'
import React from 'react'
import DotGrid from './dot-grid'
import Image from 'next/image'
import BlurText from './blur-text-animation'
function IndividualPageHeader({backgroundImage,title,description}:any) {
  return (
    <section className="relative py-16 overflow-hidden">
    <div 
      className="absolute inset-0 z-0 "
      // style={{
      //   backgroundSize: "cover",
      //   backgroundPosition: "center"
      // }}
    >
      
      {/* </div> */}
        <Image src="/icons_svg/animated_svg_electric_circuit.svg" alt="animated-lightech-bg" width={100} height={100}
        className='absolute top-4 w-full h-full'
        ></Image>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl border-primary-foreground backdrop-blur-[2.5px] shadow-lg shad bg-[rgba(255,255,255,0.31)] p-8 rounded-2xl">
         <BlurText
                text={title}
                delay={300}
                animateBy="words"
                direction="top"
                className="text-4xl md:text-5xl font-bold mb-6  text-black dark:text-white"
              />  
        {/* <h1 className="text-4xl md:text-5xl font-bold mb-6  text-black dark:text-white">{title}</h1> */}
        <p className="text-xl text-black/90 dark:text-white/90">
         {description}
        </p>
      </div>
    </div>
  </section>
  )
}

export default IndividualPageHeader
