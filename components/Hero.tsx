import React from 'react'
import Nav from './Nav'

const Hero = () => {
  return (
    <div className='min-h-screen'>

    <Nav/>
    <div className="relative overflow-hidden bg-blue-50 py-16 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
        <div className="max-w-md mx-auto lg:max-w-none lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Become a Blood & Genotype Expert in Minutes!
          </h1>
          <p className="mt-6 text-xl text-gray-500">
          Engage with exciting challenges, match blood types, and explore genotypes in a way you've never experienced before.
          </p>
          <div className="mt-8">
            {/* CTA */}

          </div>
        </div>
        <div className="mt-12 lg:mt-0">
        {/* Interaction */}
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Hero