import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsLoading(true)
    
    // Simulate API call
    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // On success, redirect to home or dashboard
      navigate('/')
    } catch (error) {
      setErrors({ submit: 'Sign up failed. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex">
      {/* Left Section - Content & Form (60%) */}
      <div className="w-full lg:w-[60%] flex flex-col px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 md:py-12">
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12">
          SOUNDBOOK
        </Link>

        {/* Welcome Message */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-4">
            WELCOME BACK
            <br />
            TO SOUNDBOOK
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-lg">
            Your gateway to contributing and exploring the world of music knowledge.
          </p>
        </div>

        {/* Sign Up Form Section */}
        <div className="max-w-md">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
            Create an Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name Input */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-normal text-white mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-[#1a1a1a] border ${
                  errors.fullName ? 'border-red-500' : 'border-gray-600'
                } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors`}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-normal text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-[#1a1a1a] border ${
                  errors.email ? 'border-red-500' : 'border-gray-600'
                } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors`}
                placeholder="Enter Email Address"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-normal text-white mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-[#1a1a1a] border ${
                  errors.password ? 'border-red-500' : 'border-gray-600'
                } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors`}
                placeholder="Enter your Password"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-400">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Input */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-normal text-white mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-[#1a1a1a] border ${
                  errors.confirmPassword ? 'border-red-500' : 'border-gray-600'
                } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors`}
                placeholder="Enter your Password"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-400">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Terms and Conditions Checkbox */}
            <div>
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-gray-600 bg-[#1a1a1a] text-white focus:ring-0 focus:ring-offset-0 cursor-pointer mt-1"
                />
                <span className="ml-2 text-sm text-gray-400">
                  I agree all terms and conditions
                </span>
              </label>
              {errors.agreeToTerms && (
                <p className="mt-1 text-sm text-red-400 ml-6">{errors.agreeToTerms}</p>
              )}
            </div>

            {/* Submit Error */}
            {errors.submit && (
              <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
                <p className="text-sm text-red-400">{errors.submit}</p>
              </div>
            )}

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing up...
                </>
              ) : (
                <>
                  Sign Up
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-soundbook-light-blue hover:text-soundbook-light-blue/80 font-semibold transition-colors"
              >
                Login now
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Vinyl Record Image (40%) */}
      <div className="hidden lg:flex lg:w-[40%] relative items-center justify-center p-8">
        {/* Pill-shaped container with vinyl record */}
        <div className="relative w-full h-full max-w-2xl rounded-[3rem] overflow-hidden">
          {/* Vinyl Record Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
            {/* Vinyl Record */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[80%] aspect-square">
                {/* Outer vinyl record */}
                <div className="absolute inset-0 rounded-full bg-black shadow-2xl">
                  {/* Grooves pattern */}
                  <div className="absolute inset-0 rounded-full" style={{
                    backgroundImage: `radial-gradient(circle at center, transparent 20%, rgba(255,255,255,0.03) 20.5%, transparent 21%, rgba(255,255,255,0.03) 21.5%, transparent 22%, rgba(255,255,255,0.03) 22.5%, transparent 23%, rgba(255,255,255,0.03) 23.5%, transparent 24%, rgba(255,255,255,0.03) 24.5%, transparent 25%, rgba(255,255,255,0.03) 25.5%, transparent 26%, rgba(255,255,255,0.03) 26.5%, transparent 27%, rgba(255,255,255,0.03) 27.5%, transparent 28%, rgba(255,255,255,0.03) 28.5%, transparent 29%, rgba(255,255,255,0.03) 29.5%, transparent 30%, rgba(255,255,255,0.03) 30.5%, transparent 31%, rgba(255,255,255,0.03) 31.5%, transparent 32%, rgba(255,255,255,0.03) 32.5%, transparent 33%, rgba(255,255,255,0.03) 33.5%, transparent 34%, rgba(255,255,255,0.03) 34.5%, transparent 35%, rgba(255,255,255,0.03) 35.5%, transparent 36%, rgba(255,255,255,0.03) 36.5%, transparent 37%, rgba(255,255,255,0.03) 37.5%, transparent 38%, rgba(255,255,255,0.03) 38.5%, transparent 39%, rgba(255,255,255,0.03) 39.5%, transparent 40%, rgba(255,255,255,0.03) 40.5%, transparent 41%, rgba(255,255,255,0.03) 41.5%, transparent 42%, rgba(255,255,255,0.03) 42.5%, transparent 43%, rgba(255,255,255,0.03) 43.5%, transparent 44%, rgba(255,255,255,0.03) 44.5%, transparent 45%, rgba(255,255,255,0.03) 45.5%, transparent 46%, rgba(255,255,255,0.03) 46.5%, transparent 47%, rgba(255,255,255,0.03) 47.5%, transparent 48%, rgba(255,255,255,0.03) 48.5%, transparent 49%, rgba(255,255,255,0.03) 49.5%, transparent 50%)`
                  }}></div>
                  
                  {/* Center label - dark teal/bluish-green */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[35%] h-[35%] rounded-full bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-500 opacity-80 blur-sm"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] rounded-full bg-gradient-to-br from-teal-500 via-cyan-400 to-teal-400"></div>
                  
                  {/* Center hole */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[8%] h-[8%] rounded-full bg-black"></div>
                </div>
                
                {/* Depth/shadow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-black/20 to-black/40"></div>
              </div>
            </div>
            
            {/* Subtle gradient overlay on far right */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-transparent via-purple-900/10 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
