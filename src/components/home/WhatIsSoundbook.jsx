import React from 'react'
import vinylRecordImage from '../../assets/image/landing/viny.png'

const WhatIsSoundbook = () => {
  return (
    <section className="relative py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Hand holding vinyl record image */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full">
              {/* Vinyl record container */}
              <img src={vinylRecordImage} alt="Vinyl Record" className="w-auto max-w-full h-[400px] rounded-2xl" />
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
