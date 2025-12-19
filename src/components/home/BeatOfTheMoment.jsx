import React from 'react'
import fourPointedStarsImage from '../../assets/image/landing/Star.png'

const BeatOfTheMoment = () => {
  const trendingItems = [
    {
      tag: "Top Genre",
      title: "Hyperpop",
      subtitle: "+78% weekly rise"
    },
    {
      tag: "Top Song",
      title: "Midnight Mirage",
      subtitle: "by Nova Pulse"
    },
    {
      tag: "Top Artist",
      title: "Burna Boy",
      subtitle: "42M views"
    }
  ]

  return (
    <section className="relative py-20 md:py-28 border-b border-white/10">

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 right-8">
          <img src={fourPointedStarsImage} alt="Four-pointed stars" className="w-14 h-14 object-cover" />
        </div>
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold mb-16 text-center leading-tight flex flex-col gap-4">
          <span className="text-outline">THE BEAT</span>
          <span className="text-white">OF THE MOMENT</span>
        </h2>

        {/* Trending Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto font-bdo-grotesk">
          {trendingItems.map((item, index) => (
            <div
              key={index}
              className="p-8"
            >
              <span className="inline-block px-7 py-1 bg-[#3967FD] text-white text-sm font-light rounded-full mb-4">
                {item.tag}
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-white font-light text-lg">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BeatOfTheMoment
