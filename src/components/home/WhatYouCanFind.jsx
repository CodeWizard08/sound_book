import React from 'react'

const WhatYouCanFind = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      title: "Discover the Sound of Every Era",
      description: "Explore music genres, songs, artists, playlists, and terminology"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: "Your Edits Keep the Music Wiki Alive",
      description: "Add your own knowledge, edits, and insights"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Track the Pulse of Global Music Trends",
      description: "Watch real-time trends and streaming stats evolve"
    }
  ]

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Four-pointed stars */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center leading-tight">
          <span className="text-outline pr-4">WHAT YOU CAN</span>
          <span className="text-soundbook-light-blue">FIND</span>
        </h2>

        {/* Disclaimer */}
        <p className="text-center text-white/70 mb-16 max-w-3xl mx-auto text-sm md:text-base">
          We are not affiliated with SoundCloud, Spotify, or any streaming platform. All data is user-submitted or pulled from open APIs.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 border border-white/10 rounded-2xl p-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-4 ${index !== features.length - 1 ? 'border-r border-white/10' : ''}`}
            >
              {/* Circular icon with ring */}
              <div className="relative w-20 h-20 mb-6">
                <div className="absolute inset-0 rounded-full bg-soundbook-light-blue"></div>
                <div className="absolute inset-0 rounded-full border-2 border-gray-400/50 -m-1"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
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
