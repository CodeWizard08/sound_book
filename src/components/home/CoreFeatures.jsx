import React from 'react'
import { AudioLines, MonitorPlay, SlidersVertical } from 'lucide-react'
import microphoneImage from '../../assets/image/landing/microphone.png'

const CoreFeatures = () => {
  const features = [
    {
      icon: <AudioLines className="w-6 h-6" />,
      title: "Rich Metadata for Every Entry",
      description: "Explore music genres, songs, artists, playlists, and terminology"
    },
    {
      icon: <MonitorPlay className="w-6 h-6" />,
      title: "Auto-Fill from Streaming Links",
      description: "SOUNDBOOK automatically fetches artist, release date, and cover art."
    },
    {
      icon: <SlidersVertical className="w-6 h-6" />,
      title: "Smart Discovery",
      description: "Filter by Genre, Artist, Popularity, Release Year, or Region."
    }
  ]

  return (
    <section className="relative py-20 md:py-32 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Feature List */}
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-16 leading-snug flex flex-col gap-4">
              <span className="text-outline">CORE FEATURES</span>
              <span className="text-soundbook-light-blue leading-snug">THAT POWER THE BEAT</span>
            </h2>
            {features.map((feature, index) => (
              <div key={index} className="flex gap-6 font-bdo-grotesk">
                {/* Circular icon with ring */}
                <div className="relative w-12 h-12 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-[#3967FD]"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-[22px] font-normal text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white leading-relaxed max-w-[440px] font-light text-lg">
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
