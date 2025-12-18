import React from 'react'

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
    <section className="relative py-20 md:py-32 border-b border-white/10">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center leading-tight">
          <span className="text-outline">THE</span>{' '}
          <span className="text-soundbook-light-blue">BEAT</span>{' '}
          <br />
          <span className="text-outline">OF THE</span>{' '}
          <span className="text-soundbook-light-blue">MOMENT</span>
        </h2>

        {/* Trending Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trendingItems.map((item, index) => (
            <div
              key={index}
              className="p-8"
            >
              <span className="inline-block px-4 py-1 bg-soundbook-light-blue text-white text-sm font-semibold rounded-full mb-4">
                {item.tag}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-white/70">
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
