import React from 'react'

function IndividualPageHeader({backgroundImage,title,description}:any) {
  return (
    <section className="relative py-32 overflow-hidden">
    <div 
      className="absolute inset-0 z-0"
      style={{
        backgroundImage:backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 dark:from-gray-900/90 dark:to-gray-900/70 bg-gradient-to-r from-primary/90 to-primary/70 backdrop-blur-sm"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-white/5 animate-pulse [animation-delay:1s]"></div>
      </div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl backdrop-blur-md dark:bg-white/5 bg-white/10 p-8 rounded-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{title}</h1>
        <p className="text-xl text-white/90">
         {description}
        </p>
      </div>
    </div>
  </section>
  )
}

export default IndividualPageHeader
