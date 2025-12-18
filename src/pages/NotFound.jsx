import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-soundbook-dark">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
          Page Not Found
        </h2>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-soundbook-light-blue text-white rounded-full font-semibold hover:bg-soundbook-light-blue/90 transition-colors duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
