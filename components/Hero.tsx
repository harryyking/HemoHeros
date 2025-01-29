import React from 'react'
import Nav from './Nav'

const Hero = () => {
  return (
    <div className='min-h-screen p-4'>

    <Nav/>
    <div className="hero min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-xl">
      <h1 className="text-5xl font-bold">Become a Blood & Genotype Expert in Minutes!</h1>
      <p className="py-6">
      Engage with exciting challenges, match blood types, and explore genotypes in a way you've never experienced before.
      </p>
      <button className="btn btn-primary">Play Game</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero