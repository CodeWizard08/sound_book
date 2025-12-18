import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import backgroundImage from '../assets/image/whole-bg.png'

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* whole background */}
      <div className="absolute inset-0 bg-cover w-full h-full" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
