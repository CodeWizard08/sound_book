import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MoveUpRight } from 'lucide-react'

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <h1 className="text-3xl font-moderniz sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 flex flex-col gap-4">
          <span className="text-white">EXPLORE</span>
          <span className="text-white">THE WORLD OF MUSIC</span>
          <span className="text-outline ">TOGETHER.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-base font-bdo-grotesk md:text-lg text-white/90 mb-8 max-w-3xl">
          A collaborative music encyclopedia where every beat has a story.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-4xl">
          <div className="flex py-3 px-4 sm:flex-row gap-3 items-center w-full bg-[#FFFFFF14] backdrop-blur-sm rounded-full text-white  focus:ring-2 focus:ring-soundbook-light-blue focus:border-transparent">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a song, artist, or genre..."
              className="placeholder-[#FFFFFF5C] ml-2 md:ml-9 bg-transparent flex-1 focus:outline-none font-bdo-grotesk"
            />
            <button
              type="submit"
              className="px-2 py-2 font-bdo-grotesk md:px-6 h-[45px] text-lg bg-white text-soundbook-dark rounded-full font-light hover:bg-soundbook-light-blue/90 transition-colors duration-200 flex items-center gap-2"
            >
              <span className='hidden md:block'>Search</span>
              <div className='w-7 h-7 bg-[#3967FD] rounded-full flex items-center justify-center'>
                <MoveUpRight className="w-4 h-4 text-white" />
              </div>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Hero
