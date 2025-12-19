import React from 'react'
import { Headset, PencilLine, ChartLine } from 'lucide-react'
import fourPointedStarsImage from '../../assets/image/landing/Star.png'

const WhatYouCanFind = () => {
  const features = [
    {
      icon: <Headset className="w-6 h-6" />,
      title: "Discover the Sound of Every Era",
      description: "Explore music genres, songs, artists, playlists, and terminology"
    },
    {
      icon: <PencilLine className="w-6 h-6" />,
      title: "Your Edits Keep the Music Wiki Alive",
      description: "Add your own knowledge, edits, and insights"
    },
    {
      icon: <ChartLine className="w-6 h-6" />,
      title: "Track the Pulse of Global Music Trends",
      description: "Watch real-time trends and streaming stats evolve"
    }
  ]

  return (
    <section className="relative pt-4 pb-20 md:pb-32 overflow-hidden">
      {/* Four-pointed stars image*/}
      <div className="absolute bottom-0 left-10">
        <img src={fourPointedStarsImage} alt="Four-pointed stars" className="w-14 h-14 object-cover" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-moderniz font-bold mb-6 text-center leading-tight">
          <span className="text-outline pr-4">WHAT YOU CAN</span>
          <span className="text-soundbook-light-blue">FIND</span>
        </h2>

        {/* Disclaimer */}
        <p className="text-center mb-16 max-w-3xl font-bdo-grotesk mx-auto text-lg font-normal text-white">
          We are not affiliated with SoundCloud, Spotify, or any streaming platform.<br /> All data is user-submitted or pulled from open APIs.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/20 rounded-3xl">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-10 font-bdo-grotesk max-w-[380px] ${index !== 0 ? 'border-l border-white/10' : ''}`}
            >
              {/* Circular icon with ring */}
              <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 rounded-full bg-[#3967FD]"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-normal text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white leading-relaxed font-light text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatYouCanFind
