import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
          <Link to="/" className="text-2xl md:text-3xl font-bold text-white hover:text-soundbook-light-blue transition-colors">
            SOUNDBOOK
          </Link>
          <Link
            to="/login"
            className="px-6 py-2 md:px-6 md:py-2 bg-white text-soundbook-dark rounded-full font-semibold hover:bg-soundbook-light-blue/90 transition-colors duration-200 flex items-center gap-2"
          >
            Sign in
            <div className='w-8 h-8 bg-soundbook-light-blue rounded-full flex items-center justify-center'>
              <svg className="w-4 h-4" fill="none" stroke="#fff" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
