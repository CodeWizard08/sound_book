import React from 'react'
import microphoneImage from '../../assets/image/landing/microphone.png'

const CoreFeatures = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      title: "Rich Metadata for Every Entry",
      description: "Explore music genres, songs, artists, playlists, and terminology"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Auto-Fill from Streaming Links",
      description: "SOUNDBOOK automatically fetches artist, release date, and cover art."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      ),
      title: "Smart Discovery",
      description: "Filter by Genre, Artist, Popularity, Release Year, or Region."
    }
  ]

  return (
    <section className="relative py-20 md:py-32 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Feature List */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-16 leading-snug flex flex-col gap-4">
              <span className="text-outline">CORE FEATURES</span>
              <span className="text-soundbook-light-blue">THAT POWER THE BEAT</span>
            </h2>
            {features.map((feature, index) => (
              <div key={index} className="flex gap-6">
                {/* Circular icon with ring */}
                <div className="relative w-16 h-16 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-soundbook-light-blue"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-gray-400/50 -m-1"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Microphone Image */}
          <div className="relative flex justify-center lg:justify-end">
            <img src={microphoneImage} alt="Microphone" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoreFeatures
