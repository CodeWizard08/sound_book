import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import AuthLayout from '../layouts/AuthLayout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import NotFound from '../pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // Add more routes here as you build new pages
      // Example:
      // {
      //   path: 'search',
      //   element: <Search />,
      // },
      // {
      //   path: 'artist/:id',
      //   element: <ArtistDetail />,
      // },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      // Add more auth routes here
      // {
      //   path: 'forgot-password',
      //   element: <ForgotPassword />,
      // },
      // {
      //   path: 'forgot-password',
      //   element: <ForgotPassword />,
      // },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
