import React from 'react'

const WhatIsSoundbook = () => {
  return (
    <section className="relative py-20 md:py-32 bg-soundbook-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Hand holding vinyl record image */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              {/* Light blue-white spotlight background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 via-blue-100/20 to-transparent rounded-2xl blur-2xl"></div>
              
              {/* Vinyl record container */}
              <div className="relative z-10 flex items-center justify-center">
                {/* Green vinyl record with red label */}
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  {/* Vinyl record */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-2xl">
                    {/* Red center label */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] rounded-full bg-gradient-to-br from-red-500 to-red-600"></div>
                    {/* Center hole */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[10%] h-[10%] rounded-full bg-soundbook-dark"></div>
                    {/* Grooves pattern */}
                    <div className="absolute inset-0 rounded-full opacity-20" style={{
                      backgroundImage: `radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.1) 30.5%, transparent 31%, rgba(0,0,0,0.1) 31.5%, transparent 32%, rgba(0,0,0,0.1) 32.5%, transparent 33%, rgba(0,0,0,0.1) 33.5%, transparent 34%, rgba(0,0,0,0.1) 34.5%, transparent 35%, rgba(0,0,0,0.1) 35.5%, transparent 36%, rgba(0,0,0,0.1) 36.5%, transparent 37%, rgba(0,0,0,0.1) 37.5%, transparent 38%, rgba(0,0,0,0.1) 38.5%, transparent 39%, rgba(0,0,0,0.1) 39.5%, transparent 40%, rgba(0,0,0,0.1) 40.5%, transparent 41%, rgba(0,0,0,0.1) 41.5%, transparent 42%, rgba(0,0,0,0.1) 42.5%, transparent 43%, rgba(0,0,0,0.1) 43.5%, transparent 44%, rgba(0,0,0,0.1) 44.5%, transparent 45%, rgba(0,0,0,0.1) 45.5%, transparent 46%, rgba(0,0,0,0.1) 46.5%, transparent 47%, rgba(0,0,0,0.1) 47.5%, transparent 48%, rgba(0,0,0,0.1) 48.5%, transparent 49%, rgba(0,0,0,0.1) 49.5%, transparent 50%)`
                    }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Information Block */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="text-outline">WHAT IS</span>
              <br />
              <span className="text-soundbook-light-blue">SOUNDBOOK</span>
            </h2>
            
            <div className="space-y-4 text-base md:text-lg text-white/90 leading-relaxed">
              <p>
                <span className="font-bold text-white">SOUNDBOOK</span> is a next-generation music encyclopedia - built for the modern listener.
              </p>
              <p>
                Like Wikipedia, but dedicated entirely to music. Every page is community-driven, fact-checked, and enriched with live data from public sources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsSoundbook
