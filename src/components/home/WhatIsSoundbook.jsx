import React from 'react'
import vinylRecordImage from '../../assets/image/landing/viny.png'
import fourPointedStarsImage from '../../assets/image/landing/Star.png'

const WhatIsSoundbook = () => {
  return (
    <section className="relative py-20 md:py-32">

      <div className="absolute bottom-28 right-10">
        <img src={fourPointedStarsImage} alt="Four-pointed stars" className="w-14 h-1w-14 object-cover" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-[455px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Hand holding vinyl record image */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full">
              <img src={vinylRecordImage} alt="Vinyl Record" className="w-auto max-w-full max-h-[455px] rounded-2xl" />
            </div>
          </div>

          {/* Right: Information Block */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] font-bold mb-8 leading-tight font-moderniz flex flex-col gap-4">
              <span className="text-outline">WHAT IS</span>
              <span className="text-[#6287FF]">SOUNDBOOK</span>
            </h2>

            <div className="space-y-4 text-base md:text-lg font-light text-white/90 leading-relaxed max-w-[540px] font-bdo-grotesk">
              <p>
                <span className="text-white">SOUNDBOOK</span> is a next-generation music encyclopedia - built for the modern listener.
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
