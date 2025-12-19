import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Loader2, ArrowRight } from 'lucide-react'
import loginImage from '../assets/image/login/bg.png'
import backgroundImage from '../assets/image/whole-bg.png'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
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
      setErrors({ submit: 'Login failed. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* background image */}
      <img src={backgroundImage} alt="Background" className="w-full h-full object-cover absolute top-0 left-0 z-0" />
      {/* Left Section - Content & Form (60%) */}
      <div className="w-full lg:w-[70%] flex flex-col px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 md:py-12 z-10">
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12">
          SOUNDBOOK
        </Link>

        {/* Welcome Message */}
        <div className="mb-8 md:mb-12 font-bdo-grotesk">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            WELCOME BACK
            <br />
            TO SOUNDBOOK
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-[590px]">
            Your gateway to contributing and exploring the world of music knowledge.
          </p>
        </div>

        {/* Login Form Section */}
        <div className="max-w-md font-bdo-grotesk">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
            Log In to Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
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
                className={`w-full px-4 py-3 bg-[#1a1a1a] border ${errors.email ? 'border-red-500' : 'border-gray-600'
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
                className={`w-full px-4 py-3 bg-[#1a1a1a] border ${errors.password ? 'border-red-500' : 'border-gray-600'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors`}
                placeholder="Enter your Password"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-400">{errors.password}</p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-600 bg-[#1a1a1a] text-white focus:ring-0 focus:ring-offset-0 cursor-pointer"
                />
                <span className="ml-2 text-sm text-gray-400">Remember Me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-soundbook-light-blue hover:text-soundbook-light-blue/80 transition-colors"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Error */}
            {errors.submit && (
              <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
                <p className="text-sm text-red-400">{errors.submit}</p>
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 text-black animate-spin" />
                  Logging in...
                </>
              ) : (
                <>
                  Login
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="text-soundbook-light-blue hover:text-soundbook-light-blue/80 font-semibold transition-colors"
              >
                Sign up now
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Vinyl Record Image (40%) */}
      <div className="hidden lg:flex lg:w-[60%] relative items-center justify-center p-8">
        <img src={loginImage} alt="Login" className="w-full h-full object-cover rounded-3xl" />
      </div>
    </div>
  )
}

export default Login
