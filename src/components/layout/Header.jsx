import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-soundbook-dark/80 backdrop-blur-md border-b border-soundbook-light-blue/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="text-2xl md:text-3xl font-bold text-white hover:text-soundbook-light-blue transition-colors">
            SOUNDBOOK
          </Link>
          <Link
            to="/login"
            className="px-6 py-2 md:px-8 md:py-3 bg-soundbook-light-blue text-white rounded-lg font-semibold hover:bg-soundbook-light-blue/90 transition-colors duration-200 flex items-center gap-2"
          >
            Sign in
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
