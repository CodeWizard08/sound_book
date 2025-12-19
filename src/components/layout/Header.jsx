import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MoveUpRight } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md ' : ''
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-28">
          <Link to="/" className="text-xl sm:text-2xl font-black font-moderniz text-white hover:text-soundbook-light-blue transition-colors">
            SOUNDBOOK
          </Link>
          <Link
            to="/"
            className="font-bdo-grotesk px-2 sm:px-6 py-2 h-[45px] bg-white text-soundbook-dark text-lg rounded-full hover:bg-soundbook-light-blue/90 transition-colors duration-200 flex items-center gap-2 font-light"
          >
            <span className='hidden md:block'>Sign in</span>
            <div className='w-7 h-7 bg-[#3967FD] rounded-full flex items-center justify-center'>
              <MoveUpRight className="w-4 h-4 text-white" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
