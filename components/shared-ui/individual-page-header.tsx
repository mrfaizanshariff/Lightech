import React from 'react'
import DotGrid from './dot-grid'

function IndividualPageHeader({backgroundImage,title,description}:any) {
  return (
    <section className="relative py-32 overflow-hidden">
    <div 
      className="absolute inset-0 z-0 "
      // style={{
      //   backgroundImage:backgroundImage,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center"
      // }}
    >
      {/* <div className="absolute inset-0 dark:from-gray-900/90 dark:to-gray-900/70 bg-gradient-to-r from-primary/90 to-primary/70 backdrop-blur-sm"></div> */}
      
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-white dark:bg-black">
        {/* <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/10 animate-pulse"></div> */}
        {/* <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-white/5 animate-pulse [animation-delay:1s]"></div> */}
       <DotGrid
    dotSize={7}
    gap={15}
    baseColor="#5227FF"
    activeColor="#FFFFFF"
    proximity={120}
    shockRadius={250}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}
  />
      </div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl backdrop-blur-md bg-white/5 dark:bg-white/10 p-8 rounded-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6  text-black dark:text-white">{title}</h1>
        <p className="text-xl text-black/90 dark:text-white/90">
         {description}
        </p>
      </div>
    </div>
  </section>
  )
}

export default IndividualPageHeader
