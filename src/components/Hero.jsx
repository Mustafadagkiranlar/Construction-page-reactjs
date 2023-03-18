import React from 'react'
import Navbar from './Navbar'
import videoBg from '../assets/videoBg.mp4'

export default function Hero() {
  return (
    <div id='home'>
      <Navbar />
      <div className="hero min-h-screen" style={{ backgroundImage: `url("./assets/architecture-4795667_1920.jpg")` }}>
        <video src={videoBg} autoPlay loop muted className='hidden lg:flex'/>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-7xl font-bold">ConsRuck</h1>
            <p className="mb-5">Your Security, Life, and Quality matters for us. Let's start a journey together</p>
          </div>
        </div>
      </div>
    </div>
  )
}
