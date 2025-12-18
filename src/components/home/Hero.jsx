import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import heroImage from '../../assets/image/landing/first-bg.png'

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Navigate to search page with query (will be implemented later)
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background */}
      {/* Image background */}
      {/* <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}></div> */}
      {/* Abstract wave patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-soundbook-light-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-soundbook-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-soundbook-light-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
          <span className="text-white">EXPLORE THE WORLD OF MUSIC</span>
          <br />
          <span className="text-outline">TOGETHER.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-3xl">
          A collaborative music encyclopedia where every beat has a story
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-2xl">
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a song, artist, or genre..."
              className="flex-1 w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-soundbook-light-blue focus:border-transparent"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-soundbook-light-blue text-white rounded-lg font-semibold hover:bg-soundbook-light-blue/90 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Search
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Hero
