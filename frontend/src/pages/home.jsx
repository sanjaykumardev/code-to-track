/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/navbar'
import HomePage from '../components/homepage'
function home() {
  return (
    <div className='bg-gray-900 text-white h-full'>
      <Navbar />
      <HomePage />
    </div>
  )
}

export default home
