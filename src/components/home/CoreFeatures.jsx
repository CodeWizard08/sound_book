import React from 'react'

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
    <section className="relative py-20 md:py-32 bg-soundbook-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center leading-tight">
          <span className="text-outline">CORE FEATURES</span>
          <br />
          <span className="text-soundbook-light-blue">THAT POWER THE BEAT</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Feature List */}
          <div className="space-y-8">
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
            <div className="relative w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[500px]">
              {/* Microphone silhouette with blue spotlight */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Blue spotlight glow from bottom */}
                  <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-soundbook-light-blue/40 rounded-full blur-3xl"></div>
                  
                  {/* Microphone stand */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-40 bg-gray-400/80"></div>
                  
                  {/* Microphone body - vintage silver style */}
                  <div className="relative w-28 h-36 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 rounded-t-full shadow-2xl">
                    {/* Microphone head */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-b from-gray-100 to-gray-200 rounded-full border-2 border-gray-300"></div>
                    {/* Microphone grill */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gray-800 rounded-full"></div>
                    {/* Grill pattern */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full" style={{
                      backgroundImage: `radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.3) 30.5%, transparent 31%, rgba(0,0,0,0.3) 31.5%, transparent 32%, rgba(0,0,0,0.3) 32.5%, transparent 33%, rgba(0,0,0,0.3) 33.5%, transparent 34%, rgba(0,0,0,0.3) 34.5%, transparent 35%, rgba(0,0,0,0.3) 35.5%, transparent 36%, rgba(0,0,0,0.3) 36.5%, transparent 37%, rgba(0,0,0,0.3) 37.5%, transparent 38%, rgba(0,0,0,0.3) 38.5%, transparent 39%, rgba(0,0,0,0.3) 39.5%, transparent 40%, rgba(0,0,0,0.3) 40.5%, transparent 41%, rgba(0,0,0,0.3) 41.5%, transparent 42%, rgba(0,0,0,0.3) 42.5%, transparent 43%, rgba(0,0,0,0.3) 43.5%, transparent 44%, rgba(0,0,0,0.3) 44.5%, transparent 45%, rgba(0,0,0,0.3) 45.5%, transparent 46%, rgba(0,0,0,0.3) 46.5%, transparent 47%, rgba(0,0,0,0.3) 47.5%, transparent 48%, rgba(0,0,0,0.3) 48.5%, transparent 49%, rgba(0,0,0,0.3) 49.5%, transparent 50%)`
                    }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoreFeatures
